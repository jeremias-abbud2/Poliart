import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { buildWhatsAppQuoteUrl } from '../data/businessData';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-3 pointer-events-auto">
      
      {/* Tooltip speech bubble */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white border-2 border-orange-300 px-4 py-2.5 rounded-2xl shadow-xl shadow-orange-950/15 text-xs text-slate-800 animate-in fade-in slide-in-from-right-3 duration-300">
          <div>
            <div className="flex items-center gap-1 font-black text-orange-600">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Orçamento Rápido?</span>
            </div>
            <span className="text-[11px] text-slate-600 font-medium">Fale com a Poliart direto no WhatsApp!</span>
          </div>
          <button
            onClick={() => setTooltipVisible(false)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button with Double Ring Pulse */}
      <a
        href={buildWhatsAppQuoteUrl({ details: "Olá! Vim pelo site da Poliart e gostaria de solicitar um orçamento." })}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-600/35 hover:scale-110 active:scale-95 transition-all group focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        title="Conversar no WhatsApp da Poliart Silk Screen"
        aria-label="Atendimento WhatsApp da Poliart"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:rotate-6 transition-transform" />
        <span className="sr-only">Atendimento WhatsApp</span>
      </a>

    </div>
  );
};
