import React, { useState, useId } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppQuoteUrl } from '../data/businessData';

export const LocationAndContact: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('Camisetas & Uniformes');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nameId = useId();
  const contactId = useId();
  const serviceId = useId();
  const messageId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;

    // Build WhatsApp URL and open
    const details = `Mensagem pelo site:\nContato do cliente: ${contact}\nInteresse: ${service}\nMensagem: ${message || 'Solicitação de contato'}`;
    const url = buildWhatsAppQuoteUrl({
      serviceName: service,
      clientName: name,
      details
    });

    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitted(false);
    }, 800);
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-[#FFF8F3] via-[#FFF3EA] to-[#FFF9F5] border-b border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#FF6800] bg-orange-100/80 border border-orange-300">
            Onde Estamos & Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight mt-2">
            Venha nos visitar ou fale diretamente com a gente
          </h2>
          <p className="text-stone-700 mt-2 text-base">
            Estamos prontos para tirar dúvidas, analisar arquivos de arte e fornecer o melhor orçamento para sua demanda em São Sebastião do Paraíso e região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Map Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Info Cards */}
            <div className="bg-white rounded-3xl border-2 border-orange-200 p-6 sm:p-8 space-y-6 shadow-md hover:shadow-xl transition-all">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-300 flex items-center justify-center text-[#FF6800] shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-stone-950">
                    Endereço Oficial
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed font-normal">
                    {BUSINESS_INFO.address.fullAddress}
                  </p>
                  <a
                    href={BUSINESS_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#E51821] hover:text-[#FF6800] font-black mt-2 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Como chegar pelo Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-orange-100">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-stone-950">
                    Telefone & WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 mt-1 font-mono font-bold">
                    {BUSINESS_INFO.phone}
                  </p>
                  <a
                    href={buildWhatsAppQuoteUrl({ details: "Olá, gostaria de falar com um atendente da Poliart Silk Screen." })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-black mt-2 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Conversar pelo WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-orange-100">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-stone-950">
                    Horário de Atendimento
                  </h3>
                  <div className="text-xs text-stone-600 mt-1 space-y-0.5 font-medium">
                    <p>{BUSINESS_INFO.hours.weekdays}</p>
                    <p>{BUSINESS_INFO.hours.saturday}</p>
                    <p className="text-stone-400">{BUSINESS_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Stylized Map Card in Warm Red & Orange Palette (No Slate/Blue) */}
            <div className="bg-gradient-to-br from-[#2D0407] via-[#48080E] to-[#1E0205] text-white rounded-3xl overflow-hidden border-2 border-orange-500/40 shadow-2xl relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-black text-amber-200">
                    Ponto de Atendimento Ativo
                  </span>
                </div>
                <span className="text-xs text-orange-200 font-mono font-bold bg-white/10 px-2.5 py-1 rounded-full border border-orange-500/30">
                  São Sebastião do Paraíso - MG
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#1F0205]/90 to-[#35060A]/90 h-44 flex flex-col items-center justify-center p-4 text-center border border-orange-500/30">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6800] to-[#E51821] text-white flex items-center justify-center font-bold mb-2 shadow-xl shadow-orange-950/80">
                  <MapPin className="w-7 h-7" />
                </div>
                <p className="text-sm font-black text-white">
                  Poliart Silk Screen
                </p>
                <p className="text-xs text-orange-200 mt-0.5 font-medium">
                  Rua Mariana Amaral, 213 · Bairro Lagoinha
                </p>
                <a
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#FF6800] to-[#E51821] hover:from-orange-500 hover:to-red-600 text-white text-xs font-black rounded-xl shadow-lg shadow-orange-950/60 hover:scale-105 active:scale-95 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar Rota no GPS</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-orange-200 p-6 sm:p-8 shadow-md">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#FF6800] bg-orange-50 border border-orange-200 block w-fit mb-2">
              Contato Rápido
            </span>
            <h3 className="text-xl font-bold text-slate-950">
              Envie uma mensagem direta
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-6">
              Preencha os campos abaixo para abrir a conversa com os detalhes prontos no WhatsApp ou tirar dúvidas com nossa equipe.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor={nameId} className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
                  Seu Nome ou Empresa *
                </label>
                <input
                  id={nameId}
                  type="text"
                  required
                  placeholder="Ex: João Silva ou Construtora Paraíso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6800] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor={contactId} className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
                  Telefone / WhatsApp ou E-mail *
                </label>
                <input
                  id={contactId}
                  type="text"
                  required
                  placeholder="Ex: (35) 99999-9999 ou contato@empresa.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6800] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor={serviceId} className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
                  Serviço de Maior Interesse
                </label>
                <select
                  id={serviceId}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6800] focus:bg-white transition-all text-slate-800 font-medium"
                >
                  <option value="Camisetas & Uniformes">Confecção de Camisetas & Uniformes</option>
                  <option value="Banners Digitais">Impressão Digital de Banners</option>
                  <option value="Faixas Promocionais">Faixas Promocionais</option>
                  <option value="Adesivos & Rótulos">Adesivos & Rótulos em Vinil</option>
                  <option value="Troféus e Medalhas">Troféus e Medalhas em Acrílico</option>
                  <option value="Placas em PVC e Acrílico">Placas em PVC e Acrílico</option>
                  <option value="Brindes em Geral">Brindes em Geral (Canecas, Copos, etc.)</option>
                  <option value="Outro Serviço">Outro / Projeto Especial</option>
                </select>
              </div>

              <div>
                <label htmlFor={messageId} className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
                  Descreva o que você precisa (opcional)
                </label>
                <textarea
                  id={messageId}
                  rows={4}
                  placeholder="Conte-nos detalhes como quantidade aproximada, prazo desejado ou se já possui o logotipo vetorizado..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6800] focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#FF6800] to-[#E51821] hover:from-[#e55e00] hover:to-[#c81018] rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-75"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Conectando ao WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem & Iniciar Atendimento</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Privacidade garantida. Seus dados são utilizados exclusivamente para o retorno do orçamento.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
