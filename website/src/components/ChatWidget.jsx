import { useState } from "react";
import { MessageCircle, X, Paperclip, Send } from "lucide-react";
import agentPhoto from "../assets/ChatWidget.jpg";

const quickReplies = [
  "I'm a customer who needs help",
  "I want a security assessment for my property",
  "I want to talk to someone from Oculus",
  "I'm interested in Oculus and looking for more information",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(false);

  return (
    <>
      {/* Chat dialog */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden rounded-2xl shadow-2xl"
          style={{ width: "340px", maxHeight: "620px", backgroundColor: "#ffffff" }}
        >
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gold shrink-0" />

          {/* Message area */}
          <div className="flex-1 overflow-y-auto px-5 pt-5 pb-4" style={{ rowGap: "16px" }}>
            {/* Greeting bubble */}
            <div className="flex items-start gap-2.5 mb-4">
              <img
                src={agentPhoto}
                alt="Ashan"
                className="w-9 h-9 rounded-full object-cover shrink-0"
              />
              <div className="bg-[#f2f2f2] rounded-xl rounded-tl-none px-4 py-2.5 text-sm text-[#1a1a1a] font-body">
                Hello! Ashan from Oculus International here!
              </div>
            </div>

            {/* Intro bubble */}
            <div className="flex items-start gap-2.5 mb-5">
              <div className="w-9 h-9 shrink-0" />
              <div className="bg-[#f2f2f2] rounded-xl rounded-tl-none px-4 py-3.5 text-sm text-[#1a1a1a] font-body leading-relaxed">
                Let's help you get connected with the right team, explore our
                security solutions, or find support in just a few clicks.
                <br />
                <br />
                How can I help you today?
              </div>
            </div>

            {/* Quick replies */}
            <div className="flex flex-col" style={{ rowGap: "10px", paddingLeft: "44px" }}>
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  className="text-left text-sm font-body text-[#333] border border-[#ddd] rounded-full px-4 py-2.5 hover:border-teal-deep hover:text-teal-deep transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Cookie consent overlay */}
          {!cookieAccepted && (
            <div className="bg-[#f7f6f2] border-t border-[#e5e5e5] px-5 py-5 flex flex-col items-center text-center" style={{ rowGap: "16px" }}>
              <p className="text-xs text-[#555] font-body leading-relaxed">
                This chat service uses a cookie to interact with you and maintain
                your chat history. Our service provider will monitor and record
                this chat for quality assurance (see their{" "}
                <a href="#" className="underline text-teal-deep">
                  Privacy Policy
                </a>
                ).
              </p>
              <button
                type="button"
                onClick={() => setCookieAccepted(true)}
                className="bg-gold text-[#001529] font-semibold text-sm rounded-full px-8 py-2.5 hover:opacity-90 transition-opacity"
              >
                I agree
              </button>
            </div>
          )}

          {/* Message input row (visual only — not wired to a backend yet) */}
          {cookieAccepted && (
            <div className="border-t border-[#e5e5e5] px-4 py-3 flex items-center shrink-0" style={{ columnGap: "10px" }}>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-[#ddd] px-4 py-2.5 text-sm font-body text-[#1a1a1a] outline-none"
              />
              <button type="button" className="text-[#888] hover:text-teal-deep transition-colors shrink-0">
                <Paperclip className="w-4.5 h-4.5" />
              </button>
              <button type="button" className="text-[#888] hover:text-teal-deep transition-colors shrink-0">
                <Send className="w-4.5 h-4.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-gold text-[#001529] shadow-lg hover:scale-105 transition-transform"
        aria-label="Open live chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}