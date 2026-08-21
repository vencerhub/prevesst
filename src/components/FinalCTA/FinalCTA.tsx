import { eventConfig } from '../../data/event';
import styles from './FinalCTA.module.css';

export function FinalCTA() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-heading">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <div className={styles.text}>
          <p className="eyebrow eyebrow--light eyebrow--line">
            24º PREVESST · OUTUBRO 2026
          </p>
          <h2 id="final-cta-heading" className={styles.heading}>
            Dois dias para atualizar conhecimento, trocar experiências e fortalecer a cultura de prevenção.
          </h2>
          <p className={styles.sub}>
            Participe do maior encontro de SST do Rio Grande do Sul na Serra Gaúcha.
          </p>
        </div>

        <div className={styles.actionCol}>
          <div className={styles.metaBox}>
            <div className={styles.metaItem}>
              <span className={styles.metaVal}>01 e 02 OUT</span>
              <span className={styles.metaLbl}>Bento Gonçalves / RS</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaVal}>150 VAGAS</span>
              <span className={styles.metaLbl}>Inscrição Solidária (3 kg)</span>
            </div>
          </div>

          <a
            href={eventConfig.registration.general}
            className="btn btn--primary btn--lg"
            onClick={handleClick}
            aria-label="Garantir minha vaga no 24º PREVESST"
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </section>
  );
}
