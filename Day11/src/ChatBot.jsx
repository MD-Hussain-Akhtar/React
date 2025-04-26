import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const API_KEY = "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"

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = {
        text: response.data.choices[0].message.content,
        sender: "bot",
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg mx-auto mt-10 p-6 rounded-lg max-w-lg">
      <h2 className="mb-4 font-bold text-xl text-center">AI ChatBot</h2>

      <div className="mb-4 p-3 border rounded-lg h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l-lg"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 px-4 py-2 rounded-r-lg text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
