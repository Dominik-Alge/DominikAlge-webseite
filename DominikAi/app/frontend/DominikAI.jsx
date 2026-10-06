import { useState } from "react";
import Chat from "./Chat";

export default function DominikAI() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Das neue, geöffnete Intro-Banner */}
      <div className="bg-slate-50 border-l-4 border-slate-500 p-5 rounded-r-xl shadow-sm">
        <div className="flex items-start gap-4">
          <span className="text-2xl animate-pulse">🧠🤖</span>
          <div>
            <h3 className="text-slate-800 font-bold md:text-lg text-base leading-tight">
              Willkommen bei DominikAI!
            </h3>
            <p className="text-slate-600 text-xs md:text-sm mt-1 leading-relaxed">
              Ich habe meine digitale Kopie mit meinen politischen Standpunkten, Meilensteinen und Lebensweisheiten gefüttert. 
              Frag sie ungeniert aus – sie versucht, genau so zu antworten, wie ich es tun würde!
            </p>
          </div>
        </div>
      </div>

      {/* Die eigentliche Chat-Oberfläche */}
      <Chat />
    </div>
  );
}

