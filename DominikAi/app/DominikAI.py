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

# Hier wird das kompakte Excel-Wissen global im RAM gespeichert
GLOBAL_KNOWLEDGE_BASE = ""

def build_knowledge_index():
    """Liest AUSSCHLIESSLICH die zentrale Index-Excel ein"""
    global GLOBAL_KNOWLEDGE_BASE
    print("🚀 Starte ultrakompakte Indizierung via knowledge_index.xlsx...")
    
    excel_content = ""
    
    # Mögliche Pfade zur Index-Datei (lokal & Render-Server)
    possible_paths = [
        "DominikAi/app/metadaten/knowlege_index.xlsx",
        "app/metadaten/knowlege_index.xlsx",
        "metadaten/knowlege_index.xlsx"
    ]
    
    target_file = None
    for path in possible_paths:
        if os.path.exists(path):
            target_file = path
            break
            
    if not target_file:
        print("⚠️ WARNUNG: knowlege_index.xlsx wurde in keinem Pfad gefunden!")
        return

    try:
        wb = openpyxl.load_workbook(target_file, data_only=True)
        for sheet in wb.sheetnames:
            excel_content += f" Rubrik: {sheet}\n"
            ws = wb[sheet]
            for row in ws.iter_rows(values_only=True):
                # Zeilen kompakt mit | trennen, leere Zellen ignorieren
                row_text = " | ".join([str(cell) for cell in row if cell is not None])
                if row_text.strip():
                    excel_content += row_text + "\n"
        
        GLOBAL_KNOWLEDGE_BASE = excel_content
        print(f"✅ Index erfolgreich geladen! {len(GLOBAL_KNOWLEDGE_BASE)} Zeichen im RAM.")

    except Exception as e:
        print(f"Fehler beim Einlesen der Excel-Matrix: {e}")

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
