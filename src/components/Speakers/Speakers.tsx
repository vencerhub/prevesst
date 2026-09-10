import { useState, useMemo, useRef, useEffect } from 'react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { speakers, type Speaker } from '../../data/speakers';
import styles from './Speakers.module.css';

function SpeakerCard({
  speaker,
}: {
  speaker: Speaker;
}) {
  return (
    <article
      className={styles.card}
      aria-label={`Palestrante ${speaker.name}`}
    >
      {/* Badge de status */}
      <span className={`badge ${speaker.photo ? 'badge--green' : 'badge--muted'}`}>
        {speaker.photo ? 'CONFIRMADO' : 'EM BREVE'}
      </span>

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

interface CarouselRowProps {
  speakers: Speaker[];
  direction: 'left' | 'right';
  rowId: string;
  speed?: number;
}

function CarouselRow({ speakers, direction, rowId, speed = 0.6 }: CarouselRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const displayItems = useMemo(() => {
    if (speakers.length === 0) return [];
    let list = [...speakers];
    while (list.length < 8) {
      list = [...list, ...speakers];
    }
    return [...list, ...list, ...list];
  }, [speakers]);

  useEffect(() => {
    const container = rowRef.current;
    if (!container) return;

    if (direction === 'right' && container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 3;
    }

    let lastTime = performance.now();

    const step = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!isPausedRef.current && container) {
        const oneThird = container.scrollWidth / 3;
        if (oneThird > 0) {
          const moveDistance = speed * 60 * delta;

          if (direction === 'left') {
            container.scrollLeft += moveDistance;
            if (container.scrollLeft >= oneThird * 2) {
              container.scrollLeft -= oneThird;
            }
          } else {
            container.scrollLeft -= moveDistance;
            if (container.scrollLeft <= 0) {
              container.scrollLeft += oneThird;
            }
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [direction, speed, displayItems]);

  const handleNav = (navDir: 'prev' | 'next') => {
    const container = rowRef.current;
    if (!container) return;

    // Pausar movimento contínuo temporariamente durante a navegação
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 2500);

    const cardEl = container.querySelector(`.${styles.cardWrapper}`);
    const cardWidth = cardEl ? cardEl.clientWidth : 320;
    const gap = 24;
    const shift = (cardWidth + gap) * (navDir === 'next' ? 1 : -1);

    const oneThird = container.scrollWidth / 3;
    if (oneThird > 0) {
      if (container.scrollLeft + shift < 0) {
        container.scrollLeft += oneThird;
      } else if (container.scrollLeft + shift > oneThird * 2) {
        container.scrollLeft -= oneThird;
      }
    }

    container.scrollBy({
      left: shift,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.rowWrapper}>
      {/* Botão Anterior */}
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={() => handleNav('prev')}
        aria-label={`Rolar palestrantes da ${rowId} para a esquerda`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Faixa do Carrossel */}
      <div
        ref={rowRef}
        className={styles.marqueeRow}
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
        onTouchStart={() => { isPausedRef.current = true; }}
        onTouchEnd={() => {
          setTimeout(() => {
            isPausedRef.current = false;
          }, 1500);
        }}
      >
        <div className={styles.marqueeTrack}>
          {displayItems.map((speaker, index) => (
            <div key={`${speaker.id}-${rowId}-${index}`} className={styles.cardWrapper}>
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>

      {/* Botão Próximo */}
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={() => handleNav('next')}
        aria-label={`Rolar palestrantes da ${rowId} para a direita`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

export function Speakers() {
  const ref = useRevealOnScroll<HTMLElement>();
  const [activeDay, setActiveDay] = useState<1 | 2 | 'all'>('all');

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

  return (
    <section
      id="palestrantes"
      ref={ref}
      className={`section section--alt ${styles.speakers}`}
      aria-labelledby="speakers-heading"
    >
      <div className="container">
        <div className={styles.topBar}>
          <div className={styles.header}>
            <p className="eyebrow eyebrow--line">QUEM ESTARÁ NO 24º PREVESST</p>
            <h2 id="speakers-heading" className={styles.heading}>
              Especialistas e Lideranças Técnicas de SST
            </h2>
            <p className={styles.lead}>
              Profissionais de referência, especialistas e lideranças técnicas compartilhando atualizações práticas sobre NRs, Riscos Psicossociais e Engenharia de Prevenção.
            </p>
          </div>

          {/* Filtros por dia */}
          <div className={styles.filters} role="tablist" aria-label="Filtrar palestrantes por dia">
            {[
              { key: 'all' as const, label: 'Todos' },
              { key: 1 as const, label: 'Dia 01 (01/10)' },
              { key: 2 as const, label: 'Dia 02 (02/10)' },
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
      </div>

      {/* Carrosseis Contínuos em Duas Fileiras */}
      <div className={styles.carouselsContainer} role="region" aria-label="Carrossel contínuo de palestrantes">
        {/* Fileira 1 — Rolagem contínua para esquerda */}
        <CarouselRow
          speakers={row1}
          direction="left"
          rowId="fileira-1"
          speed={0.6}
        />

        {/* Fileira 2 — Rolagem contínua para direita */}
        <CarouselRow
          speakers={row2}
          direction="right"
          rowId="fileira-2"
          speed={0.6}
        />
      </div>
    </section>
  );
}
