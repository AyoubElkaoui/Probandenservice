import Link from 'next/link';
import { services as allServices, type Service } from '@/lib/services';
import styles from './ServiceGrid.module.css';

type Props = {
  services?: Service[];
  showAll?: boolean;       // if false, only first 6
};

export function ServiceGrid({ services, showAll = true }: Props) {
  const list = services ?? (showAll ? allServices : allServices.slice(0, 6));
  return (
    <div className={styles.grid}>
      {list.map(s => (
        <Link key={s.slug} href={`/diensten/${s.slug}`} className={`${styles.card} ${s.featured ? styles.featured : ''}`}>
          <span className={styles.number} aria-hidden="true">{s.number}</span>
          <div className={styles.head}>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.summary}>{s.summary}</p>
          </div>
          <div className={styles.tagrow}>
            {s.tags.slice(0, 4).map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <span className={styles.cta} aria-hidden="true">Meer over {s.shortTitle.toLowerCase()} →</span>
        </Link>
      ))}
    </div>
  );
}
