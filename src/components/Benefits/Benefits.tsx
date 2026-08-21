import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './Benefits.module.css';

const benefits = [
  {
    id: 'cert',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M17 15v6l-2.5-1.5L12 21v-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Certificado Oficial (+17h)',
    description: 'Certificado técnico de participação com carga horária oficial emitido pela ARES.',
  },
  {
    id: 'kit',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="9" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 9V6a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Kit Exclusivo do Participante',
    description: 'Material técnico e institucional entregue a todos os inscritos no credenciamento.',
  },
  {
    id: 'network',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8.5 11.5C7.5 12.5 6 14 5.5 15.5M15.5 11.5c1 1 2.5 2.5 3 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Networking Qualificado',
    description: 'Contato direto com especialistas, peritos, auditores fiscais e lideranças de SST.',
  },
  {
    id: 'content',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.75" />
        <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Atualização Técnico-Científica',
    description: '2 dias focados nas novas exigências das NRs, Riscos Psicossociais e inovações do setor.',
  },
  {
    id: 'debate',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8l-4 3v-3H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M15 6V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Espaço para Debates e Perguntas',
    description: 'Mesas redondas estruturadas para tirar dúvidas práticas sobre aplicações em empresas.',
  },
  {
    id: 'social',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4c-2.5 0-5.5 2-5.5 4.5 0 2 1 3 2.5 4L8 19h8l-1-6.5c1.5-1 2.5-2 2.5-4C17.5 6 14.5 4 12 4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M9.5 19h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Coquetel de Encerramento',
    description: 'Momento de integração e confraternização ao término do primeiro dia (100% incluso).',
  },
];

export function Benefits() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`section section--dark ${styles.benefits}`}
      aria-labelledby="benefits-heading"
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <p className="eyebrow eyebrow--light eyebrow--line">EXPERIÊNCIA COMPLETA</p>
          <h2 id="benefits-heading" className={styles.heading}>
            O que está incluso na sua inscrição solidária
          </h2>
          <p className={styles.lead}>
            Com a doação de 3 kg de alimentos não perecíveis, você tem acesso à estrutura completa do evento.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((b) => (
            <div
              key={b.id}
              className={`${styles.card} reveal`}
            >
              <div className={styles.icon}>{b.icon}</div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardText}>{b.description}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.disclaimer} reveal`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
          </svg>
          <span>
            <strong>Observação sobre alimentação:</strong> O almoço não está incluso na inscrição. Há um intervalo das 12h00 às 13h30 em ambos os dias com restaurantes disponíveis na região do campus CARVI.
          </span>
        </div>
      </div>
    </section>
  );
}
