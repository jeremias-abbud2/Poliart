import React from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/businessData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F3] to-[#FFF4EB] border-b border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Maps Rating Focus */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#FF6800] bg-orange-100/80 border border-orange-300">
              Prova Social & Reputação
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight mt-2">
              Avaliado com 4.8 ★ no Google Maps
            </h2>
            <p className="text-stone-700 mt-2 text-base">
              A confiança de quem já produz camisetas, banners, acrílicos e troféus conosco em São Sebastião do Paraíso e região.
            </p>
          </div>

          {/* Google Score Widget */}
          <div className="bg-white border-2 border-orange-200 p-6 rounded-3xl flex items-center gap-6 shrink-0 shadow-md">
            <div className="flex flex-col items-center justify-center border-r border-orange-200 pr-6">
              <span className="text-3xl font-black text-stone-950 font-mono">
                {BUSINESS_INFO.rating.score}
              </span>
              <div className="flex items-center text-amber-400 gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-stone-600 mt-1 font-bold">
                {BUSINESS_INFO.rating.totalReviews} avaliações reais
              </span>
            </div>

            <div className="flex flex-col justify-center space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Perfil Oficial Google</span>
              </div>
              <p className="text-xs text-stone-500">
                Localizada no bairro Lagoinha
              </p>
              <a
                href={BUSINESS_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#E51821] hover:text-[#FF6800] font-black inline-flex items-center gap-1 mt-1 transition-colors"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl border-2 border-orange-200 p-6 flex flex-col justify-between space-y-4 hover:border-[#FF6800] hover:shadow-xl transition-all"
            >
              <div className="space-y-3">
                
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-600 font-bold">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-3 border-t border-orange-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-stone-900">
                      {review.author}
                    </span>
                    {review.verified && (
                      <span title="Avaliação Verificada">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-stone-500 block">
                    {review.role}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-[#FF6800] bg-orange-100/70 px-2.5 py-1 rounded-lg border border-orange-200">
                  {review.service.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
