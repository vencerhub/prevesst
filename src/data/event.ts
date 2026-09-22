/**
 * PREVESST — Configuração Central do Evento
 * Altere este arquivo para atualizar qualquer informação do evento.
 */

export const eventConfig = {
  name: '24º PREVESST',
  edition: 24,
  subtitle: 'Encontro Sul-Rio-Grandense de Prevenção, Segurança e Saúde do Trabalho',
  theme: 'Prevenção, Segurança do Trabalho e Fatores de Riscos Psicossociais',
  tagline: 'Engenharia que protege pessoas. Conhecimento que transforma ambientes de trabalho.',
  year: 2026,

  dates: {
    start: '2026-10-01',
    end: '2026-10-02',
    displayShort: '01 e 02 OUT',
    displayFull: '01 e 02 de outubro de 2026',
    registrationDeadline: '30 de setembro de 2026',
    registrationDeadlineShort: '30/09/2026',
  },

  venue: {
    name: 'UCS CARVI',
    fullName: 'Universidade de Caxias do Sul — UCS\nCARVI — Campus Universitário da Região dos Vinhedos',
    city: 'Bento Gonçalves',
    state: 'RS',
    region: 'Serra Gaúcha',
    displayCity: 'Bento Gonçalves — RS',
    address: null, // TODO: Adicionar endereço completo quando divulgado
    mapCoordinates: null,
  },

  capacity: 150,
  programHours: '+17h',

  registration: {
    // Inscrição solidária para todos (tradição gratuita/solidária das edições PREVESST)
    general:
      'https://www.even3.com.br/tickets/get/24-prevesst-prevencao-seguranca-do-trabalho-e-fatores-de-riscos-psicossociais-773264?even3_orig=get_tickets',
    member:
      'https://www.even3.com.br/tickets/get/24-prevesst-prevencao-seguranca-do-trabalho-e-fatores-de-riscos-psicossociais-773264?even3_orig=get_tickets',
    requirement: '3 kg de alimentos não perecíveis',
    socialNotice: 'Inscrição social para PCD, idosos e estudantes carentes (contrapartida)',
    isSolidary: true,
  },

  pricing: {
    solidary: {
      display: '3 KG',
      unit: 'de alimentos não perecíveis',
      label: 'Inscrição Solidária',
      description: 'Tradicionalmente sem taxa financeira. Vagas limitadas mediante doação de alimentos no credenciamento.',
    },
  },

  includes: [
    'Acesso aos 2 dias de programação técnico-científica',
    'Certificado oficial de participação incluso',
    'Kit exclusivo do participante no credenciamento',
    'Coquetel oficial de encerramento e networking',
    'Acesso aos debates e mesas redondas',
  ],

  notIncluded: ['Almoço (intervalo livre das 12h às 13h30)'],

  contact: {
    whatsapp: {
      number: '5551986920633',
      displayNumber: '+55 51 98692-0633',
      message:
        'Olá! Vim pelo site do 24º PREVESST e gostaria de mais informações sobre o evento.',
    },
    instagram: 'https://www.instagram.com/ares.poa',
    email: '24prevesst@gmail.com',
  },

  social: {
    instagram: 'https://www.instagram.com/ares.poa',
  },

  legal: {
    privacyPolicy: null,
    terms: null,
  },

  analytics: {
    ga4Id: null,
    gtmId: null,
    metaPixelId: null,
  },
} as const;

export type EventConfig = typeof eventConfig;
