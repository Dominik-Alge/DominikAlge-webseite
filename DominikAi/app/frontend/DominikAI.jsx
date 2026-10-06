import { useState } from "react";
import Chat from "./Chat";

export default function DominikAI() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Das neue, geöffnete Intro-Banner */}
      <div className="bg-slate-50 border-l-4 border-slate-500 p-5 rounded-r-xl shadow-sm">
        <div className="flex items-start gap-4">
          <span className="text-2xl">💬🚀</span>
          <div>
            <h3 className="text-slate-800 font-bold md:text-lg text-base leading-tight">
              So funktioniert's:
            </h3>
            <p className="text-slate-600 text-xs md:text-sm mt-1 leading-relaxed">
              Löchere die KI mit Fragen zu Industrie, Bildung, Freiheit oder meinen Meilensteinen. Sie versucht, so direkt und schlagfertig zu antworten wie ich – nur ganz ohne Kaffeepause.
            </p>
          </div>
        </div>
      </div>

      {/* Die eigentliche Chat-Oberfläche */}
      <Chat />
    </div>
  );
}

