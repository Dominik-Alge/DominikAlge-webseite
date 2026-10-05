export default function Chat() {
  // 1. FÜGE HIER NUR DIE URL (DEN SRC-TEIL) AUS DEINEM EINBETTUNGSCODE EIN:
  const copilotUrl = "https://copilotstudio.microsoft.com/environments/Default-5a1b6bfb-cf5f-44c1-ba0e-3694f8b353c1/bots/cr797_dominikai_oxr914/webchat?__version__=2&enableFileAttachment=false&cliAgent=true";

  return (
    <div className="flex flex-col h-[550px] border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Das eingebettete Microsoft-Fenster */}
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


