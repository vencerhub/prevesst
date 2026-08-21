/**
 * PREVESST — Dados de Palestrantes
 *
 * ATENÇÃO: Todos os registros com isPlaceholder: true são CONTEÚDO FICTÍCIO.
 * TODO: SUBSTITUIR PALESTRANTE FICTÍCIO ANTES DA PUBLICAÇÃO.
 *
 * Para localizar todos os placeholders:
 *   grep -r "isPlaceholder: true" src/data/speakers.ts
 */

export interface Speaker {
  id: string;
  isPlaceholder: boolean; // TODO: definir como false após substituição real
  name: string;
  role: string;
  institution: string;
  topic: string;
  topicDay: 1 | 2;
  bio: string;
  photo: string | null; // null = usar avatar placeholder
  tags: string[];
}

// TODO: SUBSTITUIR PALESTRANTE FICTÍCIO ANTES DA PUBLICAÇÃO.
export const speakers: Speaker[] = [
  {
    id: 'speaker-01',
    isPlaceholder: true,
    name: 'Dr. Carlos Eduardo Fonseca',
    role: 'Engenheiro de Segurança do Trabalho',
    institution: 'Confederação Nacional da Indústria — CNI',
    topic: 'FRPS e Assédio no Trabalho: uma visão e procedimentos da CNI',
    topicDay: 1,
    bio: 'Especialista em riscos psicossociais com mais de 20 anos de experiência em segurança do trabalho. Atua na CNI assessorando empresas na implementação de políticas de prevenção e gestão de riscos. Docente em programas de pós-graduação.',
    photo: null,
    tags: ['FRPS', 'Assédio', 'NR-1'],
  },
  {
    id: 'speaker-02',
    isPlaceholder: true,
    name: 'Dra. Ana Paula Rodrigues',
    role: 'Auditora Fiscal do Trabalho',
    institution: 'Superintendência Regional do Trabalho e Emprego — SRTE/RS',
    topic: 'FRPS e NR-1: uma visão e procedimentos da SRTE/RS',
    topicDay: 1,
    bio: 'Auditora Fiscal do Trabalho com atuação focada em normas regulamentadoras e fiscalização de ambientes laborais. Possui formação em Direito do Trabalho e especializações em saúde ocupacional e gestão de riscos.',
    photo: null,
    tags: ['NR-1', 'FRPS', 'Fiscalização'],
  },
  {
    id: 'speaker-03',
    isPlaceholder: true,
    name: 'Eng. Marcelo Henrique Torres',
    role: 'Engenheiro de Segurança do Trabalho',
    institution: 'Associação Brasileira de Engenharia de Segurança',
    topic: 'Engenharia Invisível que Salva Vidas',
    topicDay: 1,
    bio: 'Engenheiro especialista em projetos de segurança industrial com ênfase em sistemas críticos. Referência em análise de falhas e engenharia de confiabilidade aplicada à prevenção de acidentes graves.',
    photo: null,
    tags: ['Engenharia', 'Prevenção', 'Segurança'],
  },
  {
    id: 'speaker-04',
    isPlaceholder: true,
    name: 'Eng. Roberto Silveira Alves',
    role: 'Especialista em Segurança de Máquinas',
    institution: 'Instituto de Tecnologia e Segurança Industrial',
    topic: 'FRPS: influência em Acidentes de Trabalho na NR-12 — Equipamentos Fixos',
    topicDay: 1,
    bio: 'Consultor especializado em NR-12 e segurança de máquinas e equipamentos. Realizou mais de 300 laudos de conformidade e participou de investigações de acidentes envolvendo equipamentos fixos em todo o Brasil.',
    photo: null,
    tags: ['NR-12', 'Equipamentos Fixos', 'FRPS'],
  },
  {
    id: 'speaker-05',
    isPlaceholder: true,
    name: 'Eng. Fernanda Costa Lima',
    role: 'Engenheira de Segurança e Consultora',
    institution: 'Consultoria em Segurança Operacional',
    topic: 'FRPS: influência em Acidentes de Trabalho na NR-12 — Equipamentos Móveis',
    topicDay: 1,
    bio: 'Engenheira de segurança com expertise em equipamentos móveis e análise de riscos em ambientes dinâmicos. Autora de metodologia própria para avaliação de FRPS em operações com veículos e equipamentos pesados.',
    photo: null,
    tags: ['NR-12', 'Equipamentos Móveis', 'FRPS'],
  },
  {
    id: 'speaker-06',
    isPlaceholder: true,
    name: 'Cap. Paulo Sergio Nunes',
    role: 'Bombeiro Civil — Coordenador de Segurança',
    institution: 'Associação Nacional de Bombeiros Civis',
    topic: 'FRPS junto aos Bombeiros Civis: problemas relacionados à NR-12 — Casos Práticos',
    topicDay: 1,
    bio: 'Bombeiro civil com 18 anos de experiência, especializado em prevenção e combate a incêndios industriais. Instrutor de brigadas de emergência e consultor em adequação à NR-23 e NR-12.',
    photo: null,
    tags: ['Bombeiro Civil', 'NR-12', 'Casos Práticos'],
  },
  {
    id: 'speaker-07',
    isPlaceholder: true,
    name: 'Eng. Gustavo Mendonça Barros',
    role: 'Engenheiro de Segurança do Trabalho',
    institution: 'Centro de Tecnologia em Elevação e Movimentação',
    topic: 'NR-33 x REPM e Equipamentos de Movimentação',
    topicDay: 2,
    bio: 'Especialista em espaços confinados e equipamentos de movimentação de materiais. Membro de comissão técnica de revisão da NR-33, com atuação em inspeções e formação de profissionais no Brasil e exterior.',
    photo: null,
    tags: ['NR-33', 'REPM', 'Movimentação'],
  },
  {
    id: 'speaker-08',
    isPlaceholder: true,
    name: 'Eng. Tatiane Albuquerque',
    role: 'Especialista em Lockout/Tagout',
    institution: 'Instituto de Segurança Energética Industrial',
    topic: 'Travamento de Fontes de Energias',
    topicDay: 2,
    bio: 'Engenheira eletricista com especialização em controle de energias perigosas. Implantou programas de Lockout/Tagout em mais de 150 indústrias. Docente em cursos de especialização em engenharia de segurança.',
    photo: null,
    tags: ['Lockout/Tagout', 'Energia', 'Prevenção'],
  },
  {
    id: 'speaker-09',
    isPlaceholder: true,
    name: 'Dra. Luciana Ferreira Teixeira',
    role: 'Psicóloga Organizacional e do Trabalho',
    institution: 'Hospital Regional da Saúde Ocupacional',
    topic: 'FRPS: Adoece também em Ambientes da Saúde?',
    topicDay: 2,
    bio: 'Psicóloga especializada em saúde mental no trabalho com ênfase em equipes de saúde. Pesquisadora de burnout, assédio moral e riscos psicossociais em unidades hospitalares e de atenção básica.',
    photo: null,
    tags: ['FRPS', 'Saúde Mental', 'Ambientes de Saúde'],
  },
  {
    id: 'speaker-10',
    isPlaceholder: true,
    name: 'Dr. Ricardo Pimentel Souza',
    role: 'Médico do Trabalho',
    institution: 'Sociedade Brasileira de Medicina do Trabalho — SBMT',
    topic: 'FRPS na Visão da Medicina do Trabalho',
    topicDay: 2,
    bio: 'Médico do trabalho com vasta experiência em SESMT e perícias médicas. Membro da SBMT e professor universitário. Atua na interface entre saúde mental ocupacional e as implicações previdenciárias dos riscos psicossociais.',
    photo: null,
    tags: ['Medicina do Trabalho', 'FRPS', 'Saúde Ocupacional'],
  },
  {
    id: 'speaker-11',
    isPlaceholder: true,
    name: 'Eng. Priscila Ramos Cavalcanti',
    role: 'Especialista em Higiene Ocupacional',
    institution: 'Associação Brasileira de Higienistas Ocupacionais',
    topic: 'Boa Ventilação Minimiza os FRPS? Como?',
    topicDay: 2,
    bio: 'Higienista Ocupacional com foco em qualidade do ar interno, iluminação e conforto ambiental. Pesquisadora sobre a relação entre ambiente físico de trabalho e fatores de risco psicossocial.',
    photo: null,
    tags: ['Ventilação', 'FRPS', 'Higiene Ocupacional'],
  },
  {
    id: 'speaker-12',
    isPlaceholder: true,
    name: 'Eng. Adriano Campos Machado',
    role: 'Especialista em Normas Regulamentadoras',
    institution: 'Fundação Jorge Duprat Figueiredo de Segurança e Medicina do Trabalho',
    topic: 'Nova NR 10: integração com GRO, NR 1 e demais NRs',
    topicDay: 2,
    bio: 'Engenheiro eletricista com especialização em segurança em instalações e serviços com eletricidade. Participou do processo de revisão da NR-10 e atua como consultor na implementação do novo texto normativo em empresas de energia.',
    photo: null,
    tags: ['NR-10', 'GRO', 'NR-1'],
  },
  {
    id: 'speaker-13',
    isPlaceholder: true,
    name: 'Cel. R. José Antonio Vieira',
    role: 'Ex-Comandante do CBMRS',
    institution: 'Corpo de Bombeiros Militar do RS (aposentado)',
    topic: 'Na Visão de Ex-Comandante do CBMRS: Como Combater Sinistros em Veículos Elétricos',
    topicDay: 2,
    bio: 'Oficial superior aposentado com 35 anos de serviço no Corpo de Bombeiros do RS. Ex-Comandante-Geral, especialista em combate a incêndios industriais e sinistros envolvendo novas tecnologias, incluindo veículos elétricos e baterias de lítio.',
    photo: null,
    tags: ['Veículos Elétricos', 'Sinistros', 'CBMRS'],
  },
];
