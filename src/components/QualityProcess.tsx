import React from 'react';
import { UploadCloud, CheckSquare, Sparkles, Truck, ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';

export const QualityProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Envio da Ideia ou Arquivo',
      description: 'Envie seu logotipo, arte ou esboço pelo WhatsApp ou e-mail. Aceitamos PDF, Corel (.CDR), Illustrator (.AI) ou imagens comuns.',
      icon: UploadCloud
    },
    {
      step: '02',
      title: 'Aprovação do Mockup Digital',
      description: 'Montamos a prévia digital para você visualizar cores, tamanhos e proporções reais antes de qualquer impressão entrar na máquina.',
      icon: CheckSquare
    },
    {
      step: '03',
      title: 'Produção com Insumos Premium',
      description: 'Gravação precisa de telas, corte a laser de bordas polidas ou impressão digital 1440 DPI com tintas de alta fixação e resistência.',
      icon: Sparkles
    },
    {
      step: '04',
      title: 'Controle de Qualidade & Entrega',
      description: 'Cada peça passa por conferência manual de acabamento antes de ser embalada para retirada no balcão ou envio na região.',
      icon: Truck
    }
  ];

  const differentiators = [
    {
      icon: ShieldCheck,
      title: 'Durabilidade que Resiste ao Tempo',
      description: 'Tintas serigráficas curadas em estufa e lonas de alta gramatura que não desbotam com sol ou lavagens frequentes.'
    },
    {
      icon: Eye,
      title: 'Qualidade que Você Vê',
      description: 'Corte a laser com cantos limpos em acrílico e fidelidade cromática fotográfica em banners e adesivos.'
    },
    {
      icon: HeartHandshake,
      title: 'Atendimento Próximo e Consultivo',
      description: 'Ajudamos você a escolher o melhor tecido, material e acabamento ideal para o orçamento e objetivo do seu projeto.'
    },
    {
      icon: Award,
      title: 'Tradição Local em Paraíso - MG',
      description: 'Mais de uma década servindo o comércio, indústrias, escolas e moradores de São Sebastião do Paraíso com nota 4.8★.'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-[#FFFDFB] via-[#FFF6EE] to-[#FFF9F5] border-b border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step-by-Step Production Process */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#FF6800] bg-orange-100/80 border border-orange-300">
              Fluxo Sem Complicação
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight mt-2">
              Como funciona o seu pedido na Poliart
            </h2>
            <p className="text-stone-700 mt-2 text-base">
              Do primeiro contato no WhatsApp até a entrega final, garantimos agilidade, fidelidade cromática e tranquilidade em cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl border-2 border-orange-200 p-6 flex flex-col justify-between shadow-sm relative group hover:border-[#FF6800] hover:shadow-2xl hover:shadow-orange-500/15 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-orange-200 group-hover:text-[#FF6800]/50 transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200/80 border border-orange-300 flex items-center justify-center text-[#FF6800] group-hover:scale-110 group-hover:bg-[#FF6800] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-stone-950 group-hover:text-[#FF6800] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Poliart Banner in Warm Red & Orange Palette (No Slate/Blue) */}
        <div className="bg-gradient-to-br from-[#2D0407] via-[#48080E] to-[#1E0205] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border-2 border-orange-500/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6800]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E51821]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-10 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-amber-300 bg-red-600/50 border border-red-500/60 shadow">
              Diferenciais de Mercado
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-3 text-white">
              Por que a Poliart é a escolha certa para a sua marca?
            </h3>
            <p className="text-sm text-orange-100/90 mt-2 font-normal">
              Não entregamos apenas materiais impressos; entregamos o impacto visual e a durabilidade que a sua marca merece para se destacar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 relative z-10">
            {differentiators.map((diff, idx) => {
              const DiffIcon = diff.icon;
              return (
                <div key={idx} className="space-y-3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 hover:border-[#FF6800] hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6800] to-[#E51821] text-white flex items-center justify-center font-bold shadow-lg shadow-orange-950/60 group-hover:scale-110 transition-transform">
                    <DiffIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {diff.title}
                  </h4>
                  <p className="text-xs text-orange-100/80 leading-relaxed font-normal">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
