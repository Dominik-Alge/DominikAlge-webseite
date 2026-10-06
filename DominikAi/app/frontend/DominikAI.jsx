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
    </div>
  );
}

