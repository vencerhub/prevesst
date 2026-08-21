import { eventConfig } from '../../data/event';
import styles from './Hero.module.css';

export function Hero() {
  const handleRegistration = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('ingressos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('programacao');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} aria-label="Apresentação do 24º PREVESST">
      {/* Grids e geometrias técnicas */}
      <div className={styles.technicalGrid} aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.contourLine} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        <div className={styles.layout}>
          
          {/* Coluna Esquerda — Editorial e Chamada */}
          <div className={styles.mainCol}>
            {/* Tagline Técnica com Coordenadas e Data */}
            <div className={styles.metaBadge}>
              <span className={styles.pulseDot} aria-hidden="true" />
              <span className={styles.metaDate}>01 E 02 DE OUTUBRO DE 2026</span>
              <span className={styles.metaDivider}>|</span>
              <span className={styles.metaLocation}>BENTO GONÇALVES — RS</span>
            </div>

            {/* Identidade do Evento */}
            <div className={styles.titleGroup}>
              <div className={styles.editionRow}>
                <span className={styles.editionNumber}>24º</span>
                <span className={styles.eventName}>PREVESST</span>
              </div>
              <p className={styles.eventSubtitle}>
                {eventConfig.subtitle}
              </p>
            </div>

            {/* Tema Oficial & Assinatura */}
            <div className={styles.themeBlock}>
              <p className={styles.themeTag}>TEMA CENTRAL DA EDIÇÃO</p>
              <h2 className={styles.themeTitle}>
                {eventConfig.theme}
              </h2>
              <p className={styles.taglineSignature}>
                “{eventConfig.tagline}”
              </p>
            </div>

            {/* Ações / CTAs */}
            <div className={styles.actionsGroup}>
              <a
                href="#ingressos"
                className="btn btn--primary btn--lg"
                onClick={handleRegistration}
                aria-label="Garantir minha vaga no 24º PREVESST"
              >
                Garantir Minha Vaga
              </a>
              <a
                href="#programacao"
                className="btn btn--outline btn--lg"
                onClick={handleScheduleClick}
                aria-label="Ver programação completa do evento"
              >
                Ver Programação
              </a>
            </div>

            {/* Microcopy de Confiança e Vagas */}
            <div className={styles.microNotes}>
              <div className={styles.microItem}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.7 4.5 8.5 4.5 8.5s4.5-4.8 4.5-8.5c0-2.5-2-4.5-4.5-4.5Z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>UCS CARVI · Bento Gonçalves/RS</span>
              </div>
              <span className={styles.microSep}>•</span>
              <div className={styles.microItem}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>150 vagas presenciais (Inscrição Solidária)</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita — Painel Técnico Editorial de Autoridade */}
          <div className={styles.sideCol} aria-hidden="true">
            <div className={styles.techPanel}>
              {/* Header do painel técnico */}
              <div className={styles.panelHeader}>
                <span className={styles.panelCode}>SPEC // PREVESST-2026</span>
                <span className={styles.panelStatus}>CONFIRMADO</span>
              </div>

              {/* Destaque da Edição */}
              <div className={styles.panelHeroStat}>
                <div className={styles.editionBig}>
                  <span>24</span>
                  <small>ª</small>
                </div>
                <div className={styles.editionDesc}>
                  <strong>EDIÇÃO HISTÓRICA</strong>
                  <span>Consolidando a cultura de SST e prevenção no Rio Grande do Sul</span>
                </div>
              </div>

              {/* Grid de Métricas Técnicas */}
              <div className={styles.panelMetrics}>
                <div className={styles.metricCell}>
                  <span className={styles.metricVal}>02</span>
                  <span className={styles.metricLbl}>Dias de Imersão</span>
                </div>
                <div className={styles.metricCell}>
                  <span className={styles.metricVal}>+17h</span>
                  <span className={styles.metricLbl}>Grade Técnica</span>
                </div>
                <div className={styles.metricCell}>
                  <span className={styles.metricVal}>150</span>
                  <span className={styles.metricLbl}>Vagas Exclusivas</span>
                </div>
                <div className={styles.metricCell}>
                  <span className={styles.metricVal}>3 KG</span>
                  <span className={styles.metricLbl}>Alimento Solidário</span>
                </div>
              </div>

              {/* Bloco de Realização / Autoridade */}
              <div className={styles.panelFooter}>
                <div className={styles.institutionTag}>
                  <span>REALIZAÇÃO</span>
                  <strong>ARES — Eng. de Segurança do Trabalho</strong>
                </div>
                <div className={styles.institutionTag}>
                  <span>LOCAL</span>
                  <strong>UCS CARVI · Serra Gaúcha</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
