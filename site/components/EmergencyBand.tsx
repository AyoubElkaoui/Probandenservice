import { site } from '@/lib/site';
import styles from './EmergencyBand.module.css';

export function EmergencyBand({
  heading,
  subline,
}: {
  heading?: React.ReactNode;
  subline?: string;
}) {
  return (
    <section className={styles.band}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.live}>● LIVE · NU BEREIKBAAR</div>
          <h2 className={styles.heading}>
            {heading ?? (
              <>
                LEKKE BAND?<br />WIJ RIJDEN UIT.
              </>
            )}
          </h2>
          <p className={styles.sub}>
            {subline ??
              'Tijdelijke band ter plekke, zodat je veilig tot 80 km/u verder kunt. Kapotte band nemen we mee. Bel 24/7.'}
          </p>
        </div>
        <div className={styles.callBox}>
          <div className={styles.callLabel}>SPOEDLIJN 24 / 7</div>
          <a href={`tel:${site.emergencyPhone.tel}`} className={styles.callNumber}>
            {site.emergencyPhone.display}
          </a>
          <a href={`tel:${site.emergencyPhone.tel}`} className={styles.callBtn}>
            NU BELLEN →
          </a>
        </div>
      </div>
    </section>
  );
}
