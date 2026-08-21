import styles from './Venue.module.css';

export function Venue() {
  return (
    <section
      id="local"
      className={`section ${styles.venue}`}
      aria-labelledby="venue-heading"
    >
      <div className="container">
        <div className={styles.grid}>
          {/* Informações do Local */}
          <div className={styles.info}>
            <p className="eyebrow eyebrow--line">CIDADE E LOCALIZAÇÃO</p>
            <h2 id="venue-heading" className={styles.heading}>
              Nos encontramos em <br />
              <span className={styles.accent}>Bento Gonçalves — RS</span>
            </h2>

            <address className={styles.address} aria-label="Endereço do evento">
              <div className={styles.addressLine}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M11 2C8 2 5.5 4.5 5.5 7.5c0 5 5.5 12.5 5.5 12.5s5.5-7.5 5.5-12.5C16.5 4.5 14 2 11 2Z" stroke="currentColor" strokeWidth="1.75" />
                  <circle cx="11" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.75" />
                </svg>
                <div>
                  <strong>Universidade de Caxias do Sul — UCS</strong>
                  <br />
                  CARVI — Campus Universitário da Região dos Vinhedos (Blocos B e J)
                  <br />
                  Alameda João Dal Sasso, 800 - Universitário
                  <br />
                  Bento Gonçalves — Serra Gaúcha / RS
                </div>
              </div>

              <div className={styles.addressLine}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
                  <path d="M7 2v4M15 2v4M3 9h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
                <div>
                  <strong>01 e 02 de Outubro de 2026</strong>
                  <br />
                  Credenciamento a partir das 08h00
                </div>
              </div>
            </address>

            <div className={styles.note}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 8v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="9" cy="5.5" r="0.8" fill="currentColor" />
              </svg>
              <span>
                Recomenda-se realizar o credenciamento cedo no primeiro dia para retirada do kit e entrega dos 3 kg de alimentos solidários.
              </span>
            </div>
          </div>

          {/* Painel do Mapa */}
          <div className={styles.mapWrapper} aria-label="Mapa do local do evento">
            <div className={styles.mapContainer}>
              <iframe
                title="Localização do evento - UCS CARVI Blocos B e J"
                src="https://maps.google.com/maps?q=Alameda%20Jo%C3%A3o%20Dal%20Sasso%2C%20800%2C%20Bento%20Gon%C3%A7alves%20-%20RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              />
            </div>
            <div className={styles.mapFooter}>
              <span className={styles.mapBadge}>
                Local Oficial Confirmado · Blocos B e J
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=UCS-CARVI+-+Blocos+B/J+Alameda+Joao+Dal+Sasso+800+Bento+Goncalves+RS"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                <span>Abrir rota no Google Maps</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
