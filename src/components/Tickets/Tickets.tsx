import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './Tickets.module.css';

const sharedBenefits = [
  'Acesso completo aos 2 dias de programação',
  'Certificado oficial de participação (+17h)',
  'Kit exclusivo do participante no credenciamento',
  'Participação no coquetel oficial de encerramento',
  'Acesso a todas as palestras, debates e painéis',
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" fill="var(--color-green-light)" />
      <path d="M5.5 9l2.5 2.5L12.5 6.5" stroke="var(--color-green)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Tickets() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section
      id="ingressos"
      ref={ref}
      className={`section ${styles.tickets}`}
      aria-labelledby="tickets-heading"
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <p className="eyebrow eyebrow--line">TRADIÇÃO SOLIDÁRIA · EVENTO REALIZADO</p>
          <h2 id="tickets-heading" className={styles.heading}>
            Inscrições e Participação no <span className={styles.accent}>24º PREVESST</span>
          </h2>
          <p className={styles.lead}>
            Inscrição solidária realizada para todos os profissionais e estudantes do setor. Sem taxa financeira.
          </p>
        </div>

        <div className={styles.cardWrapper}>
          <div className={`${styles.ticketCard} reveal`}>
            
            <div className={styles.cardTop}>
              <div className={styles.tagSolidary}>TRADIÇÃO SOLIDÁRIA · EDIÇÃO CONCLUÍDA</div>
              <div className={styles.priceRow}>
                <span className={styles.priceValue}>3 KG</span>
                <span className={styles.priceUnit}>de alimentos não perecíveis</span>
              </div>
              <p className={styles.priceDetail}>
                Entregues presencialmente no credenciamento do evento (01/10) na UCS CARVI.
              </p>
              <div className={styles.socialNotice}>
                <span className={styles.socialNoticeIcon} aria-hidden="true">🤝</span>
                <span>Inscrição social para PCD, idosos e estudantes carentes (contrapartida)</span>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.cardBody}>
              <h3 className={styles.benefitsTitle}>Tudo o que esteve incluso:</h3>
              <ul className={styles.benefitList} aria-label="Benefícios da inscrição solidária">
                {sharedBenefits.map((b) => (
                  <li key={b} className={styles.benefitItem}>
                    <CheckIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardAction}>
              <div className={styles.closedStatus}>
                <span className={styles.closedBadge}>Inscrições Encerradas</span>
                <p className={styles.closedNote}>
                  O 24º PREVESST foi realizado com sucesso nos dias 01 e 02 de outubro de 2026. Agradecemos a todos os participantes, palestrantes e apoiadores!
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className={`${styles.frictionGrid} reveal`}>
          <div className={styles.frictionItem}>
            <span className={styles.frictionLabel}>QUANTO CUSTA?</span>
            <strong className={styles.frictionValue}>3 kg de alimentos</strong>
          </div>
          <div className={styles.frictionItem}>
            <span className={styles.frictionLabel}>QUANDO?</span>
            <strong className={styles.frictionValue}>01 e 02 de Outubro de 2026</strong>
          </div>
          <div className={styles.frictionItem}>
            <span className={styles.frictionLabel}>ONDE?</span>
            <strong className={styles.frictionValue}>UCS CARVI · Bento Gonçalves</strong>
          </div>
          <div className={styles.frictionItem}>
            <span className={styles.frictionLabel}>CERTIFICADO?</span>
            <strong className={styles.frictionValue}>Incluso (+17 horas)</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
