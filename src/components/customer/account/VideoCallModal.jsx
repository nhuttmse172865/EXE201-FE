import React, { useEffect, useRef, useState } from "react";
import {
  FaPhoneSlash,
  FaVideo,
  FaVideoSlash,
  FaMicrophone,
  FaMicrophoneSlash,
  FaPaperPlane,
} from "react-icons/fa";

const VideoCallModal = ({ open, onClose, peerName = "Doctor" }) => {
  const localVideoRef = useRef(null);
  const streamRef = useRef(null);
  const [camOn, setCamOn] = useState(true);
  const [micOn, setMicOn] = useState(true);

  const [msg, setMsg] = useState("");
  const [log, setLog] = useState([{ id: 1, you: true, text: "Hello there!" }]);

  useEffect(() => {
    if (!open) return;

    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        streamRef.current = stream;
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
          await localVideoRef.current.play();
        }
      } catch (e) {
        console.error("getUserMedia error:", e);
        alert("Không truy cập được camera/mic. Hãy kiểm tra quyền.");
        onClose();
      }
    })();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  const toggleCam = () => {
    const vTrack = streamRef.current?.getVideoTracks?.()[0];
    if (vTrack) {
      vTrack.enabled = !vTrack.enabled;
      setCamOn(vTrack.enabled);
    }
  };

  const toggleMic = () => {
    const aTrack = streamRef.current?.getAudioTracks?.()[0];
    if (aTrack) {
      aTrack.enabled = !aTrack.enabled;
      setMicOn(aTrack.enabled);
    }
  };

  const hangup = () => onClose();

  const sendMsg = () => {
    const text = msg.trim();
    if (!text) return;
    setLog((p) => [...p, { id: Date.now(), you: true, text }]);
    setMsg("");
  };

  return (
    <div className="fixed inset-0 z-[999] grid place-items-center bg-black/50 p-4">
      <div className="w-full max-w-5xl grid grid-cols-12 gap-4 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* LEFT: local video */}
        <div className="col-span-12 md:col-span-7 relative bg-black">
          <video
            ref={localVideoRef}
            className="w-full h-[60vh] md:h-[70vh] object-cover rounded-2xl md:rounded-none"
            muted
            playsInline
          />

          {/* Call controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6">
            {/* Camera */}
            <button
              onClick={toggleCam}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-200"
              title={camOn ? "Turn camera off" : "Turn camera on"}
            >
              {camOn ? <FaVideo /> : <FaVideoSlash />}
            </button>

            {/* End Call */}
            <button
              onClick={hangup}
              className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700"
              title="End call"
            >
              <FaPhoneSlash />
            </button>

            {/* Microphone */}
            <button
              onClick={toggleMic}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-200"
              title={micOn ? "Mute microphone" : "Unmute microphone"}
            >
              {micOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
            </button>
          </div>
        </div>

        {/* RIGHT: in-call chat */}
        <div className="col-span-12 md:col-span-5 p-4 md:p-6">
          <div className="text-lg font-semibold mb-3">In-call Messages</div>
          <div className="h-[50vh] md:h-[64vh] overflow-y-auto rounded-lg border bg-gray-50 p-3">
            {log.map((l) => (
              <div key={l.id} className={`mb-2 ${l.you ? "text-right" : ""}`}>
                <span
                  className={`inline-block rounded-xl px-3 py-2 ${
                    l.you ? "bg-pink-100 text-pink-700" : "bg-white"
                  }`}
                >
                  {l.you ? "You: " : `${peerName}: `}
                  {l.text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Send a message"
              className="flex-1 rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              onClick={sendMsg}
              className="h-11 w-11 rounded-xl bg-pink-500 text-white grid place-items-center hover:bg-pink-600"
              title="Send"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallModal;
