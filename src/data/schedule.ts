/**
 * PREVESST — Programação do Evento
 * DIA 01 — 01/10/2026
 * DIA 02 — 02/10/2026
 */

export type SessionType = 'talk' | 'opening' | 'debate' | 'break' | 'social' | 'registration' | 'institutional';

export interface ScheduleSession {
  id: string;
  time: string;
  timeEnd?: string;
  title: string;
  type: SessionType;
  speakerId?: string; // referência ao id em speakers.ts
  speaker?: string;
  description?: string;
}

export interface ScheduleDay {
  day: 1 | 2;
  date: string;
  displayDate: string;
  label: string;
  sessions: ScheduleSession[];
}

export const schedule: ScheduleDay[] = [
  {
    day: 1,
    date: '2026-10-01',
    displayDate: '01/10',
    label: 'DIA 01',
    sessions: [
      {
        id: 'd1-01',
        time: '08h00',
        title: 'Credenciamento',
        type: 'registration',
      },
      {
        id: 'd1-02',
        time: '08h30',
        title: 'Palestra Institucional Confea',
        type: 'institutional',
      },
      {
        id: 'd1-03',
        time: '09h00',
        timeEnd: '09h30',
        title: 'Abertura do 24º PREVESST',
        type: 'opening',
      },
      {
        id: 'd1-04',
        time: '09h30',
        timeEnd: '10h30',
        title: 'Nova NR 10: integração com GRO, NR 1 e demais NRs',
        type: 'talk',
        speakerId: 'speaker-12',
        speaker: 'Eng. Eletric. Jéferson Oliveira',
        description: 'O novo texto da NR-10 e sua articulação com o Gerenciamento de Riscos Ocupacionais (GRO), NR-1 e o sistema normativo vigente.',
      },
      {
        id: 'd1-05',
        time: '10h30',
        timeEnd: '11h45',
        title: 'Coffee Break',
        type: 'break',
        description: 'Intervalo para networking e café.',
      },
      {
        id: 'd1-06',
        time: '11h45',
        timeEnd: '12h45',
        title: 'Ruídos agravam ainda mais às ações dos FRPS ? Como devemos atenuar esses riscos',
        type: 'talk',
        speakerId: 'speaker-02',
        speaker: 'Eng. de Produção Elétrica Rafael Nagi Cruz Gerges e Engº Ambiental e de Segurança do Trabalho Morvan Kaercher',
        description: 'Análise sobre como o ruído no ambiente ocupacional intensifica os fatores de riscos psicossociais e métodos de atenuação.',
      },
      {
        id: 'd1-07',
        time: '12h45',
        timeEnd: '13h30',
        title: 'Almoço',
        type: 'break',
        description: 'Intervalo para almoço — não incluso na inscrição.',
      },
      {
        id: 'd1-08',
        time: '13h30',
        timeEnd: '14h30',
        title: 'Engenharia Invisível que Salva Vidas',
        type: 'talk',
        speakerId: 'speaker-03',
        speaker: 'Engº Alexandre Eberle Alves',
        description: 'Como as decisões de engenharia, invisíveis ao olho do trabalhador, determinam a segurança real dos ambientes e processos industriais.',
      },
      {
        id: 'd1-09',
        time: '14h30',
        timeEnd: '15h30',
        title: 'FRPS: influência em Acidentes de Trabalho na NR-12 – Equipamentos Fixos',
        type: 'talk',
        speakerId: 'speaker-04',
        speaker: 'Vladimir Kuse',
        description: 'Análise da relação entre fatores de risco psicossocial e acidentes envolvendo máquinas e equipamentos fixos, à luz da NR-12.',
      },
      {
        id: 'd1-10',
        time: '15h30',
        timeEnd: '16h30',
        title: 'FRPS: influência em Acidentes de Trabalho na NR-12 – Equipamentos Móveis',
        type: 'talk',
        speakerId: 'speaker-05',
        speaker: 'Engº Jairo Brasil',
        description: 'Estudo dos riscos psicossociais como fator contribuinte para acidentes com equipamentos móveis e veículos industriais.',
      },
      {
        id: 'd1-11',
        time: '16h30',
        timeEnd: '16h45',
        title: 'Coffee Break',
        type: 'break',
        description: 'Intervalo para café.',
      },
      {
        id: 'd1-12',
        time: '16h45',
        timeEnd: '17h45',
        title: 'FRPS na Visão da Medicina do Trabalho',
        type: 'talk',
        speakerId: 'speaker-10',
        speaker: 'Dr. Thiago José Dal Bosco',
        description: 'Como o médico do trabalho identifica, documenta e age diante dos fatores de risco psicossocial — diagnóstico, nexo e intervenção.',
      },
      {
        id: 'd1-13',
        time: '17h45',
        timeEnd: '18h00',
        title: 'Questionamentos e debates',
        type: 'debate',
      },
    ],
  },
  {
    day: 2,
    date: '2026-10-02',
    displayDate: '02/10',
    label: 'DIA 02',
    sessions: [
      {
        id: 'd2-01',
        time: '09h30',
        timeEnd: '10h30',
        title: 'NR-33 x REPM e Equipamentos de Movimentação',
        type: 'talk',
        speakerId: 'speaker-07',
        speaker: 'Engª Vivian Giacomelli Corrêa e Engº Luiz Francisco Pedroso Lopes',
        description: 'Interseção entre espaços confinados (NR-33), equipamentos de movimentação e as novas exigências do REPM — análise técnica e prática.',
      },
      {
        id: 'd2-02',
        time: '10h30',
        timeEnd: '11h30',
        title: 'Travamento de Fontes de Energias',
        type: 'talk',
        speakerId: 'speaker-08',
        speaker: 'Engº Ricardo Alberto Fernández',
        description: 'Procedimentos de Lockout/Tagout e controle de energias perigosas: boas práticas, falhas comuns e conformidade normativa.',
      },
      {
        id: 'd2-03',
        time: '11h30',
        timeEnd: '12h00',
        title: 'Questionamentos e debates',
        type: 'debate',
      },
      {
        id: 'd2-04',
        time: '12h00',
        timeEnd: '13h30',
        title: 'Almoço',
        type: 'break',
        description: 'Intervalo para almoço — não incluso na inscrição.',
      },
      {
        id: 'd2-05',
        time: '13h30',
        timeEnd: '14h30',
        title: 'FRPS: Adoece também em Ambientes da Saúde?',
        type: 'talk',
        speakerId: 'speaker-09',
        speaker: 'Engª Poliana Forlin',
        description: 'O impacto dos fatores psicossociais em profissionais de saúde: burnout, adoecimento e estratégias de prevenção em hospitais e clínicas.',
      },
      {
        id: 'd2-06',
        time: '14h30',
        timeEnd: '15h30',
        title: 'A saúde do Trabalhador como efetivo patrimônio da empresa',
        type: 'talk',
        speakerId: 'speaker-06',
        speaker: 'Engº Luiz Henrique Rebouças dos Anjos',
        description: 'A saúde e a integridade do trabalhador como ativo fundamental e estratégico para a sustentabilidade e produtividade empresarial.',
      },
      {
        id: 'd2-07',
        time: '15h30',
        timeEnd: '15h45',
        title: 'Coffee Break',
        type: 'break',
        description: 'Intervalo para café.',
      },
      {
        id: 'd2-08',
        time: '15h45',
        timeEnd: '16h45',
        title: 'O Nexo Causal Oculto: Qualidade do Ar Interior e a Responsabilidade Civil pelos Riscos Psicossociais',
        type: 'talk',
        speakerId: 'speaker-11',
        speaker: 'Bióloga Janaína Costa',
        description: 'Qualidade do ar de interiores, conforto ambiental e a responsabilidade civil pelos fatores de riscos psicossociais.',
      },
      {
        id: 'd2-09',
        time: '16h45',
        timeEnd: '17h45',
        title: 'Na Visão de Ex-Comandante do CBMRS: Como Combater Sinistros em Veículos Elétricos',
        type: 'talk',
        speakerId: 'speaker-13',
        speaker: 'Engº Civil Adriano Krukoski Ferreira',
        description: 'Desafios operacionais e táticos no combate a incêndios em veículos elétricos — experiência de campo e recomendações para brigadas.',
      },
      {
        id: 'd2-10',
        time: '17h45',
        timeEnd: '18h00',
        title: 'Encerramento e entrega de certificados',
        type: 'social',
        description: 'Solenidade de encerramento do 24º PREVESST e entrega dos certificados de participação.',
      },
    ],
  },
];
