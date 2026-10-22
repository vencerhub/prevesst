import styles from './FinalCTA.module.css';

export function FinalCTA() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('programacao')?.scrollIntoView({ behavior: 'smooth' });
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
            Dois dias de atualização técnica, troca de experiências e fortalecimento da cultura de prevenção.
          </h2>
          <p className={styles.sub}>
            O maior encontro de SST do Rio Grande do Sul realizado na Serra Gaúcha.
          </p>
        </div>

        <div className={styles.actionCol}>
          <div className={styles.metaBox}>
            <div className={styles.metaItem}>
              <span className={styles.metaVal}>01 e 02 OUT</span>
              <span className={styles.metaLbl}>Bento Gonçalves / RS</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaVal}>REALIZADO</span>
              <span className={styles.metaLbl}>Edição Concluída</span>
            </div>
          </div>

          <a
            href="#programacao"
            className="btn btn--primary btn--lg"
            onClick={handleClick}
            aria-label="Ver programação do 24º PREVESST"
          >
            Ver Programação
          </a>
        </div>
      </div>
    </section>
  );
}
