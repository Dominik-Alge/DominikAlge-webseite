import { useState } from "react";
import Chat from "./Chat";

export default function DominikAI() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Das eigentliche Chat-Interface steht jetzt ganz oben */}
      <Chat />

      {/* Die Anleitung dezent darunter platziert */}
      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-xl shadow-sm mt-2">
        <div className="flex items-start gap-4">
          <span className="text-xl">💡</span>
          <div>
            <h4 className="text-slate-800 font-bold text-xs md:text-sm leading-tight">
              So funktioniert's:
            </h4>
            <p className="text-slate-600 text-[11px] md:text-xs mt-1 leading-relaxed">
              Löchere die KI mit Fragen zu Industrie, Bildung, Freiheit oder meinen Meilensteinen. Sie versucht, so direkt und schlagfertig zu antworten wie ich – nur ganz ohne Kaffeepause.
            </p>
          </div>
        </div>
      </div>
      {/* NEU: Separater, auffälliger Kasten speziell für Medienschaffende */}
      <div className="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-xl shadow-sm flex flex-col gap-2">
        <div className="flex items-start gap-4">
          <span className="text-xl">⚠️</span>
          <div>
            <h4 className="text-slate-800 font-bold text-xs md:text-sm leading-tight uppercase tracking-wider text-slate-700">
              Wichtiger Hinweis
            </h4>
            <p className="text-slate-600 text-[11px] md:text-xs mt-1 leading-relaxed">
              <strong className="text-slate-900 font-extrabold text-xs md:text-sm">Für Medienschaffende:</strong> Die Antworten dieses Chatbots sind nicht zur Zitierung bestimmt. Wenn Sie verbindliche, zitierfähige Zitate wünschen, kontaktieren Sie mich bitte direkt über den Bereich weiter unten.
            </p>
          </div>
        </div>
        {/* Der animierte Pfeil zum direkt darunterliegenden Kontaktbereich */}
        <div className="text-center text-base text-slate-400 animate-bounce mt-1">
          👇
        </div>
      </div>
    </div>
  );
}

