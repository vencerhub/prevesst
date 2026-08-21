import { getPartnersByRole } from '../../data/partners';
import styles from './Partners.module.css';

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className={styles.logoPlaceholder} aria-label={`Logo placeholder: ${name}`}>
      <span className={styles.logoName}>{name}</span>
      {/* TODO: substituir pelos logos oficiais quando disponíveis */}
      <span className={styles.logoTodo}>Logo</span>
    </div>
  );
}

export function Partners() {
  const realizacao = getPartnersByRole('realizacao');
  const organizacao = getPartnersByRole('organizacao');
  const patrocinio = getPartnersByRole('patrocinio');

  return (
    <section className={`section ${styles.partners}`} aria-labelledby="partners-heading">
      <div className="container">
        <h2 id="partners-heading" className="sr-only">Realização, Organização e Patrocínio</h2>

        <div className={styles.grid}>
          {/* REALIZAÇÃO */}
          <div className={styles.group}>
            <p className={styles.groupLabel}>Realização</p>
            <div className={styles.logos}>
              {realizacao.map(p => (
                p.logo
                  ? <img key={p.id} src={p.logo} alt={p.name} className={styles.logo} />
                  : <LogoPlaceholder key={p.id} name={p.name} />
              ))}
            </div>
            <p className={styles.groupDesc}>{realizacao[0]?.fullName}</p>
          </div>

          <div className={styles.sep} aria-hidden="true" />

          {/* ORGANIZAÇÃO */}
          <div className={styles.group}>
            <p className={styles.groupLabel}>Organização</p>
            <div className={styles.logos}>
              {organizacao.map(p => (
                p.logo
                  ? <img key={p.id} src={p.logo} alt={p.name} className={styles.logo} />
                  : <LogoPlaceholder key={p.id} name={p.name} />
              ))}
            </div>
          </div>

          <div className={styles.sep} aria-hidden="true" />

          {/* PATROCÍNIO — Confea aparece EXCLUSIVAMENTE como patrocinador */}
          <div className={styles.group}>
            <p className={styles.groupLabel}>Patrocínio</p>
            <div className={styles.logos}>
              {patrocinio.map(p => (
                p.logo
                  ? <img key={p.id} src={p.logo} alt={p.name} className={styles.logo} />
                  : <LogoPlaceholder key={p.id} name={p.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
