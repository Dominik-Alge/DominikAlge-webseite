import os
import glob
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from google import genai
from google.genai import types
from pypdf import PdfReader
import openpyxl

load_dotenv()

app = FastAPI(title="DominikAI API")

# CORS Konfiguration für deine Live-Webseite anpassen
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://www.dominikalge.ch",
        "https://dominikalge.ch",
        "http://localhost:5173"  # Für deine lokale Entwicklung am PC
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Initialisiert den kostenlosen Google Client mit der korrekten Variable
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def load_knowledge():
    knowledge_text = ""
    # Pfade flexibel durchsuchen (lokal und auf dem Render-Linux-Server)
    possible_paths = ["DominikAi/knowledge/*", "knowledge/*", "app/knowledge/*", "../knowledge/*"]
    knowledge_files = []
    for path in possible_paths:
        knowledge_files.extend(glob.glob(path))
    
    # Duplikate entfernen
    knowledge_files = list(set(knowledge_files))

    for file_path in knowledge_files:
        file_name = os.path.basename(file_path).lower()
        try:
            # 1. MARKDOWN / TEXT
            if file_name.endswith('.md') or file_name.endswith('.txt'):
                with open(file_path, "r", encoding="utf-8") as f:
                    knowledge_text += f"\n--- DOKUMENT: {os.path.basename(file_path)} ---\n"
                    knowledge_text += f.read() + "\n"
            
            # 2. PDFs AUSLESEN
            elif file_name.endswith('.pdf'):
                reader = PdfReader(file_path)
                pdf_content = ""
                for page in reader.pages:
                    text = page.extract_text()
                    if text:
                        pdf_content += text + "\n"
                knowledge_text += f"\n--- PDF-DOKUMENT: {os.path.basename(file_path)} ---\n"
                knowledge_text += pdf_content + "\n"
            
            # 3. EXCEL-TABELLEN (.XLSX) AUSLESEN
            elif file_name.endswith('.xlsx'):
                wb = openpyxl.load_workbook(file_path, data_only=True)
                excel_content = ""
                for sheet in wb.sheetnames:
                    excel_content += f" Tabellenblatt: {sheet}\n"
                    ws = wb[sheet]
                    for row in ws.iter_rows(values_only=True):
                        row_text = " | ".join([str(cell) for cell in row if cell is not None])
                        if row_text.strip():
                            excel_content += row_text + "\n"
                knowledge_text += f"\n--- TABELLE/DATENBANK: {os.path.basename(file_path)} ---\n"
                knowledge_text += excel_content + "\n"

        except Exception as e:
            print(f"Fehler beim Einlesen von {file_path}: {e}")
            
    return knowledge_text

SYSTEM_PROMPT = """Du bist DominikAI, der persönliche, KI-gestützte Assistent auf der offiziellen Website von Dominik Alge (dominikalge.ch). 
Deine Aufgabe ist es, Fragen zu Dominiks Person, seinem Lebenslauf, seinen politischen Positionen, seiner Arbeit in der Industrie und seinen Publikationen kompetent, freundlich und präzise zu beantworten. 
Antworte immer in der Ich-Perspektive für Dominik oder als sein persönlicher Sprecher. Bleibe stets professionell und sachlich.

WICHTIGE SICHERHEITSREGEL: Antworte AUSSCHLIESSLICH auf Basis der unten bereitgestellten Informationen aus Dominiks Dokumenten. Wenn eine Information nicht darin steht oder du die Antwort nicht weißt, erfinde auf keinen Fall etwas (keine Halluzinationen!). 
Antworte in diesem Fall stattdessen höflich auf Deutsch: „Dazu liegen mir aktuell leider keine genauen Informationen vor. Bitte wende dich bei spezifischen Fragen direkt an Dominik.“

HIER IST DEIN VERFÜGBARES WISSEN AUS DEINEN DATEIEN (PDF, EXCEL, MARKDOWN):
"""

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        context = load_knowledge()
        
        # Aufruf des Gemini 3 Flash Preview Modells aus deiner Google Studio Liste
        response = client.models.generate_content(
            model='gemini-3-flash-preview',
            contents=request.message,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT + context,
                temperature=0.15
            )
        )
        
        return {"reply": response.text}
    except Exception as e:
        print(f"Backend Fehler: {e}")
        raise HTTPException(status_code=500, detail="KI-Verarbeitung fehlgeschlagen")

if __name__ == "__main__":
    import uvicorn
    # Port 10000 ist der Standardport für Web Services auf Render
    uvicorn.run("DominikAI:app", host="0.0.0.0", port=10000, reload=True)
