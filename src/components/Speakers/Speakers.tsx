import { useState, useEffect, useCallback, useMemo } from 'react';
import { speakers, type Speaker } from '../../data/speakers';
import styles from './Speakers.module.css';
import { SpeakerModal } from './SpeakerModal';
import { eventConfig } from '../../data/event';

const isDev = import.meta.env.DEV;

function SpeakerCard({
  speaker,
  onClick,
}: {
  speaker: Speaker;
  onClick: () => void;
}) {
  return (
    <article
      className={styles.card}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`Ver perfil de ${speaker.name}`}
    >
      {/* Badge de placeholder apenas em dev */}
      {isDev && speaker.isPlaceholder && (
        <span className="badge badge--placeholder" title="Conteúdo provisório — substituir antes da publicação">
          PROVISÓRIO
        </span>
      )}

      {/* Foto */}
      <div className={styles.photo}>
        {speaker.photo ? (
          <img src={speaker.photo} alt={`Foto de ${speaker.name}`} loading="lazy" />
        ) : (
          <div className={styles.photoPlaceholder} aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="15" r="8" stroke="currentColor" strokeWidth="2" />
              <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        )}
        <div className={styles.photoOverlay}>
          <span className={styles.photoOverlayText}>Ver perfil</span>
        </div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.tags}>
          {speaker.tags.slice(0, 2).map(tag => (
            <span key={tag} className="badge badge--red">{tag}</span>
          ))}
        </div>
        <h3 className={styles.name}>{speaker.name}</h3>
        <p className={styles.role}>{speaker.role}</p>
        <p className={styles.institution}>{speaker.institution}</p>
      </div>

      {/* Tema */}
      <div className={styles.topic}>
        <span className={styles.topicLabel}>Tema</span>
        <p className={styles.topicText}>{speaker.topic}</p>
      </div>
    </article>
  );
}

export function Speakers() {
  const [activeDay, setActiveDay] = useState<1 | 2 | 'all'>('all');
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const filtered = useMemo(() => {
    return activeDay === 'all'
      ? speakers
      : speakers.filter(s => s.topicDay === activeDay);
  }, [activeDay]);

  const { row1, row2 } = useMemo(() => {
    const mid = Math.ceil(filtered.length / 2);
    const r1 = filtered.slice(0, mid);
    const r2 = filtered.slice(mid);
    const fill1 = r1.length > 0 ? (r1.length < 4 ? [...r1, ...r1] : r1) : filtered;
    const fill2 = r2.length > 0 ? (r2.length < 4 ? [...r2, ...r2] : r2) : filtered;
    return { row1: fill1, row2: fill2 };
  }, [filtered]);

  const handleOpen = useCallback((speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback(() => {
    setSelectedSpeaker(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handleClose]);

  const handleRegistration = (e: React.MouseEvent) => {
    if (eventConfig.registration.general === '#inscricao') {
      e.preventDefault();
      handleClose();
      document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="palestrantes"
      className={`section section--alt ${styles.speakers}`}
      aria-labelledby="speakers-heading"
    >
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow eyebrow--line reveal">Quem estará no PREVESST</p>
          <h2 id="speakers-heading" className={`${styles.heading} reveal reveal-delay-1`}>
            Especialistas e profissionais convidados
          </h2>
          <p className={`${styles.lead} reveal reveal-delay-2`}>
            Profissionais com experiência de campo, pesquisa e atuação normativa compartilhando
            perspectivas sobre os desafios atuais da Segurança e Saúde no Trabalho.
          </p>

          {isDev && (
            <p className={styles.devNote}>
              ⚠️ Palestrantes com badge "PROVISÓRIO" são conteúdo fictício. TODO: substituir antes da publicação.
            </p>
          )}
        </div>

        {/* Filtros por dia */}
        <div className={styles.filters} role="tablist" aria-label="Filtrar palestrantes por dia">
          {[
            { key: 'all' as const, label: 'Todos os palestrantes' },
            { key: 1 as const, label: 'Dia 01 — 01/10' },
            { key: 2 as const, label: 'Dia 02 — 02/10' },
          ].map(filter => (
            <button
              key={filter.key}
              className={`${styles.filterBtn} ${activeDay === filter.key ? styles.filterActive : ''}`}
              onClick={() => setActiveDay(filter.key)}
              role="tab"
              aria-selected={activeDay === filter.key}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Carrosseis Contínuos em Duas Fileiras */}
      <div className={styles.carouselsContainer} role="region" aria-label="Carrossel contínuo de palestrantes">
        {/* Fileira 1 — Rolagem contínua para esquerda */}
        <div className={styles.marqueeRow}>
          <div className={`${styles.marqueeTrack} ${styles.scrollLeft}`}>
            {[...row1, ...row1].map((speaker, index) => (
              <div key={`${speaker.id}-r1-${index}`} className={styles.cardWrapper}>
                <SpeakerCard
                  speaker={speaker}
                  onClick={() => handleOpen(speaker)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Fileira 2 — Rolagem contínua para direita */}
        <div className={styles.marqueeRow}>
          <div className={`${styles.marqueeTrack} ${styles.scrollRight}`}>
            {[...row2, ...row2].map((speaker, index) => (
              <div key={`${speaker.id}-r2-${index}`} className={styles.cardWrapper}>
                <SpeakerCard
                  speaker={speaker}
                  onClick={() => handleOpen(speaker)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={handleClose}
          onRegistration={handleRegistration}
        />
      )}
    </section>
  );
}
