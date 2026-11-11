import React, { useState, useId } from 'react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppQuoteUrl } from '../data/businessData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'Confecção de Camisetas');
  const [quantity, setQuantity] = useState('');
  const [details, setDetails] = useState('');

  const nameId = useId();
  const phoneId = useId();
  const serviceId = useId();
  const quantityId = useId();
  const detailsId = useId();

  if (!isOpen) return null;

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const fullDetails = `${details ? details : 'Solicitação rápida pelo site'}`;
    const url = buildWhatsAppQuoteUrl({
      serviceName: service,
      quantity: quantity || undefined,
      clientName: name || undefined,
      details: fullDetails
    });

    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#200305]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border-2 border-orange-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF6800] to-[#E51821] shadow-sm mb-2">
            <span>Orçamento Rápido · 24 Horas</span>
          </div>
          <h3 className="text-2xl font-black text-slate-950 tracking-tight">
            Solicitar Orçamento
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Preencha seus dados para receber valores e prazos detalhados direto no WhatsApp da Poliart Silk Screen.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSendToWhatsApp} className="space-y-4">
          <div>
            <label htmlFor={nameId} className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
              Seu Nome ou Empresa *
            </label>
            <input
              id={nameId}
              type="text"
              required
              placeholder="Ex: Ana Paula ou Construtora Paraíso"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6800] focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={serviceId} className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
                Serviço Desejado
              </label>
              <select
                id={serviceId}
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6800] focus:bg-white text-slate-800 font-medium transition-all"
              >
                <option value="Confecção de Camisetas">Confecção de Camisetas</option>
                <option value="Impressão de Banners">Impressão de Banners</option>
                <option value="Faixas Promocionais">Faixas Promocionais</option>
                <option value="Adesivos & Rótulos">Adesivos & Rótulos</option>
                <option value="Troféus e Medalhas">Troféus e Medalhas</option>
                <option value="Placas em PVC e Acrílico">Placas em PVC/Acrílico</option>
                <option value="Brindes em Geral">Brindes em Geral</option>
              </select>
            </div>

            <div>
              <label htmlFor={quantityId} className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
                Quantidade Aprox.
              </label>
              <input
                id={quantityId}
                type="text"
                placeholder="Ex: 30 peças, 2 faixas..."
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6800] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor={phoneId} className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
              WhatsApp para Retorno (opcional)
            </label>
            <input
              id={phoneId}
              type="text"
              placeholder="(35) 9..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6800] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label htmlFor={detailsId} className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
              Detalhes adicionais
            </label>
            <textarea
              id={detailsId}
              rows={3}
              placeholder="Ex: Camiseta preta com silk 2 cores na frente, ou troféu com corte especial..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6800] focus:bg-white resize-none transition-all"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#FF6800] to-[#E51821] hover:from-[#e55e00] hover:to-[#c81018] rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Enviar para o WhatsApp da Poliart</span>
            </button>

            <a
              href="#simulador"
              onClick={onClose}
              className="w-full py-2 text-center text-xs font-bold text-slate-600 hover:text-[#FF6800] flex items-center justify-center gap-1 transition-colors"
            >
              <span>Prefiro simular valores no simulador detalhado</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </form>

      </div>
    </div>
  );
};
