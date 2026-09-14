import { useState } from 'react';
import { schedule, type ScheduleSession, type SessionType } from '../../data/schedule';
import styles from './Schedule.module.css';

function sessionTypeClass(type: SessionType): string {
  const map: Record<SessionType, string> = {
    talk: styles.typeTalk,
    opening: styles.typeOpening,
    debate: styles.typeDebate,
    break: styles.typeBreak,
    social: styles.typeSocial,
    registration: styles.typeRegistration,
    institutional: styles.typeInstitutional,
  };
  return map[type] ?? '';
}

function sessionTypeLabel(type: SessionType): string {
  const map: Record<SessionType, string> = {
    talk: 'Palestra',
    opening: 'Solenidade de Abertura',
    debate: 'Mesa Redonda / Debate',
    break: 'Intervalo / Coffee Break',
    social: 'Encerramento Oficial',
    registration: 'Credenciamento',
    institutional: 'Atividade Institucional',
  };
  return map[type] ?? type;
}

function SessionRow({ session }: { session: ScheduleSession }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.session} ${sessionTypeClass(session.type)}`}>
      <div className={styles.sessionTime}>
        <span className={styles.timeStart}>{session.time}</span>
        {session.timeEnd && (
          <>
            <span className={styles.timeSep} aria-hidden="true">–</span>
            <span className={styles.timeEnd}>{session.timeEnd}</span>
          </>
        )}
      </div>

      <div className={styles.sessionMain}>
        <div className={styles.sessionHeader}>
          <span className={`${styles.typeTag} ${sessionTypeClass(session.type)}_tag`}>
            {sessionTypeLabel(session.type)}
          </span>
          <h4 className={styles.sessionTitle}>{session.title}</h4>
        </div>

        {session.speaker && (
          <div className={styles.sessionSpeaker}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 14c0-2.5 2.5-4 6-4s6 1.5 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>{session.speaker}</span>
          </div>
        )}

        {session.description && (
          <div className={`${styles.sessionDesc} ${expanded ? styles.expanded : ''}`}>
            <p>{session.description}</p>
          </div>
        )}
      </div>

      {session.description && (
        <button
          className={styles.expandBtn}
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? 'Recolher detalhes da sessão' : 'Ver detalhes da sessão'}
          aria-expanded={expanded}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const dayData = schedule.find((d) => d.day === activeDay)!;

  return (
    <section
      id="programacao"
      className={`section ${styles.schedule}`}
      aria-labelledby="schedule-heading"
    >
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow eyebrow--line">CRONOGRAMA DO EVENTO</p>
          <h2 id="schedule-heading" className={styles.heading}>
            Programação do <span className={styles.accent}>24º PREVESST</span>
          </h2>
          <p className={styles.lead}>
            Grade horária completa com palestras técnicas, painéis e momentos de integração.
          </p>
        </div>

        {/* Tabs de Seleção de Dia */}
        <div className={styles.tabs} role="tablist" aria-label="Dias do evento">
          {schedule.map((day) => (
            <button
              key={day.day}
              role="tab"
              aria-selected={activeDay === day.day}
              aria-controls={`day-panel-${day.day}`}
              id={`day-tab-${day.day}`}
              className={`${styles.tab} ${activeDay === day.day ? styles.tabActive : ''}`}
              onClick={() => setActiveDay(day.day)}
            >
              <span className={styles.tabDay}>{day.label}</span>
              <span className={styles.tabDate}>{day.displayDate}</span>
            </button>
          ))}
        </div>

        {/* Lista de Sessões */}
        <div
          id={`day-panel-${activeDay}`}
          role="tabpanel"
          aria-labelledby={`day-tab-${activeDay}`}
          className={styles.sessionList}
        >
          {dayData.sessions.map((session) => (
            <SessionRow key={session.id} session={session} />
          ))}
        </div>

        {/* Informação sobre almoço */}
        <div className={styles.note}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
          </svg>
          <span>
            <strong>Intervalo para almoço:</strong> das 12h45 às 13h30 (Dia 01) e das 12h00 às 13h30 (Dia 02) — alimentação por conta do participante no campus ou entorno.
          </span>
        </div>
      </div>
    </section>
  );
}
