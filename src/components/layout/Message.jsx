import { useState, useEffect } from "react";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);
  const [lastMsg, setLastMsg] = useState("");

  // Atualiza o estado direto na renderização (padrão moderno do React)
  if (msg !== lastMsg) {
    setLastMsg(msg);
    setVisible(!!msg); // Se tiver msg fica true, vazia fica false
  }

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <>
      {visible && (
        <div
          className={`w-full p-4 mb-4 border rounded-md text-center mx-auto max-w-md font-medium ${
            type === "success"
              ? "text-green-700 bg-green-100 border-green-400"
              : "text-red-700 bg-red-100 border-red-400"
          }`}
        >
          <p>{msg}</p>
        </div>
      )}
    </>
  );
}

export default Message;
