"use client";

import { useBouquet } from "@/context/BouquetContext";

export default function MessageForm() {
  const { message, setMessage, recipientName, setRecipientName, senderName, setSenderName } = useBouquet();

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div>
        <label className="block text-xs uppercase tracking-wider mb-2">
          To (Recipient)
        </label>
        <input
          type="text"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          placeholder="Their name"
          className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black outline-none transition-colors text-sm"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider mb-2">
          Your Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write something beautiful..."
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black outline-none transition-colors text-sm resize-none"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider mb-2">
          From (Your Name)
        </label>
        <input
          type="text"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black outline-none transition-colors text-sm"
        />
      </div>
    </div>
  );
}
