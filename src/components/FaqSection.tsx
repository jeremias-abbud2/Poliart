import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/businessData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF5ED] via-[#FFF9F5] to-[#FFF1E8] border-b border-orange-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#FF6800] bg-orange-100/80 px-3.5 py-1.5 rounded-full border border-orange-300 mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl font-black text-stone-950 tracking-tight">
            Perguntas comuns sobre nossos serviços
          </h2>
          <p className="text-stone-700 mt-2 text-sm sm:text-base">
            Tudo o que você precisa saber sobre prazos, arquivos, quantidades mínimas e entrega.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-2 border-orange-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm hover:border-orange-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-black text-stone-900 hover:text-[#FF6800] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-[#FF6800]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-orange-100 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
