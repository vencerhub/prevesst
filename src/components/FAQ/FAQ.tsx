import { useState } from 'react';
import { faqItems } from '../../data/faq';
import styles from './FAQ.module.css';

function FaqItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          className={styles.icon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={styles.answer} aria-hidden={!isOpen}>
        <div className={styles.answerInner}>
          {answer.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-01');

  return (
    <section id="faq" className={`section ${styles.faq}`} aria-labelledby="faq-heading">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.header}>
            <p className="eyebrow eyebrow--line">Dúvidas frequentes</p>
            <h2 id="faq-heading" className={styles.heading}>FAQ</h2>
            <p className={styles.lead}>
              Caso sua dúvida não esteja listada, entre em contato pelo WhatsApp.
            </p>
          </div>

          <div className={styles.list} role="list">
            {faqItems.map(item => (
              <FaqItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
