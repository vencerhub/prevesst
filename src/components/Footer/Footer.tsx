import { eventConfig } from '../../data/event';
import styles from './Footer.module.css';

const navLinks = [
  { href: '#evento', label: 'O Evento' },
  { href: '#temas', label: 'Temas' },
  { href: '#palestrantes', label: 'Palestrantes' },
  { href: '#programacao', label: 'Programação' },
  { href: '#local', label: 'Local' },
  { href: '#ingressos', label: 'Inscrição Solidária' },
  { href: '#faq', label: 'FAQ' },
];

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2a10 10 0 0 1 8.95 14.45L22 22l-5.55-1.05A10 10 0 1 1 12 2Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M8.5 8.5s-.5 2.5 1.5 4.5 4.5 1.5 4.5 1.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function Footer() {
  const whatsappUrl = `https://wa.me/${eventConfig.contact.whatsapp.number}?text=${encodeURIComponent(eventConfig.contact.whatsapp.message)}`;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Marca & Institucional */}
        <div className={styles.brand}>
          <div className={styles.brandHeader}>
            <div className={styles.footerLogoCard}>
              <img
                src="/images/logos/prevesst.png"
                alt="24º PREVESST 2026"
                className={styles.footerLogo}
              />
            </div>
          </div>
          <p className={styles.brandFullName}>
            {eventConfig.subtitle}
          </p>
          <p className={styles.brandDesc}>
            Realização da <strong>ARES</strong> — Associação Sul-Rio-Grandense de Engenharia de Segurança do Trabalho.
          </p>
          <p className={styles.brandDate}>
            01 e 02 de Outubro de 2026 · UCS CARVI · Bento Gonçalves / RS
          </p>

          <div className={styles.social}>
            <a
              href={eventConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram da ARES"
            >
              <InstagramIcon />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`WhatsApp: ${eventConfig.contact.whatsapp.displayNumber}`}
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Links Rápidos */}
        <nav className={styles.nav} aria-label="Navegação rápida do rodapé">
          <p className={styles.colTitle}>Navegação</p>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contato & Atendimento */}
        <div className={styles.contact}>
          <p className={styles.colTitle}>Atendimento</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <strong>WhatsApp Oficial</strong>
            <span>{eventConfig.contact.whatsapp.displayNumber}</span>
          </a>
          <a
            href={eventConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <strong>Instagram</strong>
            <span>@ares.poa</span>
          </a>
        </div>
      </div>

      {/* Faixa de Direitos */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {year} 24º PREVESST · ARES. Todos os direitos reservados.
            </p>
            <div className={styles.legal}>
              <span>Inscrição Solidária (3 kg de alimentos)</span>
              <span>·</span>
              <span>150 Vagas Presenciais</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
