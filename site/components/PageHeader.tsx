import { TireRim } from './TireRim';
import styles from './PageHeader.module.css';

type Crumb = { href?: string; label: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  crumbs?: Crumb[];
};

export function PageHeader({ eyebrow, title, lede, crumbs }: Props) {
  return (
    <header className={styles.header}>
      {/* Subtiel wiel in de achtergrond */}
      <div className={styles.rimBg} aria-hidden="true">
        <TireRim size={480} />
      </div>
      <div className={`container ${styles.inner}`}>
        {crumbs && (
          <nav className={styles.crumbs} aria-label="Kruimelpad">
            {crumbs.map((c, i) => (
              <span key={i} className={styles.crumb}>
                {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
                {i < crumbs.length - 1 && <span className={styles.sep} aria-hidden="true">/</span>}
              </span>
            ))}
          </nav>
        )}
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h1 className={styles.title}>{title}</h1>
        {lede && <p className={styles.lede}>{lede}</p>}
      </div>
    </header>
  );
}
