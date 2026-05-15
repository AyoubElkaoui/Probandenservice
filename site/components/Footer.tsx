import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { Stripe } from './Stripe';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Stripe />
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" aria-label={site.name}>
            <Image
              src="/logo.png"
              alt={site.name}
              width={160}
              height={72}
              className={styles.logo}
            />
          </Link>
          <p className={styles.about}>
            Jouw bandenspecialist in {site.address.city} en omgeving. Elke dag open, 24/7 spoedservice.
          </p>
        </div>

        <div>
          <div className={styles.colHead}>DIENSTEN</div>
          <ul className={styles.list}>
            {services.map(s => (
              <li key={s.slug}>
                <Link href={`/diensten/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.colHead}>BEDRIJF</div>
          <ul className={styles.list}>
            <li><Link href="/over-ons">Over ons</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/spoedservice">Spoedservice</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className={styles.colHead} style={{ marginTop: 32 }}>ZOMERACTIES 2026</div>
          <ul className={styles.list}>
            <li><Link href="/actie/zomerbanden">Zomerbanden advies</Link></li>
            <li><Link href="/actie/vakantiecheck">Vakantiecheck</Link></li>
            <li><Link href="/actie/airco-zomer">Airco service</Link></li>
            <li><Link href="/actie/road-trip">Compleet bezoek</Link></li>
          </ul>
        </div>

        <div>
          <div className={styles.colHead}>CONTACT</div>
          <ul className={styles.list}>
            <li><a href={`tel:${site.phone.tel}`}>{site.phone.display}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.address.street}</li>
            <li>{site.address.postal} {site.address.city}</li>
            <li>{site.hours.weekdays}</li>
            <li>{site.hours.saturday}</li>
          </ul>
        </div>
      </div>

      <div className={styles.legal}>
        <span>© {new Date().getFullYear()} {site.legalName.toUpperCase()}</span>
        <span>PRIVACY · ALGEMENE VOORWAARDEN · COOKIES</span>
      </div>
    </footer>
  );
}
