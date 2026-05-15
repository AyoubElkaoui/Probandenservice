import { site } from '@/lib/site';
import styles from './TopBar.module.css';

export function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <span>{site.address.street}, {site.address.city}</span>
        <span>{site.hours.weekdays}</span>
      </div>
      <div className={styles.right}>
        <span className={styles.dot}>● 24/7 SPOEDLIJN</span>
        <a href={`tel:${site.emergencyPhone.tel}`} className={styles.phone}>
          {site.emergencyPhone.display}
        </a>
      </div>
    </div>
  );
}
