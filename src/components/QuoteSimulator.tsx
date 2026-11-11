import React, { useState, useId } from 'react';
import { Calculator, MessageCircle, Copy, Check, Sparkles, Zap, Flame, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppQuoteUrl } from '../data/businessData';

interface QuoteSimulatorProps {
  initialServiceId?: string;
}

interface ServiceConfig {
  id: string;
  name: string;
  unitName: string;
  basePrice: number;
  minQty: number;
  maxQty: number;
  defaultQty: number;
  step: number;
  options: {
    name: string;
    choices: { label: string; priceMultiplier: number }[];
  }[];
}

const SIMULATOR_CONFIG: ServiceConfig[] = [
  {
    id: 'camisetas',
    name: 'Confecção de Camisetas & Uniformes',
    unitName: 'peças',
    basePrice: 32.0,
    minQty: 10,
    maxQty: 300,
    defaultQty: 30,
    step: 5,
    options: [
      {
        name: 'Tipo de Malha / Tecido',
        choices: [
          { label: 'Algodão 30.1 Penteado (Mais macio e nobre)', priceMultiplier: 1.0 },
          { label: 'Malha PV Anti-Pilling (Máxima durabilidade)', priceMultiplier: 0.95 },
          { label: 'Dry-Fit Esportivo (Respirável e leve)', priceMultiplier: 1.05 },
          { label: 'Camisa Polo Piquet Premium (Corporativo)', priceMultiplier: 1.45 }
        ]
      },
      {
        name: 'Impressão / Cores da Estampa',
        choices: [
          { label: '1 Cor (Silk Screen tradicional frontal)', priceMultiplier: 1.0 },
          { label: '2 Cores (Frente ou Costas)', priceMultiplier: 1.15 },
          { label: 'Frente + Costas (2 Cores em cada lado)', priceMultiplier: 1.35 },
          { label: 'Policromia / DTF Digital Colorido HD', priceMultiplier: 1.45 }
        ]
      }
    ]
  },
  {
    id: 'banners',
    name: 'Impressão Digital de Banners',
    unitName: 'unidades',
    basePrice: 65.0,
    minQty: 1,
    maxQty: 30,
    defaultQty: 2,
    step: 1,
    options: [
      {
        name: 'Dimensão do Banner',
        choices: [
          { label: '0,80m x 1,20m (Padrão PDV vitrine)', priceMultiplier: 1.0 },
          { label: '1,00m x 1,50m (Médio impacto visual)', priceMultiplier: 1.45 },
          { label: '1,20m x 2,00m (Grande formato)', priceMultiplier: 2.1 },
          { label: 'Porta-Banner Roll-Up Retrátil Completo', priceMultiplier: 3.2 }
        ]
      },
      {
        name: 'Tipo de Acabamento',
        choices: [
          { label: 'Bastão de madeira, ponteiras e cordão', priceMultiplier: 1.0 },
          { label: 'Bainha com ilhoses metálicos perimetrais', priceMultiplier: 1.1 }
        ]
      }
    ]
  },
  {
    id: 'faixas',
    name: 'Faixas Promocionais',
    unitName: 'faixas',
    basePrice: 95.0,
    minQty: 1,
    maxQty: 20,
    defaultQty: 1,
    step: 1,
    options: [
      {
        name: 'Tamanho da Faixa',
        choices: [
          { label: '3,00m x 0,70m (Inauguração / Divulgação rápida)', priceMultiplier: 1.0 },
          { label: '4,00m x 0,80m (Comércio / Fachada de destaque)', priceMultiplier: 1.35 },
          { label: '5,00m x 1,00m (Mega visibilidade de rua)', priceMultiplier: 1.8 }
        ]
      },
      {
        name: 'Estrutura de Fixação',
        choices: [
          { label: 'Bainha perimetral reforçada com ilhoses', priceMultiplier: 1.0 },
          { label: 'Ripas de madeira nas extremidades com arame', priceMultiplier: 1.15 }
        ]
      }
    ]
  },
  {
    id: 'adesivos',
    name: 'Adesivos & Rótulos Personalizados',
    unitName: 'adesivos',
    basePrice: 0.85,
    minQty: 50,
    maxQty: 2000,
    defaultQty: 150,
    step: 50,
    options: [
      {
        name: 'Substrato Vinílico',
        choices: [
          { label: 'Vinil Branco Brilho à prova d\'água', priceMultiplier: 1.0 },
          { label: 'Vinil Fosco Elegante', priceMultiplier: 1.05 },
          { label: 'Vinil Transparente Cristal', priceMultiplier: 1.15 },
          { label: 'Adesivo Resinado Alto Relevo 3D', priceMultiplier: 2.8 }
        ]
      },
      {
        name: 'Tipo de Corte',
        choices: [
          { label: 'Corte Reto / Quadrado / Redondo', priceMultiplier: 1.0 },
          { label: 'Corte Especial Contorno Computadorizado', priceMultiplier: 1.15 }
        ]
      }
    ]
  },
  {
    id: 'trofeus',
    name: 'Troféus e Medalhas em Acrílico',
    unitName: 'peças',
    basePrice: 55.0,
    minQty: 1,
    maxQty: 100,
    defaultQty: 5,
    step: 1,
    options: [
      {
        name: 'Modelo de Premiação',
        choices: [
          { label: 'Troféu Cristal Laser 15cm (Base preta)', priceMultiplier: 1.0 },
          { label: 'Troféu Cristal Laser 20cm (Robusto e imponente)', priceMultiplier: 1.4 },
          { label: 'Troféu com Acrílico Dourado Espelhado', priceMultiplier: 1.7 },
          { label: 'Medalhas em Acrílico com Fita de Cetim', priceMultiplier: 0.35 }
        ]
      },
      {
        name: 'Gravação & Personalização',
        choices: [
          { label: 'Gravação a Laser Nítida (Monocromática)', priceMultiplier: 1.0 },
          { label: 'Gravação a Laser + Aplicação Colorida UV', priceMultiplier: 1.3 }
        ]
      }
    ]
  },
  {
    id: 'placas',
    name: 'Placas em PVC e Acrílico',
    unitName: 'placas',
    basePrice: 75.0,
    minQty: 1,
    maxQty: 50,
    defaultQty: 2,
    step: 1,
    options: [
      {
        name: 'Material da Placa',
        choices: [
          { label: 'PVC Expandido 3mm (Sinalização / Obra)', priceMultiplier: 1.0 },
          { label: 'PVC Expandido 5mm Reforçado', priceMultiplier: 1.3 },
          { label: 'Acrílico Cristal 4mm com Prolongadores Inox', priceMultiplier: 2.4 }
        ]
      },
      {
        name: 'Tamanho Estimado',
        choices: [
          { label: 'Pequena: 20cm x 30cm (Salas / Avisos)', priceMultiplier: 1.0 },
          { label: 'Média: 30cm x 40cm (Identificação)', priceMultiplier: 1.5 },
          { label: 'Grande: 50cm x 70cm (Diretoria / Fachada)', priceMultiplier: 2.8 }
        ]
      }
    ]
  },
  {
    id: 'brindes',
    name: 'Brindes Personalizados em Geral',
    unitName: 'itens',
    basePrice: 28.0,
    minQty: 5,
    maxQty: 300,
    defaultQty: 20,
    step: 5,
    options: [
      {
        name: 'Tipo de Brinde',
        choices: [
          { label: 'Caneca de Porcelana Resinada Premium', priceMultiplier: 1.0 },
          { label: 'Squeeze de Alumínio 500ml', priceMultiplier: 1.35 },
          { label: 'Copos Long Drink Acrílico para Festas', priceMultiplier: 0.28 },
          { label: 'Canetas Metálicas com Gravação a Laser', priceMultiplier: 0.45 },
          { label: 'Chaveiros Acrílicos Personalizados', priceMultiplier: 0.22 }
        ]
      },
      {
        name: 'Embalagem de Entrega',
        choices: [
          { label: 'Embalagem Padrão Segura', priceMultiplier: 1.0 },
          { label: 'Caixa de Presente Individual Personalizada', priceMultiplier: 1.15 }
        ]
      }
    ]
  }
];

export const QuoteSimulator: React.FC<QuoteSimulatorProps> = ({ initialServiceId }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || 'camisetas'
  );
  const clientNameId = useId();
  const notesId = useId();

  const currentService = SIMULATOR_CONFIG.find(s => s.id === selectedServiceId) || SIMULATOR_CONFIG[0];

  const [quantity, setQuantity] = useState<number>(currentService.defaultQty);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([0, 0]);
  const [clientName, setClientName] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Handle service change
  const handleServiceChange = (id: string) => {
    const s = SIMULATOR_CONFIG.find(item => item.id === id);
    if (s) {
      setSelectedServiceId(id);
      setQuantity(s.defaultQty);
      setSelectedOptions([0, 0]);
    }
  };

  // Quick Preset Helper
  const applyPreset = (serviceId: string, qty: number, optIndex0: number, optIndex1: number) => {
    handleServiceChange(serviceId);
    setQuantity(qty);
    setSelectedOptions([optIndex0, optIndex1]);
  };

  // Calculate pricing with volume tiers
  const calculateEstimate = () => {
    let multiplier = 1.0;
    currentService.options.forEach((opt, idx) => {
      const choiceIndex = selectedOptions[idx] || 0;
      if (opt.choices[choiceIndex]) {
        multiplier *= opt.choices[choiceIndex].priceMultiplier;
      }
    });

    // Volume discount curve
    let volumeDiscount = 0;
    if (quantity >= 100) volumeDiscount = 0.22;
    else if (quantity >= 50) volumeDiscount = 0.15;
    else if (quantity >= 25) volumeDiscount = 0.08;

    const unitPrice = currentService.basePrice * multiplier * (1 - volumeDiscount);
    const totalPrice = unitPrice * quantity;

    return {
      unitPrice: unitPrice.toFixed(2),
      totalPrice: totalPrice.toFixed(2),
      discountPercent: Math.round(volumeDiscount * 100)
    };
  };

  const estimate = calculateEstimate();

  const getSummaryText = () => {
    const opt1 = currentService.options[0]?.choices[selectedOptions[0]]?.label || '';
    const opt2 = currentService.options[1]?.choices[selectedOptions[1]]?.label || '';
    
    return `ORÇAMENTO POLIART SILK SCREEN:
• Serviço: ${currentService.name}
• Quantidade: ${quantity} ${currentService.unitName}
• Opção 1: ${opt1}
• Opção 2: ${opt2}
${clientNotes ? `• Observações: ${clientNotes}` : ''}
• Estimativa: R$ ${estimate.totalPrice} (Aprox. R$ ${estimate.unitPrice}/${currentService.unitName})`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    const opt1 = currentService.options[0]?.choices[selectedOptions[0]]?.label || '';
    const opt2 = currentService.options[1]?.choices[selectedOptions[1]]?.label || '';
    const details = `${opt1} | ${opt2}${clientNotes ? ` | Obs: ${clientNotes}` : ''} | Estimativa gerada: R$ ${estimate.totalPrice}`;
    
    const url = buildWhatsAppQuoteUrl({
      serviceName: currentService.name,
      quantity: `${quantity} ${currentService.unitName}`,
      details,
      clientName: clientName || undefined
    });

    window.open(url, '_blank');
  };

  return (
    <section id="simulador" className="py-20 bg-gradient-to-b from-[#FFFDFB] via-[#FFF5EC] to-[#FFF9F5] border-b border-orange-200/80 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-72 h-72 bg-[#FF6800]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 -z-10 w-80 h-80 bg-[#E51821]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 px-4 py-1.5 rounded-full shadow-md mb-3 animate-pulse">
            <Calculator className="w-4 h-4" />
            Simulador de Orçamento Interativo 24 Horas
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Monte seu pedido e receba o valor direto no WhatsApp
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Selecione o serviço, personalize detalhes e veja a estimativa em tempo real com descontos progressivos por quantidade.
          </p>

          {/* Quick Presets Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              Exemplos Rápidos:
            </span>
            <button
              onClick={() => applyPreset('camisetas', 50, 0, 1)}
              className="text-xs bg-orange-50 hover:bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full border border-orange-200 transition-colors"
            >
              50 Camisetas Algodão (2 cores)
            </button>
            <button
              onClick={() => applyPreset('banners', 2, 1, 0)}
              className="text-xs bg-orange-50 hover:bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full border border-orange-200 transition-colors"
            >
              2 Banners 1,00x1,50m
            </button>
            <button
              onClick={() => applyPreset('adesivos', 200, 0, 1)}
              className="text-xs bg-orange-50 hover:bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full border border-orange-200 transition-colors"
            >
              200 Adesivos com Corte Contorno
            </button>
            <button
              onClick={() => applyPreset('trofeus', 10, 0, 0)}
              className="text-xs bg-orange-50 hover:bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full border border-orange-200 transition-colors"
            >
              10 Troféus a Laser 15cm
            </button>
          </div>
        </div>

        {/* Simulator Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50/50 via-white to-amber-50/30 rounded-3xl border-2 border-orange-200 shadow-xl overflow-hidden p-6 sm:p-10">
          
          {/* Step 1: Service Selector */}
          <div className="mb-8">
            <label className="text-xs font-black text-slate-900 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[11px] font-bold">1</span>
              <span>Escolha a Categoria do Produto:</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {SIMULATOR_CONFIG.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => handleServiceChange(srv.id)}
                  className={`px-4 py-3 text-left rounded-2xl border-2 text-xs font-bold transition-all active:scale-95 ${
                    selectedServiceId === srv.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 border-red-600 text-white shadow-md shadow-orange-500/30'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-orange-300 hover:bg-orange-50/60'
                  }`}
                >
                  <span className="block truncate">{srv.name.split('&')[0].trim()}</span>
                  <span className={`text-[11px] font-normal block truncate mt-0.5 ${selectedServiceId === srv.id ? 'text-amber-100' : 'text-slate-500'}`}>
                    A partir de {srv.minQty} {srv.unitName}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Configuration Options */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Dynamic Options */}
              {currentService.options.map((opt, optIndex) => (
                <div key={optIndex} className="space-y-2">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-wider block flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center text-[11px] font-bold">
                      {optIndex + 2}
                    </span>
                    <span>{opt.name}</span>
                  </label>
                  <div className="space-y-2">
                    {opt.choices.map((choice, choiceIdx) => (
                      <button
                        key={choiceIdx}
                        onClick={() => {
                          const updated = [...selectedOptions];
                          updated[optIndex] = choiceIdx;
                          setSelectedOptions(updated);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-2xl border-2 text-xs transition-all flex items-center justify-between gap-3 cursor-pointer ${
                          selectedOptions[optIndex] === choiceIdx
                            ? 'bg-gradient-to-r from-[#FF6800] to-[#E51821] text-white border-transparent font-black shadow-md shadow-orange-500/30'
                            : 'bg-white text-stone-700 border-orange-100 hover:border-orange-300 hover:bg-orange-50/70 font-medium'
                        }`}
                      >
                        <span className="truncate">{choice.label}</span>
                        <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedOptions[optIndex] === choiceIdx
                            ? 'border-transparent bg-white text-[#E51821]'
                            : 'border-orange-300'
                        }`}>
                          {selectedOptions[optIndex] === choiceIdx && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Quantity Slider */}
              <div className="space-y-3 pt-2 bg-white p-5 rounded-2xl border border-orange-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Quantidade Desejada
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-black text-red-600 bg-red-50 px-3 py-1 rounded-lg border border-red-200">
                      {quantity} {currentService.unitName}
                    </span>
                    {estimate.discountPercent > 0 && (
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300 flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-emerald-600" />
                        -{estimate.discountPercent}% desconto no lote
                      </span>
                    )}
                  </div>
                </div>

                <input
                  type="range"
                  min={currentService.minQty}
                  max={currentService.maxQty}
                  step={currentService.step}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-orange-600 cursor-pointer h-2.5 bg-slate-200 rounded-lg"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-bold font-mono">
                  <span>Mín: {currentService.minQty}</span>
                  <span>Médio: {Math.round((currentService.minQty + currentService.maxQty) / 2)}</span>
                  <span>Máx: {currentService.maxQty}+</span>
                </div>
              </div>

              {/* Client Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label htmlFor={clientNameId} className="text-xs font-bold text-slate-700 block mb-1">
                    Seu Nome (opcional)
                  </label>
                  <input
                    id={clientNameId}
                    type="text"
                    placeholder="Ex: Roberto Silva"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 font-medium"
                  />
                </div>
                <div>
                  <label htmlFor={notesId} className="text-xs font-bold text-slate-700 block mb-1">
                    Observação ou Detalhes
                  </label>
                  <input
                    id={notesId}
                    type="text"
                    placeholder="Ex: Arte em PDF vetor, estampa frente"
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 font-medium"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Calculated Preview & WhatsApp Conversion Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl border-2 border-orange-300 p-6 sm:p-7 shadow-lg space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Resumo do Pedido
                  </span>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Valor Estimado
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Produto:</span>
                    <span className="font-bold text-slate-900 text-right">{currentService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Volume:</span>
                    <span className="font-bold text-slate-900">{quantity} {currentService.unitName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Preço unitário aprox.:</span>
                    <span className="font-bold text-slate-900">R$ {estimate.unitPrice}</span>
                  </div>
                  {estimate.discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold bg-emerald-50 p-1.5 rounded-lg">
                      <span>Economia no atacado:</span>
                      <span>-{estimate.discountPercent}% no total</span>
                    </div>
                  )}
                </div>

                {/* Big Total Price Box */}
                <div className="p-5 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl text-white text-center shadow-md">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-200 block mb-1">
                    Total Estimado
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white">
                    R$ {estimate.totalPrice}
                  </div>
                  <p className="text-[11px] text-orange-100 mt-1">
                    Valor final confirmado após envio e conferência da arte.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-1">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-4 text-sm font-black text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Enviar para WhatsApp da Poliart</span>
                </button>

                <button
                  onClick={handleCopySummary}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Resumo copiado com sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copiar Resumo do Pedido</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Atendimento oficial: (35) 3558-6402</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
