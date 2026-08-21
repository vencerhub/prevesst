/** PREVESST — Grandes Temas */

export interface Topic {
  id: string;
  title: string;
  category: string;
  description: string;
  day: 1 | 2 | 'both';
}

export const topicCategories = [
  {
    id: 'cat-frps',
    label: 'Fatores de Riscos Psicossociais',
    color: 'red',
    topics: [
      'Fatores de Riscos Psicossociais — FRPS',
      'Assédio no Trabalho',
      'Saúde Mental Ocupacional',
      'FRPS em Ambientes da Saúde',
    ],
  },
  {
    id: 'cat-nr',
    label: 'Normas Regulamentadoras',
    color: 'dark',
    topics: ['NR-1', 'NR-10', 'NR-12', 'NR-33'],
  },
  {
    id: 'cat-eng',
    label: 'Engenharia de Segurança',
    color: 'green',
    topics: [
      'Engenharia de Segurança',
      'Equipamentos Fixos',
      'Equipamentos Móveis',
      'Travamento de Fontes de Energia',
    ],
  },
  {
    id: 'cat-health',
    label: 'Saúde e Meio Ambiente de Trabalho',
    color: 'dark',
    topics: [
      'Medicina do Trabalho',
      'Ventilação',
      'GRO — Gerenciamento de Riscos Ocupacionais',
      'Acidentes de Trabalho',
    ],
  },
  {
    id: 'cat-special',
    label: 'Temas Especiais',
    color: 'red',
    topics: ['Combate a Sinistros', 'Veículos Elétricos'],
  },
];

export const topics: Topic[] = [
  { id: 't-01', title: 'Fatores de Riscos Psicossociais — FRPS', category: 'cat-frps', description: 'Identificação, avaliação e controle dos FRPS no contexto da NR-1 revisada.', day: 'both' },
  { id: 't-02', title: 'Assédio no Trabalho', category: 'cat-frps', description: 'Procedimentos, responsabilidades e prevenção do assédio moral e sexual no ambiente laboral.', day: 1 },
  { id: 't-03', title: 'NR-1', category: 'cat-nr', description: 'Novo PGR, GRO e integração dos fatores psicossociais na gestão de riscos.', day: 'both' },
  { id: 't-04', title: 'NR-12', category: 'cat-nr', description: 'Segurança no trabalho em máquinas e equipamentos — equipamentos fixos e móveis.', day: 1 },
  { id: 't-05', title: 'NR-33', category: 'cat-nr', description: 'Segurança em espaços confinados e sua intersecção com equipamentos de movimentação.', day: 2 },
  { id: 't-06', title: 'NR-10', category: 'cat-nr', description: 'Nova NR-10 e sua integração com GRO, NR-1 e demais normas do sistema.', day: 2 },
  { id: 't-07', title: 'Engenharia de Segurança', category: 'cat-eng', description: 'A engenharia como ferramenta fundamental na prevenção de acidentes e doenças ocupacionais.', day: 1 },
  { id: 't-08', title: 'Equipamentos Fixos', category: 'cat-eng', description: 'Riscos e controles em máquinas de processo, prensas, tornos e demais equipamentos fixos.', day: 1 },
  { id: 't-09', title: 'Equipamentos Móveis', category: 'cat-eng', description: 'Segurança operacional em empilhadeiras, pontes rolantes e demais equipamentos móveis.', day: 1 },
  { id: 't-10', title: 'Travamento de Fontes de Energia', category: 'cat-eng', description: 'Lockout/Tagout e procedimentos de controle de energias perigosas na prática.', day: 2 },
  { id: 't-11', title: 'Medicina do Trabalho', category: 'cat-health', description: 'Diagnóstico, nexo causal e intervenção clínica nos riscos psicossociais.', day: 2 },
  { id: 't-12', title: 'Ventilação', category: 'cat-health', description: 'Como a qualidade do ar e o conforto ambiental interferem nos FRPS.', day: 2 },
  { id: 't-13', title: 'GRO — Gerenciamento de Riscos Ocupacionais', category: 'cat-health', description: 'Integração do GRO com normas específicas e gestão sistêmica de riscos.', day: 2 },
  { id: 't-14', title: 'Acidentes de Trabalho', category: 'cat-health', description: 'Investigação, análise de causas e papel dos FRPS nos acidentes ocupacionais.', day: 1 },
  { id: 't-15', title: 'Combate a Sinistros', category: 'cat-special', description: 'Estratégias e desafios operacionais para brigadas de emergência e bombeiros civis.', day: 2 },
  { id: 't-16', title: 'Veículos Elétricos', category: 'cat-special', description: 'Novos riscos e protocolos de combate a incêndios em veículos com baterias de lítio.', day: 2 },
];
