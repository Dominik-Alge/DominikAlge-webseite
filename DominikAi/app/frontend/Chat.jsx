export default function Chat() {
  // 1. Hier fügst du gleich deine eigene Webchat-URL aus dem Microsoft Portal ein
  const copilotUrl = "HIER_DEINE_KOPIERTE_COPILOT_STUDIO_URL_EINFÜGEN";

  return (
    <div className="flex flex-col h-[550px] border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* 2. Das offizielle Microsoft Webchat-Fenster */}
      <iframe
        src={copilotUrl}
        frameBorder="0"
        style={{ width: "100%", height: "100%" }}
        allow="microphone *"
        title="DominikAI Chatbot"
      />
    </div>
  );
}

