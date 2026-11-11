import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageCircle, ArrowRight, ShieldCheck, Clock, Award, MapPin, Sparkles, Flame } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppQuoteUrl } from '../data/businessData';

interface HeroProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5ED] via-[#FFF9F5] to-[#FFF0E6] border-b border-orange-200/80 pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Dynamic Animated Ambient Glow Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, 20, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 -z-10 w-96 h-96 bg-[#FF6800]/25 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 0.95, 1.1],
          opacity: [0.2, 0.35, 0.2],
          y: [0, -25, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-44 left-10 -z-10 w-80 h-80 bg-[#E51821]/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div className="absolute bottom-5 right-1/4 -z-10 w-80 h-80 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Trust Kicker with Vibrant Red/Orange Badges & Floating animation */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 text-xs bg-white py-2 px-4 rounded-2xl border-2 border-orange-200 shadow-md shadow-orange-500/10"
            >
              <span className="flex items-center text-amber-500 font-black gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                4.8 / 5.0
              </span>
              <span aria-hidden="true" className="text-orange-200">·</span>
              <span className="font-bold text-stone-800">17 avaliações no Google Maps</span>
              <span aria-hidden="true" className="text-orange-200">·</span>
              <span className="inline-flex items-center gap-1 font-bold text-[#FF6800]">
                <MapPin className="w-3.5 h-3.5 text-[#E51821] shrink-0" />
                São Sebastião do Paraíso - MG
              </span>
            </motion.div>

            {/* Dominant Vibrant Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-stone-950 tracking-tight leading-[1.1]"
              style={{ textWrap: 'balance' }}
            >
              Cores Vivas, Qualidade Impecável e Sua Marca em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6800] via-[#E51821] to-[#FF8C00]">
                Destaque Total!
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal"
            >
              A <strong className="font-extrabold text-[#E51821]">Poliart Silk Screen</strong> transforma suas ideias em resultados visuais de altíssimo impacto. Especialistas em confecção de camisetas, serigrafia têxtil de alta resistência, banners fotográficos, faixas, adesivos em vinil, troféus em acrílico cortados a laser e brindes personalizados.
            </motion.p>

            {/* Action Buttons with High-Energy Effects & Motion */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2"
            >
              <motion.a
                href={buildWhatsAppQuoteUrl({ details: "Olá! Gostaria de fazer um orçamento com a Poliart Silk Screen." })}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-black text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-2xl shadow-xl shadow-emerald-600/30 text-center whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Pedir Orçamento no WhatsApp</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </motion.a>

              <motion.a
                href="#simulador"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-black text-white bg-gradient-to-r from-[#FF6800] to-[#E51821] hover:from-[#e55e00] hover:to-[#c81018] rounded-2xl shadow-xl shadow-orange-500/30 text-center whitespace-nowrap cursor-pointer"
              >
                <Flame className="w-4 h-4 text-amber-200" />
                <span>Simulador de Preços Online</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.a>
            </motion.div>

            {/* Reassurance checklist with warm orange/red icons */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-xs font-bold text-stone-700">
              <span className="flex items-center gap-1.5 bg-white text-stone-800 px-3 py-1.5 rounded-xl border border-orange-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#E51821]" />
                Tintas curadas que não desbotam
              </span>
              <span className="flex items-center gap-1.5 bg-white text-stone-800 px-3 py-1.5 rounded-xl border border-orange-200 shadow-sm">
                <Clock className="w-4 h-4 text-[#FF6800]" />
                Pontualidade e rapidez de entrega
              </span>
              <span className="flex items-center gap-1.5 bg-white text-stone-800 px-3 py-1.5 rounded-xl border border-orange-200 shadow-sm">
                <Award className="w-4 h-4 text-amber-500" />
                Mockup digital antes de rodar
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Workshop Visual Asset with Rich Warm Borders */}
          <div className="lg:col-span-5 relative">
            {/* Cheerful Floating Sticker Badges with Motion */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 z-20 bg-gradient-to-r from-[#FF6800] to-[#E51821] text-white text-xs font-black px-4 py-2 rounded-2xl shadow-xl border-2 border-white flex items-center gap-1.5"
            >
              <Flame className="w-4 h-4 text-amber-200" />
              <span>Silk Screen Artesanal</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-3 -right-3 z-20 bg-white text-[#E51821] text-xs font-black px-4 py-2 rounded-2xl shadow-xl border-2 border-orange-300 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-[#FF6800]" />
              <span>Cores Vivas & Reais</span>
            </motion.div>

            <div className="relative rounded-3xl overflow-hidden border-4 border-orange-400/90 shadow-2xl shadow-orange-900/20 bg-stone-900 group">
              <img
                src="/src/assets/images/hero_vibrant_silk_screen_1794409778883.jpg"
                alt="Produção serigráfica artesanal e tintas vibrantes da Poliart Silk Screen"
                className="w-full h-[400px] sm:h-[450px] lg:h-[490px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              
              {/* Vibrant Factory Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#E51821] to-[#FF6800] text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>Impressão Direta na Fábrica</span>
              </div>

              {/* Bottom Warm Red-Ruby Glass Card (No Dark Slate/Blue) */}
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-[#290407]/95 via-[#3D060B]/95 to-[#240305]/95 backdrop-blur-md border border-orange-500/40 rounded-2xl p-4 text-white shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-black uppercase tracking-wider text-amber-300">
                      Poliart Silk Screen
                    </p>
                    <p className="text-sm font-bold text-white">
                      Rua Mariana Amaral, 213 · Lagoinha
                    </p>
                    <p className="text-xs text-orange-200">
                      São Sebastião do Paraíso - MG
                    </p>
                  </div>
                  <motion.button
                    onClick={() => onOpenQuoteModal("Geral")}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    className="px-4 py-2.5 bg-gradient-to-r from-[#FF6800] to-[#E51821] text-white text-xs font-black rounded-xl shadow-md shadow-orange-900/50 hover:from-orange-500 hover:to-red-600 transition-all shrink-0 cursor-pointer"
                  >
                    Fazer Pedido
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof Metric Strip Placed Below the Hero Split (Warm Theme) */}
        <div className="mt-14 pt-10 border-t-2 border-orange-200/90">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white p-5 rounded-2xl border-2 border-orange-200 shadow-sm hover:shadow-xl hover:border-[#FF6800] transition-all group"
            >
              <span className="text-3xl sm:text-4xl font-black text-[#FF6800] tracking-tight block">
                4.8 ★
              </span>
              <span className="text-xs sm:text-sm font-black text-stone-900 mt-1 block">
                Avaliação no Google Maps
              </span>
              <p className="text-xs text-stone-600 mt-0.5">
                17 avaliações reais de clientes locais
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white p-5 rounded-2xl border-2 border-orange-200 shadow-sm hover:shadow-xl hover:border-[#E51821] transition-all group"
            >
              <span className="text-3xl sm:text-4xl font-black text-[#E51821] tracking-tight block">
                +10 Anos
              </span>
              <span className="text-xs sm:text-sm font-black text-stone-900 mt-1 block">
                Tradição & Experiência
              </span>
              <p className="text-xs text-stone-600 mt-0.5">
                Referência em silk screen no Sudoeste Mineiro
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white p-5 rounded-2xl border-2 border-orange-200 shadow-sm hover:shadow-xl hover:border-amber-500 transition-all group"
            >
              <span className="text-3xl sm:text-4xl font-black text-amber-500 tracking-tight block">
                7 Linhas
              </span>
              <span className="text-xs sm:text-sm font-black text-stone-900 mt-1 block">
                Soluções Integradas
              </span>
              <p className="text-xs text-stone-600 mt-0.5">
                De camisetas a banners, troféus e brindes
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white p-5 rounded-2xl border-2 border-orange-200 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all group"
            >
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight block">
                100%
              </span>
              <span className="text-xs sm:text-sm font-black text-stone-900 mt-1 block">
                Prova Digital Antes
              </span>
              <p className="text-xs text-stone-600 mt-0.5">
                Você aprova o layout antes da gravação
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
