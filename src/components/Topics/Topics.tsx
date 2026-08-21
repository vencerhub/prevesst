import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { topicCategories } from '../../data/topics';
import styles from './Topics.module.css';

export function Topics() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section
      id="temas"
      ref={ref}
      className={`section ${styles.topics}`}
      aria-labelledby="topics-heading"
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <p className="eyebrow eyebrow--line">CONTEÚDO PROGRAMÁTICO</p>
          <h2 id="topics-heading" className={styles.heading}>
            Grandes temas do <span className={styles.accent}>24º PREVESST</span>
          </h2>
          <p className={styles.lead}>
            Grade estruturada em torno dos tópicos mais urgentes e complexos da Engenharia e Saúde Ocupacional contemporânea.
          </p>
        </div>

        <div className={styles.grid}>
          {topicCategories.map((group) => {
            const isHighlight = group.id === 'cat-frps';
            return (
              <div
                key={group.id}
                className={`${styles.card} ${isHighlight ? styles.cardHighlight : ''} reveal`}
              >
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardCategory}>{group.label}</h3>
                  <span className={styles.cardCount}>
                    {group.topics.length} temas
                  </span>
                </div>

                <ul className={styles.topicList} aria-label={`Tópicos sobre ${group.label}`}>
                  {group.topics.map((topicTitle) => (
                    <li key={topicTitle} className={styles.topicItem}>
                      <span className={styles.bullet} aria-hidden="true" />
                      <span className={styles.topicTitle}>{topicTitle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
