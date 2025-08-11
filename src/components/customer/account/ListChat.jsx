import React from "react";

/** Mock data */
const chats = [
  {
    id: "hoang",
    name: "Doctor Hoang",
    avatar: "https://i.pravatar.cc/80?img=11",
    lastMessage: "Hello, can I help you?",
    time: "19:04",
    online: true,
  },
  { id: "jack",  name: "Doctor Jack",  avatar: "https://i.pravatar.cc/80?img=12", lastMessage: "", time: "", online: true },
  { id: "nhut",  name: "Doctor Nhut",  avatar: "https://i.pravatar.cc/80?img=13", lastMessage: "", time: "", online: false },
  { id: "hieu",  name: "Doctor Hieu",  avatar: "https://i.pravatar.cc/80?img=14", lastMessage: "", time: "", online: true },
  { id: "vu",    name: "Doctor Vu",    avatar: "https://i.pravatar.cc/80?img=15", lastMessage: "", time: "", online: false },
  { id: "minh",  name: "Doctor Minh",  avatar: "https://i.pravatar.cc/80?img=16", lastMessage: "", time: "", online: true },
];

const OnlineDot = ({ on }) => (
  <span
    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-white ${
      on ? "bg-green-500" : "bg-gray-300"
    }`}
  />
);

const ListChat = ({ onSelect }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-pink-400 text-white  text-sm font-semibold px-5 py-3">
        Messages
      </div>

      {/* Rows */}
      <ul className="divide-y divide-gray-200 bg-gray-50">
        {chats.map((c) => (
          <li
            key={c.id}
            className="bg-white hover:bg-gray-50 transition px-4 sm:px-5"
          >
            <button
              onClick={() => onSelect?.(c)}
              className="w-full flex items-center gap-4 py-3 text-left"
            >
              {/* avatar + online dot */}
              <div className="relative">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <OnlineDot on={c.online} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-800">{c.name}</div>
                {c.lastMessage ? (
                  <div className="text-sm text-gray-600 truncate">
                    {c.lastMessage}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">No messages yet</div>
                )}
              </div>

              <div className="text-xs text-gray-400 whitespace-nowrap">
                {c.time}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListChat;
