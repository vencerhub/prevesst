import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './About.module.css';

const pillars = [
  {
    code: '01',
    title: 'Fatores de Riscos Psicossociais (FRPS)',
    description:
      'Discussões aprofundadas sobre assédio, saúde mental, exigências regulatórias e impactos práticos na gestão de SST e compliance.',
  },
  {
    code: '02',
    title: 'Atualização e Revisão das NRs',
    description:
      'Análise técnica das transformações na NR-1, NR-10, NR-12, NR-33 e normas complementares com especialistas e auditores.',
  },
  {
    code: '03',
    title: 'Engenharia Aplicada e Prevenção',
    description:
      'Soluções reais para bloqueio de energias, ventilação industrial, investigação de sinistros e segurança em novas tecnologias.',
  },
  {
    code: '04',
    title: 'Networking Técnico de Alto Nível',
    description:
      'Conexão direta entre engenheiros, médicos do trabalho, peritos, auditores fiscais e lideranças de empresas de todo o estado.',
  },
];

export function About() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section
      id="evento"
      ref={ref}
      className={`section section--graphite ${styles.about}`}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className={styles.topLayout}>
          <div className={`${styles.header} reveal`}>
            <p className="eyebrow eyebrow--line">POR QUE PARTICIPAR</p>
            <h2 id="about-heading" className={styles.heading}>
              A segurança do trabalho está mudando.{' '}
              <span className={styles.accent}>
                Esteja preparado para os novos desafios da área.
              </span>
            </h2>
          </div>

          <div className={`${styles.editorial} reveal reveal-delay-1`}>
            <p className={styles.leadText}>
              O PREVESST chega à sua <strong>24ª edição</strong> como o principal fórum técnico-científico do Rio Grande do Sul dedicado ao aprimoramento da Engenharia de Segurança, Medicina do Trabalho e Prevenção de Riscos.
            </p>
            <p className={styles.bodyText}>
              Mais do que teoria, o evento promove um diálogo rigoroso entre a prática de campo, as exigências regulatórias e os fatores psicossociais que moldam o futuro das organizações.
            </p>
          </div>
        </div>

        <div className={styles.pillarsGrid}>
          {pillars.map((pillar) => (
            <div
              key={pillar.code}
              className={`${styles.pillarItem} reveal`}
            >
              <div className={styles.pillarHeader}>
                <span className={styles.pillarCode}>{pillar.code}</span>
                <div className={styles.pillarLine} />
              </div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
