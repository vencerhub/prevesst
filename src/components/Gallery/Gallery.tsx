import styles from './Gallery.module.css';

export function Gallery() {
  return (
    <section className={`section ${styles.gallery}`} aria-labelledby="gallery-heading">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow eyebrow--line">Tradição e continuidade</p>
          <h2 id="gallery-heading" className={styles.heading}>
            24 edições construindo uma cultura de prevenção.
          </h2>
          <p className={styles.lead}>
            Confira como foram as edições anteriores do PREVESST e viva a experiência do maior fórum técnico de Segurança e Saúde no Trabalho do Rio Grande do Sul.
          </p>
        </div>

        {/* Vídeo Institucional */}
        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/F8blZlvUns0?rel=0"
              title="Vídeo Institucional PREVESST"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.iframe}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

