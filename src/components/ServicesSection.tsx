import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA, ServiceItem } from '../data/businessData';
import { ArrowUpRight, CheckCircle2, Layers, Clock, ShoppingBag, Sparkles, Flame } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'textil', label: 'Camisetas & Uniformes' },
    { id: 'banners', label: 'Banners & Faixas' },
    { id: 'adesivos', label: 'Adesivos & Rótulos' },
    { id: 'acrilicos', label: 'Acrílico & Placas' },
    { id: 'brindes', label: 'Brindes em Geral' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-[#FFF5ED] via-[#FFF9F5] to-[#FFF1E8] border-b border-orange-200/80 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#FF6800]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#E51821]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#E51821] to-[#FF6800] px-3.5 py-1.5 rounded-full shadow-md shadow-orange-500/20 mb-3">
              <Flame className="w-3.5 h-3.5 text-amber-200" />
              Linhas de Produção Especializadas
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              O que a Poliart produz com máxima precisão
            </h2>
            <p className="text-stone-700 mt-2 text-base">
              Do uniforme da sua equipe aos troféus em acrílico da premiação e faixas de grande formato. Qualidade técnica, acabamento refinado e pontualidade.
            </p>
          </div>

          {/* Interactive Category Filter Pills (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border-2 border-orange-200 shadow-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-black rounded-xl transition-all whitespace-nowrap shrink-0 active:scale-95 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#FF6800] to-[#E51821] text-white shadow-md shadow-orange-500/30'
                    : 'text-stone-700 hover:text-[#E51821] hover:bg-orange-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service, index) => {
            const isFeatured = index === 0 && selectedCategory === 'all';

            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`flex flex-col bg-white rounded-3xl border-2 border-orange-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#FF6800] transition-all group ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container with Fallback */}
                <div className={`relative overflow-hidden bg-stone-900 ${isFeatured ? 'h-64 sm:h-80' : 'h-56'}`}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#260306]/85 via-transparent to-black/20" />

                  {/* Badges on Media */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-black bg-gradient-to-r from-[#E51821] to-[#FF6800] text-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1 border border-white/20">
                      <Sparkles className="w-3 h-3 text-amber-200" />
                      Qualidade Premium
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20">
                      Mínimo: {service.minQuantity}
                    </span>
                    <span className="text-xs font-bold text-amber-300 flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {service.turnaroundTime}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#FF6800] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#E51821] font-black uppercase tracking-wide">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-stone-700 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Applications Checklist */}
                    <div className="pt-4 border-t border-orange-100 space-y-2">
                      <span className="text-xs font-bold text-stone-900 block">
                        Aplicações e Destaques:
                      </span>
                      {service.applications.slice(0, isFeatured ? 4 : 3).map((app, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-4 border-t border-orange-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalItem(service)}
                      className="text-xs font-bold text-stone-700 hover:text-[#FF6800] flex items-center gap-1.5 transition-colors px-2 py-1.5 rounded-xl hover:bg-orange-50 cursor-pointer"
                    >
                      <Layers className="w-4 h-4 text-[#FF6800]" />
                      <span>Ver Ficha Técnica</span>
                    </button>

                    <motion.button
                      onClick={() => onSelectServiceForQuote(service)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-black text-white bg-gradient-to-r from-[#FF6800] to-[#E51821] hover:from-orange-500 hover:to-red-600 rounded-xl shadow-md shadow-orange-500/25 transition-all cursor-pointer"
                    >
                      <span>Simular Preço</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Details Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#240306]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border-2 border-orange-200">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className="space-y-5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100/70 px-2.5 py-1 rounded-md">
                  Especificações do Serviço
                </span>
                <h3 className="text-2xl font-black text-slate-950 mt-2">
                  {activeModalItem.name}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div className="space-y-4 pt-1">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Materiais & Substratos Disponíveis
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {activeModalItem.materials.map((mat, i) => (
                      <span key={i} className="text-xs bg-orange-50 text-orange-950 border border-orange-200 font-semibold px-3 py-1 rounded-lg">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Processo de Personalização
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                    {activeModalItem.specs}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-orange-50/60 rounded-xl border border-orange-200">
                  <div>
                    <span className="text-[11px] font-bold text-orange-700 uppercase">
                      Lote Mínimo
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      {activeModalItem.minQuantity}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-orange-700 uppercase">
                      Prazo Médio
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      {activeModalItem.turnaroundTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Voltar
                </button>
                <button
                  onClick={() => {
                    const item = activeModalItem;
                    setActiveModalItem(null);
                    onSelectServiceForQuote(item);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 rounded-xl shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Configurar no Simulador</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
