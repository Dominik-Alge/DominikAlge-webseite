import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hallo! Ich bin DominikAI. Wie kann ich dir heute helfen?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Deine exakte, spezifische Backend-URL inklusive API-Endpunkt
      const response = await fetch("https://onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });


      if (!response.ok) throw new Error("Netzwerkfehler");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Der KI-Server startet gerade im Hintergrund neu. Bitte versuche es in wenigen Sekunden noch einmal." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-inner">
      {/* Nachrichtenverlauf */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[80%] p-3 rounded-xl text-sm ${
              msg.role === "user"
                ? "bg-slate-900 text-white self-end rounded-br-none shadow-md"
                : "bg-white text-slate-800 border border-slate-200 self-start rounded-bl-none shadow-sm"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && (
          <div className="bg-white text-slate-500 border border-slate-200 self-start p-3 rounded-xl rounded-bl-none text-sm animate-pulse shadow-sm">
            DominikAI liest Dokumente...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Eingabebereich */}
      <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Frage mich etwas über Dominik..."
          disabled={isLoading}
          className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-sm disabled:bg-slate-100"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition disabled:opacity-50"
        >
          Senden
        </button>
      </form>
    </div>
  );
}
