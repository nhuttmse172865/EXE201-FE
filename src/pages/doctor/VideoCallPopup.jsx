import React, { useEffect, useRef, useState } from "react";
import {
  FaPhoneSlash,
  FaVideo,
  FaVideoSlash,
  FaMicrophone,
  FaMicrophoneSlash,
  FaPaperPlane,
} from "react-icons/fa";

const VideoCallPopup = ({ isOpen, onClose }) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [connecting, setConnecting] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState(["You: Hello there!"]);

  useEffect(() => {
    if (!isOpen) return;

    const constraints = { video: true, audio: true };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      setConnecting(false);
    });

    return () => {
      if (localVideoRef.current?.srcObject) {
        localVideoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isOpen]);

  const toggleCamera = () => {
    const stream = localVideoRef.current?.srcObject;
    if (!stream) return;
    stream.getVideoTracks().forEach((track) => {
      track.enabled = !track.enabled;
      setVideoEnabled(track.enabled);
    });
  };

  const toggleMic = () => {
    const stream = localVideoRef.current?.srcObject;
    if (!stream) return;
    stream.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled;
      setAudioEnabled(track.enabled);
    });
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages((prev) => [...prev, `You: ${chatInput}`]);
    setChatInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-[800px] h-[500px] flex overflow-hidden relative">
        {/* Left: Local video stream */}
        <div className="flex-1 bg-black flex items-center justify-center relative">
          {connecting ? (
            <p className="text-white">Connecting...</p>
          ) : (
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          )}

          {/* Control Buttons */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
            {/* Toggle Camera */}
            <button
              onClick={toggleCamera}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 text-gray-800 flex items-center justify-center hover:bg-opacity-40"
              title="Toggle Camera"
            >
              {videoEnabled ? <FaVideo /> : <FaVideoSlash />}
            </button>

            {/* End Call */}
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700"
              title="End Call"
            >
              <FaPhoneSlash />
            </button>

            {/* Toggle Microphone */}
            <button
              onClick={toggleMic}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 text-gray-800 flex items-center justify-center hover:bg-opacity-40"
              title="Toggle Microphone"
            >
              {audioEnabled ? <FaMicrophone /> : <FaMicrophoneSlash />}
            </button>
          </div>
        </div>

        {/* Right: Chat Box */}
        <div className="w-[300px] bg-gray-50 p-4 flex flex-col">
          <h3 className="font-semibold text-lg mb-2">In-call Messages</h3>
          <div className="flex-1 overflow-y-auto text-sm text-gray-700 space-y-1">
            {chatMessages.map((msg, idx) => (
              <div key={idx}>{msg}</div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 border rounded px-3 py-1 text-sm"
              placeholder="Send a message"
            />
            <button
              onClick={handleSendMessage}
              className="text-white bg-pink-500 px-3 py-1 ml-2 rounded"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallPopup;
