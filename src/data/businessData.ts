export interface ServiceItem {
  id: string;
  name: string;
  category: 'textil' | 'banners' | 'adesivos' | 'acrilicos' | 'brindes';
  tagline: string;
  description: string;
  image: string;
  applications: string[];
  materials: string[];
  specs: string;
  minQuantity: string;
  turnaroundTime: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const BUSINESS_INFO = {
  name: "Poliart Silk Screen",
  legalName: "Poliart Silk Screen Comércio e Serviços",
  slogan: "Sua Marca em Destaque, Online e Offline",
  subslogan: "Transformamos suas ideias em resultados visuais que impactam. Qualidade que você vê, eficiência que você sente.",
  logoUrl: "/assets/aistudio/Modify_logo_background_and_borders_fb4997e6_2K_3fc3ce79.png",
  brandColor: "#FF6800",
  brandRed: "#E51821",
  phone: "(35) 3558-6402",
  phoneRaw: "553535586402",
  whatsapp: "(35) 3558-6402",
  whatsappUrl: "https://wa.me/553535586402",
  email: "contato@poliartsilkscreen.com.br",
  address: {
    street: "R. Mariana Amaral, 213",
    neighborhood: "Lagoinha",
    city: "São Sebastião do Paraíso",
    state: "MG",
    cep: "37950-000",
    country: "Brasil",
    fullAddress: "R. Mariana Amaral, 213 - Lagoinha, São Sebastião do Paraíso - MG, 37950-000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Poliart+Silk+Screen+R.+Mariana+Amaral+213+Lagoinha+Sao+Sebastiao+do+Paraiso+MG"
  },
  hours: {
    weekdays: "Segunda a Sexta: 08:00 às 18:00",
    saturday: "Sábado: 08:00 às 12:00",
    sunday: "Domingo: Fechado"
  },
  rating: {
    score: 4.8,
    totalReviews: 17,
    platform: "Google Maps"
  }
};

export function buildWhatsAppQuoteUrl(data: {
  serviceName?: string;
  details?: string;
  quantity?: number | string;
  clientName?: string;
}) {
  let message = `Olá, equipe da Poliart Silk Screen! 👋\n`;
  message += `Gostaria de solicitar um orçamento para serviços gráficos e personalização:\n\n`;
  
  if (data.serviceName) {
    message += `📌 *Serviço:* ${data.serviceName}\n`;
  }
  if (data.quantity) {
    message += `🔢 *Quantidade estimada:* ${data.quantity}\n`;
  }
  if (data.details) {
    message += `📋 *Especificações:* ${data.details}\n`;
  }
  if (data.clientName) {
    message += `👤 *Meu Nome:* ${data.clientName}\n`;
  }
  
  message += `\nAguardo retorno com valores e prazos de produção. Muito obrigado!`;
  return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "camisetas",
    name: "Confecção de Camisetas & Uniformes",
    category: "textil",
    tagline: "Serigrafia tradicional de alta fixação, sublimação e bordado profissional",
    description: "Produção sob medida de camisetas promocionais, uniformes corporativos, camisas polo, regatas, abadás e roupas para atléticas e escolas com tecidos selecionados e tintas duráveis.",
    image: "/src/assets/images/camisetas_silk_vibrante_1794409778599.jpg",
    applications: [
      "Uniformes para equipes de vendas e indústrias",
      "Camisetas para eventos esportivos e igrejas",
      "Turmas de formatura e atléticas universitárias",
      "Camisas polo com bordado ou silk localizado"
    ],
    materials: ["100% Algodão 30.1 Penteado", "Malha PV Anti-pilling", "Dry-Fit Esportivo", "Piquet Premium"],
    specs: "Serigrafia têxtil de 1 a 6 cores, policromia, sublimação total ou DTF digital de alta resolução.",
    minQuantity: "A partir de 10 peças",
    turnaroundTime: "5 a 10 dias úteis"
  },
  {
    id: "banners",
    name: "Impressão Digital de Banners",
    category: "banners",
    tagline: "Lonas de alta densidade e impressão fotográfica com acabamento completo",
    description: "Banners promocionais e institucionais com cores vivas e alta resistência a intempéries. Fornecidos montados com bastão de madeira, ponteiras plásticas e cordão, ou ilhoses metálicos inoxidáveis.",
    image: "/src/assets/images/service_banners_comunicacao_1794409160838.jpg",
    applications: [
      "Pontos de venda (PDV) e vitrines comerciais",
      "Feiras, palestras e conferências corporativas",
      "Cardápios suspensos e painéis ilustrativos",
      "Porta-banners roll-up retráteis"
    ],
    materials: ["Lona Frontlight 440g Fosca ou Brilho", "Lona 280g Promocional", "Lona Backlight"],
    specs: "Impressão solvente/eco-solvente de 1440 DPI. Acabamento soldado com reforço e cordão pronto para pendurar.",
    minQuantity: "A partir de 1 unidade",
    turnaroundTime: "24 a 48 horas úteis"
  },
  {
    id: "faixas",
    name: "Faixas Promocionais",
    category: "banners",
    tagline: "Divulgação de alto impacto visual para fachadas, ruas e inaugurações",
    description: "Faixas horizontais e verticais para divulgação imediata de promoções, inaugurações, aluguéis e eventos públicos. Costura reforçada com bainha e ilhoses para suportar vento e intempéries.",
    image: "/src/assets/images/service_banners_comunicacao_1794409160838.jpg",
    applications: [
      "Inauguração de comércios e lojas",
      "Faixas 'Aluga-se' ou 'Vende-se' de grande visibilidade",
      "Avisos em frentes de obras e construções",
      "Campanhas sazonais (Black Friday, Festividades, Feirões)"
    ],
    materials: ["Lona vinílica 440g reforçada", "Tecido poliéster leve para transporte"],
    specs: "Larguras personalizadas de 0,5m até 10m de comprimento, com ilhoses nas pontas e laterais.",
    minQuantity: "A partir de 1 unidade",
    turnaroundTime: "24 a 72 horas úteis"
  },
  {
    id: "adesivos",
    name: "Adesivos & Rótulos Personalizados",
    category: "adesivos",
    tagline: "Corte eletrônico contorno perfeito em vinil à prova d'água",
    description: "Adesivos em vinil de alta aderência para produtos artesanais, rótulos para potes e garrafas, stickers promocionais, adesivos perfurados para vidros de carros e sinalização de vitrines.",
    image: "/src/assets/images/service_adesivos_brindes_1794409161740.jpg",
    applications: [
      "Rótulos para alimentos, cosméticos e cervejas artesanais",
      "Stickers promocionais individuais com corte especial",
      "Envelopamento de frotas e vidro perfurado traseiro",
      "Identificação patrimonial e lacres de segurança"
    ],
    materials: ["Vinil Branco Brilho/Fosco", "Vinil Transparente", "Vinil Perfurado", "Adesivo Resinado"],
    specs: "Corte eletrônico computadorizado de precisão milimétrica. Tinta impermeável e resistente a raios UV.",
    minQuantity: "A partir de 50 unidades (rótulos)",
    turnaroundTime: "2 a 4 dias úteis"
  },
  {
    id: "trofeus",
    name: "Troféus e Medalhas em Acrílico",
    category: "acrilicos",
    tagline: "Corte e gravação a laser com transparência de cristal e sofisticação",
    description: "Premiações corporativas, homenagens a funcionários e troféus para torneios esportivos. O acrílico cortado a laser proporciona cantos polidos e gravação nítida de brasões, logotipos e nomes.",
    image: "/src/assets/images/service_trofeus_acrilico_1794409160337.jpg",
    applications: [
      "Torneios de futebol, corrida, ciclismo e artes marciais",
      "Premiações de metas para empresas e cooperativas",
      "Homenagens de tempo de serviço e jubilados",
      "Medalhas personalizadas com fita de cetim"
    ],
    materials: ["Acrílico Cristal Cast (3mm, 5mm, 8mm, 10mm)", "Acrílico Espelhado Dourado/Prata", "Base em MDF ou Acrílico Preto"],
    specs: "Gravação a laser de altíssima precisão ou impressão UV direta colorida.",
    minQuantity: "A partir de 1 unidade (troféu) ou 10 unidades (medalhas)",
    turnaroundTime: "4 a 7 dias úteis"
  },
  {
    id: "placas",
    name: "Placas em PVC e Acrílico",
    category: "acrilicos",
    tagline: "Sinalização interna, rotas de fuga, consultórios e placas de obra",
    description: "Sinalização visual elegante e durável. Placas em PVC expandido leve e resistente, ou placas de acrílico cristal nobre com prolongadores de aço escovado para recepções e consultórios.",
    image: "/src/assets/images/service_trofeus_acrilico_1794409160337.jpg",
    applications: [
      "Placas de identificação de salas e escritórios médicos",
      "Placas de segurança, extintores e rota de fuga",
      "Painéis para recepção e fachada comercial",
      "Placas indicativas para condomínios e indústrias"
    ],
    materials: ["PVC Expandido 2mm / 3mm / 5mm", "Acrílico Cristal 3mm a 6mm", "Prolongadores em Aço Inox"],
    specs: "Vinil laminado para proteção contra arranhões e sol, ou impressão direta UV.",
    minQuantity: "A partir de 1 unidade",
    turnaroundTime: "2 a 5 dias úteis"
  },
  {
    id: "brindes",
    name: "Brindes Personalizados em Geral",
    category: "brindes",
    tagline: "Canecas, copos, squeezes, canetas e brindes corporativos que encantam",
    description: "Ampla linha de brindes para presentear clientes e colaboradores, consolidando a lembrança da sua marca no dia a dia. Personalização duradoura e materiais de primeira linha.",
    image: "/src/assets/images/service_adesivos_brindes_1794409161740.jpg",
    applications: [
      "Brindes de fim de ano para empresas e parceiros",
      "Canecas cerâmicas com foto ou logotipo",
      "Copos long drink e taças para festas e aniversários",
      "Squeezes de alumínio e canetas metálicas gravadas"
    ],
    materials: ["Cerâmica resinada Classe A", "Alumínio anodizado", "Acrílico alimentício BPA Free", "Metal e madeira"],
    specs: "Processos de sublimação, tampografia ou gravação a laser.",
    minQuantity: "A partir de 1 unidade (caneca foto) ou 20 unidades (brindes gerais)",
    turnaroundTime: "3 a 7 dias úteis"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Carlos Eduardo Silveira",
    role: "Proprietário de Academia",
    service: "Uniformes e Camisetas Dry-Fit",
    rating: 5,
    date: "Há 2 meses",
    comment: "Fizemos 80 camisetas em dry-fit com silk no peito e costas para os alunos e professores. A estampa não desbota nem racha com as lavagens diárias. Atendimento nota 10 da Poliart!",
    verified: true
  },
  {
    id: "rev-2",
    author: "Mariana L. Duarte",
    role: "Coordenadora de Eventos",
    service: "Banners e Faixas",
    rating: 5,
    date: "Há 3 meses",
    comment: "Precisávamos de 2 banners grandes e uma faixa para uma feira local em Paraíso com prazo apertadíssimo. Entregaram antes da data combinada e as cores ficaram muito vivas.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Rodrigo Toledo",
    role: "Presidente de Clube Esportivo",
    service: "Troféus em Acrílico e Medalhas",
    rating: 5,
    date: "Há 1 mês",
    comment: "Os troféus em acrílico cortados a laser foram o destaque da nossa premiação. Acabamento polido, cantos suaves e gravação perfeita. Todo mundo elogiou a qualidade.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Patrícia Mendes",
    role: "Empreendedora Artesanal",
    service: "Rótulos Adesivos em Vinil",
    rating: 5,
    date: "Há 4 meses",
    comment: "Pedi os adesivos cortados para a linha de doces da minha confeitaria. O vinil é de ótima qualidade, resiste à umidade da geladeira sem soltar as bordas. Super recomendo!",
    verified: true
  },
  {
    id: "rev-5",
    author: "Marcos Vinícius Barbosa",
    role: "Gerente Comercial",
    service: "Brindes Corporativos de Fim de Ano",
    rating: 4,
    date: "Há 5 meses",
    comment: "Encomendei canecas e squeezes personalizados para nossos clientes corporativos. A impressão das canecas ficou impecável e a embalagem veio muito bem cuidada.",
    verified: true
  }
];

export const FAQS_DATA = [
  {
    question: "Como posso enviar o meu logotipo ou arte?",
    answer: "Você pode nos enviar seu arquivo diretamente pelo WhatsApp ou e-mail. Preferimos arquivos vetoriais em PDF, CorelDRAW (.CDR) ou Illustrator (.AI) com fontes convertidas em curvas. Se tiver apenas imagens em JPEG ou PNG em boa resolução, nossa equipe avalia e faz a adequação necessária sem complicação."
  },
  {
    question: "Qual é o pedido mínimo para camisetas e uniformes?",
    answer: "Para serigrafia (silk screen tradicional), o pedido mínimo recomendado é de 10 peças devido ao preparo das matrizes/telas. Para quantidades menores ou peças únicas com foto/arte colorida, temos opções em DTF digital ou sublimação."
  },
  {
    question: "Vocês atendem e entregam fora de São Sebastião do Paraíso?",
    answer: "Sim! Embora nosso ponto físico fique na Rua Mariana Amaral, 213 no bairro Lagoinha, atendemos frequentemente clientes de toda a região do Sudoeste Mineiro e Leste Paulista (Itamogi, São Tomás de Aquino, Passos, Monte Santo de Minas, Ribeirão Preto e Franca), despachando com segurança via transportadora ou Correios."
  },
  {
    question: "Vocês criam o modelo ou prova virtual antes de rodar o pedido?",
    answer: "Com certeza! Antes de iniciar a produção de qualquer camiseta, banner, troféu ou adesivo, montamos um mockup digital (amostra visual) para você conferir cores, proporções e textos. A produção só começa após o seu 'ok' formal."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos PIX, cartões de crédito e débito, e faturamento para empresas cadastradas (sob consulta). Trabalhamos com entrada no início da produção e saldo na entrega/retirada."
  }
];
