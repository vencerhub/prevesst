import { useState, useEffect } from 'react';
import { eventConfig } from '../../data/event';
import styles from './MobileStickyCTA.module.css';

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      const ticketsEl = document.getElementById('ingressos');
      const ticketsRect = ticketsEl?.getBoundingClientRect();
      const inTickets = ticketsRect && ticketsRect.top < window.innerHeight && ticketsRect.bottom > 0;
      const scrollY = window.scrollY;
      setVisible(scrollY > 500 && !inTickets);
    };

    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`} aria-hidden={!visible}>
      <div className={styles.inner}>
        <div className={styles.textGroup}>
          <span className={styles.badge}>SOLIDÁRIO (3 KG)</span>
          <span className={styles.caption}>150 Vagas · Bento Gonçalves</span>
        </div>
        <a
          href={eventConfig.registration.general}
          className={`btn btn--primary ${styles.cta}`}
          onClick={handleClick}
          tabIndex={visible ? 0 : -1}
          aria-label="Garantir minha vaga no 24º PREVESST"
        >
          Garantir Vaga
        </a>
      </div>
    </div>
  );
}
