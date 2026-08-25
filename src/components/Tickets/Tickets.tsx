import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { eventConfig } from '../../data/event';
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

  const handleRegistrationClick = (e: React.MouseEvent) => {
    if ((eventConfig.registration.general as string).startsWith('#')) {
      e.preventDefault();
      const whatsappUrl = `https://wa.me/${eventConfig.contact.whatsapp.number}?text=${encodeURIComponent('Olá! Gostaria de realizar minha inscrição solidária para o 24º PREVESST em Bento Gonçalves.')}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section
      id="ingressos"
      ref={ref}
      className={`section ${styles.tickets}`}
      aria-labelledby="tickets-heading"
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <p className="eyebrow eyebrow--line">INSCRIÇÕES OFICIAIS</p>
          <h2 id="tickets-heading" className={styles.heading}>
            Garanta sua vaga no <span className={styles.accent}>24º PREVESST</span>
          </h2>
          <p className={styles.lead}>
            Inscrição solidária para todos os profissionais e estudantes do setor. Sem taxa financeira.
          </p>
        </div>

        <div className={styles.cardWrapper}>
          <div className={`${styles.ticketCard} reveal`}>
            
            <div className={styles.cardTop}>
              <div className={styles.tagSolidary}>TRADIÇÃO SOLIDÁRIA · INSCRIÇÃO ABERTA</div>
              <div className={styles.priceRow}>
                <span className={styles.priceValue}>3 KG</span>
                <span className={styles.priceUnit}>de alimentos não perecíveis</span>
              </div>
              <p className={styles.priceDetail}>
                Entregues presencialmente no credenciamento do evento (01/10) na UCS CARVI.
              </p>
            </div>

            <div className={styles.divider} />

            <div className={styles.cardBody}>
              <h3 className={styles.benefitsTitle}>Tudo o que está incluso:</h3>
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
              <a
                href={eventConfig.registration.general}
                target={eventConfig.registration.general.startsWith('http') ? '_blank' : undefined}
                rel={eventConfig.registration.general.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn btn--primary btn--lg"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={handleRegistrationClick}
                aria-label="Garantir minha vaga no 24º PREVESST"
              >
                Garantir Minha Vaga
              </a>
              <p className={styles.actionNote}>
                ⚡ Vagas limitadas à capacidade de 150 participantes.
              </p>
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
