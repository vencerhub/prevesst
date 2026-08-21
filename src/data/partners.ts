/**
 * PREVESST — Parceiros, Realização e Patrocínio
 * IMPORTANTE: Confea aparece EXCLUSIVAMENTE como PATROCINADOR.
 */

export type PartnerRole = 'realizacao' | 'organizacao' | 'patrocinio';

export interface Partner {
  id: string;
  name: string;
  fullName: string;
  role: PartnerRole;
  roleLabel: string;
  // TODO: substituir logo placeholder quando os arquivos forem disponibilizados
  logo: string | null;
  website?: string;
  description?: string;
}

export const partners: Partner[] = [
  {
    id: 'ares',
    name: 'ARES',
    fullName: 'ARES — Associação Sul-Rio-Grandense de Engenharia de Segurança do Trabalho',
    role: 'realizacao',
    roleLabel: 'Realização',
    logo: '/images/logos/ARES.png',
    website: undefined,
    description: 'Associação Sul-Rio-Grandense de Engenharia de Segurança do Trabalho',
  },
  {
    id: 'dimiski',
    name: 'Dimiski Eventos',
    fullName: 'Dimiski Eventos',
    role: 'organizacao',
    roleLabel: 'Organização',
    logo: '/images/logos/Dimiski.png',
    website: undefined,
  },
  {
    id: 'confea',
    name: 'Confea / CREA-RS / Mútua-RS',
    fullName: 'Conselho Federal de Engenharia e Agronomia — Confea',
    role: 'patrocinio',
    roleLabel: 'Patrocínio',
    logo: '/images/logos/ConfeaCreaMutua_horizontal_cor-positivo.png',
    website: undefined,
    // ATENÇÃO: O Confea aparece EXCLUSIVAMENTE como patrocinador.
    // Não utilizar textos que caracterizem o Confea como organizador ou realizador.
  },
];

export const getPartnersByRole = (role: PartnerRole) =>
  partners.filter((p) => p.role === role);
