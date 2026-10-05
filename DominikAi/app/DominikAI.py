import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI

# .env Datei laden
load_dotenv()

app = FastAPI(title="DominikAI API")

# CORS aktivieren, damit dein React-Frontend (z.B. auf Port 5173) zugreifen darf
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Für die lokale Entwicklung. Später auf deine Domain einschränken.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Verbindung zum OpenAI Client herstellen
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Struktur für die eingehende Anfrage definieren
class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        # Erste einfache Abfrage an das LLM
        response = client.chat.completions.create(
            model="gpt-4o-mini", # Extrem schnell und kostengünstig für Chatbots
            messages=[
                {"role": "system", "content": "Du bist DominikAI, der persönliche Assistent auf der Website von Dominik Alge. Antworte freundlich, präzise und professionell."},
                {"role": "user", "content": request.message}
            ],
            temperature=0.7
        )
        
        ai_reply = response.choices[0].message.content
        return {"reply": ai_reply}

    except Exception as e:
        print(f"Fehler im Backend: {e}")
        raise HTTPException(status_code=500, detail="Fehler bei der Verarbeitung durch die KI")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("DominikAI:app", host="127.0.0.1", port=8000, reload=True)

