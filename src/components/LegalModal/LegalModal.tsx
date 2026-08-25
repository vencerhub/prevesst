import { useEffect, useRef } from 'react';
import styles from './LegalModal.module.css';

interface Props {
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export function LegalModal({ type, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    closeBtnRef.current?.focus();
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.header}>
          <h2 id="legal-modal-title" className={styles.headerTitle}>
            {type === 'privacy' ? 'Política de Privacidade e LGPD' : 'Termos de Uso e Responsabilidade'}
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar janela"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={styles.content}>
          {type === 'privacy' ? (
            <>
              <div className={styles.highlightBox}>
                Esta página é institucional e informativa. Não armazenamos seus dados cadastrais em banco de dados local.
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>1. Processamento Seguro de Inscrições</h3>
                <p>
                  Todas as inscrições, credenciamentos e emissão de ingressos/certificados para o <strong>24º PREVESST</strong> são operados e processados exclusivamente através da plataforma parceira <strong>Even3</strong>, que atua em total conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
                </p>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>2. Finalidade dos Dados</h3>
                <p>
                  A coleta de informações (nome, e-mail, documento e categoria profissional) destina-se unicamente à gestão do evento, controle de acesso ao auditório, envio de comunicados operacionais e emissão de certificados oficiais de participação.
                </p>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>3. Cookies e Rastreamento</h3>
                <p>
                  Utilizamos apenas tecnologias essenciais de navegação para garantir a segurança, usabilidade e métricas anônimas de tráfego, sem comercialização de dados com terceiros.
                </p>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>4. Dúvidas e Direitos do Titular</h3>
                <p>
                  Para qualquer dúvida sobre a privacidade do evento ou exercer seus direitos de titular, entre em contato com a organização oficial pelo e-mail ou WhatsApp listados nesta página.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.highlightBox}>
                Regras e diretrizes para participação no 24º PREVESST — UCS CARVI Bento Gonçalves/RS.
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>1. Responsabilidade Organizacional</h3>
                <p>
                  O cronograma, horários, palestrantes, conteúdos técnicos e regras de credenciamento do <strong>24º PREVESST</strong> são de inteira responsabilidade da <strong>ARES</strong> (Associação Sul-Rio-Grandense de Engenharia de Segurança do Trabalho), cabendo à Even3 apenas o suporte tecnológico ao processo de inscrição.
                </p>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>2. Inscrição Solidária e Acesso</h3>
                <p>
                  A inscrição confere direito de acesso às palestras e atividades mediante a entrega presencial de <strong>3 kg de alimentos não perecíveis</strong> no credenciamento oficial do evento, respeitado o limite de 150 participantes presenciais.
                </p>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>3. Alterações de Programação</h3>
                <p>
                  A organização reserva-se o direito de realizar ajustes na grade de palestrantes ou cronograma por motivos de força maior ou imprevistos de agenda dos convidados, comprometendo-se a manter o padrão técnico e qualidade dos temas abordados.
                </p>
              </div>
            </>
          )}
        </div>

        <div className={styles.footer}>
          <button type="button" className="btn btn--secondary btn--sm" onClick={onClose}>
            Entendi e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
