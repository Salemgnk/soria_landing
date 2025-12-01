"use client";

import { useState } from "react";

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group animate-bounce"
      >
        <span className="text-2xl">💬</span>
      </button>

      {/* Optional: Chat popup (can be expanded) */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl p-6 animate-in slide-in-from-bottom">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">Besoin d'aide ?</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Nous sommes là pour vous aider ! Envoyez-nous un message et nous vous répondrons rapidement.
          </p>
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all">
            Démarrer le Chat
          </button>
        </div>
      )}
    </div>
  );
}
