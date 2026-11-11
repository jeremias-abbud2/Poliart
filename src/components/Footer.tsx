import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, MessageCircle, Star, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppQuoteUrl } from '../data/businessData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#2A0407] via-[#1C0204] to-[#100002] text-orange-100/90 text-xs border-t-4 border-[#FF6800] overflow-hidden select-none">
      {/* Warm Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6800]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#E51821]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Giant Prominent Logo, Brand & Slogan */}
          <div className="lg:col-span-5 space-y-5">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-block p-3 rounded-2xl bg-[#FF6800] shadow-2xl shadow-orange-950/80 border-2 border-white/20"
            >
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Poliart Silk Screen - Logotipo Oficial"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                loading="lazy"
              />
            </motion.div>

            <p className="text-orange-100/90 leading-relaxed max-w-md font-medium text-sm">
              "Poliart Conecta: Sua Marca em Destaque, Online e Offline. Transformamos suas ideias em resultados visuais que impactam. Qualidade que você vê, eficiência que você sente."
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-orange-500/30">
                <span className="flex items-center text-amber-400 font-black gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  4.8
                </span>
                <span className="text-orange-200 text-[11px] font-semibold">17 avaliações no Google Maps</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-black text-amber-300 bg-red-600/60 px-3 py-1 rounded-full border border-red-500/50">
                <Sparkles className="w-3 h-3" />
                Referência em Paraíso - MG
              </span>
            </div>
          </div>

          {/* Column 2: Serviços */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-[#FF6800] flex items-center gap-1.5">
              <span>Nossos Serviços</span>
            </h4>
            <ul className="space-y-2.5 text-orange-200/80 font-medium">
              <li><a href="#servicos" className="hover:text-white hover:translate-x-1 inline-block transition-all">Confecção de Camisetas</a></li>
              <li><a href="#servicos" className="hover:text-white hover:translate-x-1 inline-block transition-all">Impressão de Banners</a></li>
              <li><a href="#servicos" className="hover:text-white hover:translate-x-1 inline-block transition-all">Faixas Promocionais</a></li>
              <li><a href="#servicos" className="hover:text-white hover:translate-x-1 inline-block transition-all">Adesivos & Rótulos</a></li>
              <li><a href="#servicos" className="hover:text-white hover:translate-x-1 inline-block transition-all">Troféus & Medalhas</a></li>
              <li><a href="#servicos" className="hover:text-white hover:translate-x-1 inline-block transition-all">Placas em PVC/Acrílico</a></li>
              <li><a href="#servicos" className="hover:text-white hover:translate-x-1 inline-block transition-all">Brindes em Geral</a></li>
            </ul>
          </div>

          {/* Column 3: Navegação Rápida */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-[#FF6800]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-orange-200/80 font-medium">
              <li><a href="#servicos" className="hover:text-white hover:translate-x-1 inline-block transition-all">Catálogo Completo</a></li>
              <li><a href="#diferenciais" className="hover:text-white hover:translate-x-1 inline-block transition-all">Como Funciona</a></li>
              <li><a href="#simulador" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-1">
                <span>Simulador Online</span>
                <span className="text-[9px] bg-red-600 text-white font-black px-1.5 py-0.5 rounded-full">Novo</span>
              </a></li>
              <li><a href="#avaliacoes" className="hover:text-white hover:translate-x-1 inline-block transition-all">Depoimentos 4.8★</a></li>
              <li><a href="#contato" className="hover:text-white hover:translate-x-1 inline-block transition-all">Localização & GPS</a></li>
            </ul>
          </div>

          {/* Column 4: Contato & Endereço */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-[#FF6800]">
              Atendimento Local
            </h4>
            <div className="space-y-2.5 text-orange-100">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6800] shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_INFO.address.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6800] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-mono font-bold">{BUSINESS_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6800] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white font-medium">{BUSINESS_INFO.email}</a>
              </p>
            </div>

            <div className="pt-2">
              <motion.a
                href={buildWhatsAppQuoteUrl({ details: "Olá! Gostaria de falar com a Poliart Silk Screen." })}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black rounded-2xl shadow-xl shadow-emerald-950/60 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chamar no WhatsApp</span>
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom Bar in Warm Tone (No Slate) */}
        <div className="mt-14 pt-8 border-t border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-orange-200/60 text-[11px]">
          <p className="flex items-center gap-1">
            <span>© {currentYear} Poliart Silk Screen. Feito com</span>
            <Heart className="w-3 h-3 text-[#E51821] fill-[#E51821]" />
            <span>em São Sebastião do Paraíso - MG.</span>
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#FF6800] font-black">Rua Mariana Amaral, 213 · Lagoinha</span>
            <span aria-hidden="true" className="text-orange-500/40">·</span>
            <span>Comércio & Serviços Locais</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
