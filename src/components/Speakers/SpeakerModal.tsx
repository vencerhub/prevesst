import { useEffect, useRef } from 'react';
import { type Speaker } from '../../data/speakers';
import { eventConfig } from '../../data/event';
import styles from './SpeakerModal.module.css';

interface Props {
  speaker: Speaker;
  onClose: () => void;
  onRegistration: (e: React.MouseEvent) => void;
}

export function SpeakerModal({ speaker, onClose, onRegistration }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focar no botão fechar ao abrir
  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  // Trap focus
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const isDev = import.meta.env.DEV;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-speaker-name"
    >
      <div className={styles.modal} ref={modalRef}>
        {/* Header */}
        <div className={styles.header}>
          {/* Foto */}
          <div className={styles.photo}>
            {speaker.photo ? (
              <img src={speaker.photo} alt={`Foto de ${speaker.name}`} />
            ) : (
              <div className={styles.photoPlaceholder} aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M5 44c0-10.493 8.507-19 19-19s19 8.507 19 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>

          {/* Identificação */}
          <div className={styles.identity}>
            {isDev && speaker.isPlaceholder && (
              <span className="badge badge--placeholder">CONTEÚDO PROVISÓRIO</span>
            )}
            <div className={styles.tags}>
              {speaker.tags.map(tag => (
                <span key={tag} className="badge badge--red">{tag}</span>
              ))}
            </div>
            <h2 id="modal-speaker-name" className={styles.name}>{speaker.name}</h2>
            <p className={styles.role}>{speaker.role}</p>
            <p className={styles.institution}>{speaker.institution}</p>
          </div>

          {/* Fechar */}
          <button
            ref={closeBtnRef}
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar perfil do palestrante"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Tema */}
          <div className={styles.topicBlock}>
            <span className={styles.topicLabel}>Tema apresentado</span>
            <p className={styles.topicText}>{speaker.topic}</p>
          </div>

          {/* Bio */}
          <div className={styles.bioBlock}>
            <span className={styles.bioLabel}>Currículo</span>
            <p className={styles.bioText}>{speaker.bio}</p>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <a
            href={eventConfig.registration.general}
            className="btn btn--primary"
            onClick={onRegistration}
          >
            Garantir minha vaga
          </a>
          <button className="btn btn--outline-dark" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
