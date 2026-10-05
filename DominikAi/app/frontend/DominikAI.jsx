import { useState } from "react";
import Chat from "./Chat?v=2";

export default function DominikAI() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Gewünschter Hinweisbanner für die Entwicklungsphase */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
        <div className="flex items-start gap-3">
          <span className="text-xl">⚠️</span>
          <div>
            <h3 className="text-amber-800 font-semibold md:text-base text-sm">
              Dominik AI befindet sich aktuell in einer geschlossenen Entwicklungsphase.
            </h3>
            <p className="text-amber-700 text-xs md:text-sm mt-1">
              Antworten können unvollständig oder fehlerhaft sein.
            </p>
          </div>
        </div>
      </div>

      {/* Die eigentliche Chat-Oberfläche */}
      <Chat />
    </div>
  );
}

