import React, { useEffect, useRef, useState } from "react";
import VideoCallModal from "../../../components/customer/account/VideoCallModal";

const nowHHmm = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const ChatWindow = ({ chat, onBack }) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, from: "other", text: "Hello doctor, I need help with my dog", time: "7:45" },
    { id: 2, from: "me",    text: "Sure! What's the issue?",                time: "7:46" },
    { id: 3, from: "other", text: "My dog is not eating.",                  time: "7:50" },
  ]);

  // refs
  const listRef = useRef(null);     // khung list để cuộn nội bộ
  const inputRef = useRef(null);    // textarea để giữ focus sau khi gửi

  // trạng thái mở/đóng modal gọi video
  const [openCall, setOpenCall] = useState(false);

  // luôn cuộn xuống cuối khi có tin nhắn mới (chỉ trong khung list)
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const doSend = () => {
    const t = text.trim();
    if (!t) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "me", text: t, time: nowHHmm() },
    ]);
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();      // chặn submit mặc định => không nhảy trang
    doSend();
    // giữ focus lại vào textarea nhưng không cuộn trang
    inputRef.current?.focus({ preventScroll: true });
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-pink-200 bg-pink-50">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 sm:px-6 py-3 border-b border-pink-200 bg-white">
        <button
          onClick={onBack}
          className="mr-1 rounded-full p-2 hover:bg-gray-100 active:scale-95"
          title="Back"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-500">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        <img
          src={chat.avatar}
          alt={chat.name}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="font-semibold">{chat.name}</div>

        <div className="ml-auto flex gap-2">
          {/* nút gọi video */}
          <button
            className="rounded-lg p-2 text-pink-500 hover:bg-pink-50"
            title="Video"
            onClick={() => setOpenCall(true)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path fill="currentColor" d="M17 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5l4 4v-11z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={listRef}
        className="h-[60vh] sm:h-[62vh] overflow-y-auto overscroll-contain px-3 sm:px-6 py-4 bg-white"
      >
        {messages.map((m) => (
          <div key={m.id} className={`mb-6 ${m.from === "me" ? "text-right" : ""}`}>
            <div
              className={`inline-block max-w-[85%] sm:max-w-[70%] rounded-xl px-4 py-3 text-[15px] leading-6
              ${m.from === "me" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-800"}`}
            >
              {m.text}
            </div>
            <div className="mt-1 text-xs text-gray-500">{m.time}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="bg-pink-50 p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <textarea
            ref={inputRef}
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onKey}
            placeholder="Type your message..."
            className="flex-1 resize-none rounded-xl border border-gray-300 bg-white px-3 py-3
                       focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            // tránh nút cướp focus -> trình duyệt cuộn trang
            onMouseDown={(e) => e.preventDefault()}
            className="h-12 w-12 shrink-0 rounded-xl bg-pink-500 text-white hover:bg-pink-600
                       active:scale-95 grid place-items-center"
            title="Send"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path fill="currentColor" d="M2 21l21-9L2 3v7l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </form>

      {/* Modal gọi video */}
      <VideoCallModal
        open={openCall}
        onClose={() => setOpenCall(false)}
        peerName={chat?.name || "Doctor"}
      />
    </div>
  );
};

export default ChatWindow;
