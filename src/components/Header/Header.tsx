import { useState, useEffect } from 'react';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import styles from './Header.module.css';

const navLinks = [
  { href: '#evento', label: 'O Evento' },
  { href: '#temas', label: 'Temas' },
  { href: '#palestrantes', label: 'Palestrantes' },
  { href: '#programacao', label: 'Programação' },
  { href: '#local', label: 'Local' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const isScrolled = useScrollHeader(60);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <a href="#" className={styles.brand} aria-label="24º PREVESST 2026 — Início">
          <img
            src="/images/logos/prevesst.png"
            alt="24º PREVESST 2026"
            className={styles.brandLogo}
          />
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className={styles.ctaWrapper}>
          <a
            href="#programacao"
            className="btn btn--primary btn--sm"
            onClick={(e) => handleNavClick(e, '#programacao')}
            aria-label="Ver programação do 24º PREVESST"
          >
            Programação
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.drawerBackdrop} onClick={() => setMenuOpen(false)} />
        <nav className={styles.drawerNav} aria-label="Menu móvel">
          <div className={styles.drawerHeader}>
            <a href="#" className={styles.brand} onClick={() => setMenuOpen(false)} aria-label="24º PREVESST 2026">
              <img
                src="/images/logos/prevesst.png"
                alt="24º PREVESST 2026"
                className={styles.drawerLogo}
              />
            </a>
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>

          <div className={styles.drawerLinks}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.drawerLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.drawerCta}>
            <a
              href="#programacao"
              className="btn btn--primary btn--lg"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={(e) => handleNavClick(e, '#programacao')}
            >
              Ver Programação
            </a>
            <p className={styles.drawerMeta}>
              Edição Concluída · Bento Gonçalves/RS
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
