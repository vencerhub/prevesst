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
          </div>

          <div className={styles.sep} aria-hidden="true" />

          {/* PATROCÍNIO — Confea aparece EXCLUSIVAMENTE como patrocinador */}
          <div className={styles.group}>
            <p className={styles.groupLabel}>Patrocínio</p>
            <div className={styles.logos}>
              {patrocinio.map(p => (
                p.logo
                  ? <img key={p.id} src={p.logo} alt={p.name} className={`${styles.logo} ${styles.sponsorLogo}`} />
                  : <LogoPlaceholder key={p.id} name={p.name} />
              ))}
            </div>
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
        </div>

        {/* APOIO INSTITUCIONAL */}
        <div className={styles.apoioSection}>
          <p className={styles.groupLabel}>Apoio</p>
          <div className={styles.apoioWrapper}>
            <img
              src="/images/logos/Apoio.png"
              alt="Apoio Institucional"
              className={styles.apoioLogo}
            />
          </div>
        </div>

        {/* PESQUISA DE SATISFAÇÃO CONFEA */}
        <div className={styles.surveySection}>
          <div className={styles.surveyCard}>
            <div className={styles.surveyQrWrapper}>
              <img
                src="/images/logos/Qrcode.png"
                alt="QR Code da Pesquisa de Satisfação CONFEA"
                className={styles.surveyQr}
              />
            </div>
            <div className={styles.surveyContent}>
              <span className={styles.surveyBadge}>Patrocínio CONFEA</span>
              <h3 className={styles.surveyTitle}>Pesquisa de Satisfação</h3>
              <p className={styles.surveyDesc}>
                Aponte a câmera do seu celular para o QR Code e participe da pesquisa de avaliação do Confea sobre o 24º PREVESST. Sua participação é fundamental!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
