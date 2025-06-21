import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaListUl,
  FaClipboardList,
  FaVideo,
} from "react-icons/fa";
import { FaRegMessage, FaPaperPlane } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import SideBarDoctor from "./SideBarDoctor";
import VideoCallPopup from "./VideoCallPopup";

const customers = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Customer ${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
  lastMessage: "Hello doctor, I need help with my dog",
  messages: [
    { from: "customer", text: "Hello doctor, I need help with my dog", time: "7:45" },
    { from: "doctor", text: "Sure! What's the issue?", time: "7:46" },
    { from: "customer", text: "My dog is not eating.", time: "7:50" },
  ],
}));

const MessageCustomer = () => {
  const location = useLocation();
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [isCalling, setIsCalling] = useState(false);
const [showVideoPopup, setShowVideoPopup] = useState(false);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const updatedCustomer = {
      ...selectedCustomer,
      messages: [
        ...selectedCustomer.messages,
        { from: "doctor", text: newMessage.trim(), time },
      ],
      lastMessage: newMessage.trim(),
    };
    setSelectedCustomer(updatedCustomer);
    setNewMessage("");
  };

  return (
    <>
    <div className="flex min-h-screen font-sans bg-pink-100">
      {/* Sidebar */}
      <SideBarDoctor />

      {/* Main */}
      <main className="flex-1 p-8 ml-60">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold">Message List</p>
          <div className="flex items-center gap-4">
            <FaSearch className="text-gray-500" />
            <FaBell className="text-gray-500" />
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/40" alt="avatar" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-bold">Tran Minh Nhut</p>
                <p className="text-xs text-gray-500">nhutminhsondesign@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Message List */}
          <div className="bg-white rounded-xl shadow p-4 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Customer Messages</h3>
            <ul className="space-y-3">
              {customers.map((c) => (
                <li
                  key={c.id}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-pink-100 ${
                    selectedCustomer?.id === c.id ? "bg-pink-200" : ""
                  }`}
                  onClick={() => {
                    setSelectedCustomer(c);
                    setIsCalling(false); // reset call view if switching customer
                  }}
                >
                  <img src={c.avatar} alt={c.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-xs text-gray-500 truncate max-w-[180px]">
                      {c.lastMessage}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat / Calling Window */}
          <div className="col-span-2 bg-white rounded-xl shadow flex flex-col p-4">
            {selectedCustomer ? (
              isCalling ? (
                // Calling UI
                <div className="flex flex-col items-center justify-center flex-1">
                  <div className="flex items-center gap-6 mb-6">
                    <img
                      src={selectedCustomer.avatar}
                      alt={selectedCustomer.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-pink-500 font-semibold text-lg mb-3">
                    Connecting <span className="animate-pulse">●●●</span>
                  </p>
                  <button
                    onClick={() => setIsCalling(false)}
                    className="bg-pink-300 text-white rounded-full p-3 hover:bg-pink-600"
                  >
                    📞
                  </button>
                </div>
              ) : (
                // Chat UI
                <>
                  <div className="flex items-center justify-between border-b border-pink-300 pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={selectedCustomer.avatar}
                        alt={selectedCustomer.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <h2 className="text-xl font-semibold">{selectedCustomer.name}</h2>
                    </div>
                    <FaVideo
                      className="text-xl text-pink-400 cursor-pointer hover:text-pink-600"
                      onClick={() => setShowVideoPopup(true)}
                    />
                  </div>

                  <div className="flex-1 space-y-4 max-h-[500px] overflow-y-auto pr-3">
                    {selectedCustomer.messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`max-w-[70%] ${msg.from === "doctor" ? "ml-auto text-right" : "text-left"}`}
                      >
                        <div
                          className={`p-3 rounded-lg inline-block ${
                            msg.from === "doctor"
                              ? "bg-pink-500 text-white"
                              : "bg-gray-200 text-black"
                          }`}
                        >
                          {msg.text}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 pt-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border rounded-md text-sm"
                    />
                    <button
                      onClick={handleSend}
                      className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                    >
                      <FaPaperPlane />
                    </button>
                  </div>
                </>
              )
            ) : (
              <p className="text-center text-gray-500 mt-20">
                Select a customer to view messages.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
     <VideoCallPopup
      isOpen={showVideoPopup}
      onClose={() => setShowVideoPopup(false)}
    />
      </>
  );
  
};

export default MessageCustomer;
