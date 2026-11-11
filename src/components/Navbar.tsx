import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, MessageCircle, Sparkles, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 shadow-xl border-b border-black/10 select-none transition-all"
      style={{ backgroundColor: BUSINESS_INFO.brandColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-24 sm:h-28 md:h-32 lg:h-36">
          
          {/* Zone 1: Giant Prominent Official Logo - Seamless with exact #FF6800 background */}
          <a 
            href="#" 
            className="flex items-center shrink-0 focus:outline-none py-1"
            title="Poliart Silk Screen - Início"
          >
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Poliart Silk Screen - Logotipo Oficial"
              className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-34 w-auto object-contain block"
              loading="eager"
            />
          </a>

          {/* Zone 2: Navigation Links (Pure White, Bold, with Smooth Interactive Hover Pill) */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-sm xl:text-base font-extrabold text-white tracking-wide">
            <a 
              href="#servicos" 
              className="px-3.5 py-2 rounded-xl hover:bg-black/15 hover:text-amber-100 transition-all whitespace-nowrap shrink-0"
            >
              Serviços
            </a>
            <a 
              href="#diferenciais" 
              className="px-3.5 py-2 rounded-xl hover:bg-black/15 hover:text-amber-100 transition-all whitespace-nowrap shrink-0"
            >
              Diferenciais
            </a>
            <a 
              href="#simulador" 
              className="px-3.5 py-2 rounded-xl hover:bg-black/15 hover:text-amber-100 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Simulador</span>
              <span className="text-[10px] bg-red-600 text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse shadow-sm shadow-red-900/40">
                Preços
              </span>
            </a>
            <a 
              href="#avaliacoes" 
              className="px-3.5 py-2 rounded-xl hover:bg-black/15 hover:text-amber-100 transition-all whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <span>Avaliações</span>
              <span className="text-amber-200 text-xs">4.8★</span>
            </a>
            <a 
              href="#contato" 
              className="px-3.5 py-2 rounded-xl hover:bg-black/15 hover:text-amber-100 transition-all whitespace-nowrap shrink-0"
            >
              Contato
            </a>
          </nav>

          {/* Zone 3: Direct Phone + High-Contrast Vibrant Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-xs font-bold text-white hover:text-amber-100 px-4 py-2.5 rounded-xl bg-black/10 hover:bg-black/20 transition-all backdrop-blur-sm border border-white/10"
              title="Ligar para a Poliart Silk Screen"
            >
              <Phone className="w-3.5 h-3.5 text-amber-200" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <motion.button
              onClick={() => onOpenQuoteModal()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black text-[#E51821] bg-white hover:bg-amber-300 hover:text-slate-950 rounded-2xl shadow-lg shadow-black/15 hover:shadow-2xl transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
              <span>Solicitar Orçamento</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </motion.button>
          </div>

          {/* Mobile Hamburger toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 text-white hover:bg-black/20 rounded-2xl focus:outline-none transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with smooth animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-black/10 px-5 pt-3 pb-8 space-y-4 shadow-2xl"
            style={{ backgroundColor: '#FF6800' }}
          >
            <nav className="flex flex-col space-y-2 pt-2">
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-extrabold text-white hover:bg-black/15 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>Nossos Serviços</span>
                <Flame className="w-4 h-4 text-amber-200" />
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-extrabold text-white hover:bg-black/15 rounded-xl transition-colors"
              >
                Diferenciais & Produção
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-extrabold text-white hover:bg-black/15 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>Simulador de Orçamento</span>
                <span className="text-[11px] bg-red-600 text-white font-black px-2.5 py-0.5 rounded-full uppercase shadow">
                  Online
                </span>
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-extrabold text-white hover:bg-black/15 rounded-xl transition-colors"
              >
                Avaliações Google (4.8 ★)
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-extrabold text-white hover:bg-black/15 rounded-xl transition-colors"
              >
                Localização & Contato
              </a>
            </nav>
            
            <div className="pt-3 border-t border-black/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-black text-[#E51821] bg-white hover:bg-amber-300 hover:text-slate-950 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-white/95 hover:text-white"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>Ligar: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
