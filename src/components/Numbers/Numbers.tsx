import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './Numbers.module.css';

const stats = [
  {
    number: '24ª',
    label: 'Edição',
    detail: 'Tradição consolidada em SST no RS',
  },
  {
    number: '02',
    label: 'Dias de Evento',
    detail: 'Imersão técnica completa',
  },
  {
    number: '150',
    label: 'Vagas Presenciais',
    detail: 'Capacidade do auditório da UCS',
  },
  {
    number: '+17h',
    label: 'Programação',
    detail: 'Palestras, debates e coquetel',
  },
];

export function Numbers() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className={`section ${styles.numbers}`} aria-label="Estatísticas do evento">
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${styles.statItem} reveal`}
            >
              <div className={styles.numberRow}>
                <span className={styles.number}>{stat.number}</span>
              </div>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.detail}>{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
