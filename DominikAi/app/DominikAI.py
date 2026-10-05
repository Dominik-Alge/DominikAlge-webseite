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

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://dominikalge.ch",
        "https://dominikalge.ch",
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# HIER SPEICHERN WIR DAS WISSEN GLOBAL IM ARBEITSSPEICHER (NUR EINMAL LADEN)
GLOBAL_KNOWLEDGE_BASE = ""

def build_knowledge_index():
    """Liest alle Dokumente einmalig beim Serverstart ein"""
    global GLOBAL_KNOWLEDGE_BASE
    print("🚀 Starte Indizierung der Wissensdatenbank...")
    
    knowledge_text = ""
    possible_paths = ["DominikAi/knowledge/*", "knowledge/*", "app/knowledge/*", "../knowledge/*"]
    knowledge_files = []
    for path in possible_paths:
        knowledge_files.extend(glob.glob(path))
    
    knowledge_files = list(set(knowledge_files))

    for file_path in knowledge_files:
        file_name = os.path.basename(file_path).lower()
        try:
            if file_name.endswith('.md') or file_name.endswith('.txt'):
                with open(file_path, "r", encoding="utf-8") as f:
                    knowledge_text += f"\n--- DOKUMENT: {os.path.basename(file_path)} ---\n{f.read()}\n"
            
            elif file_name.endswith('.pdf'):
                reader = PdfReader(file_path)
                pdf_content = "".join([page.extract_text() or "" for page in reader.pages])
                knowledge_text += f"\n--- PDF-DOKUMENT: {os.path.basename(file_path)} ---\n{pdf_content}\n"
            
            elif file_name.endswith('.xlsx'):
                wb = openpyxl.load_workbook(file_path, data_only=True)
                excel_content = ""
                for sheet in wb.sheetnames:
                    excel_content += f" Tabellenblatt: {sheet}\n"
                    for row in wb[sheet].iter_rows(values_only=True):
                        row_text = " | ".join([str(cell) for cell in row if cell is not None])
                        if row_text.strip():
                            excel_content += row_text + "\n"
                knowledge_text += f"\n--- TABELLE/DATENBANK: {os.path.basename(file_path)} ---\n{excel_content}\n"

        except Exception as e:
            print(f"Fehler beim Einlesen von {file_path}: {e}")
            
    GLOBAL_KNOWLEDGE_BASE = knowledge_text
    print(f"✅ Indizierung abgeschlossen! {len(GLOBAL_KNOWLEDGE_BASE)} Zeichen geladen.")

# Event-Trigger: Führt den Code beim Starten des Render-Servers aus
@app.on_event("startup")
async def startup_event():
    build_knowledge_index()

SYSTEM_PROMPT = """Du bist DominikAI, der persönliche, KI-gestützte Assistent auf der offiziellen Website von Dominik Alge (dominikalge.ch). 
Deine Aufgabe ist es, Fragen zu Dominiks Person, seinem Lebenslauf, seinen politischen Positionen, seiner Arbeit in der Industrie und seinen Publikationen kompetent, freundlich und präzise zu beantworten. 
Antworte immer in der Ich-Perspektive für Dominik oder als sein persönlicher Sprecher. Bleibe stets professionell und sachlich.

WICHTIGE SICHERHEITSREGEL: Antworte AUSSCHLIESSLICH auf Basis der unten bereitgestellten Informationen aus Dominiks Dokumenten. Wenn eine Information nicht darin steht oder du die Antwort nicht weißt, erfinde auf keinen Fall etwas (keine Halluzinationen!). 
Antworte in diesem Fall stattdessen höflich auf Deutsch: „Dazu liegen mir aktuell leider keine genauen Informationen vor. Bitte wende dich bei spezifischen Fragen direkt an Dominik.“

HIER IST DEIN VERFÜGBARES WISSEN AUS DEN DATEIEN:
"""

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        # Kein Festplatten-Zugriff mehr! Holt die Daten direkt blitzschnell aus dem RAM
        response = client.models.generate_content(
            model='gemini-3-flash-preview',
            contents=request.message,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT + GLOBAL_KNOWLEDGE_BASE,
                temperature=0.15
            )
        )
        return {"reply": response.text}
    except Exception as e:
        print(f"Backend Fehler: {e}")
        raise HTTPException(status_code=500, detail="KI-Verarbeitung fehlgeschlagen")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("DominikAI:app", host="0.0.0.0", port=10000, reload=True)
