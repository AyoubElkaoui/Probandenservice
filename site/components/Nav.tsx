import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { MobileMenu } from './MobileMenu';
import styles from './Nav.module.css';

const links = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/spoedservice', label: 'Spoedservice' },
  { href: '/actie/road-trip', label: 'Acties', badge: 'NIEUW' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand} aria-label={`${site.name} — naar home`}>
        <Image
          src="/white-logo.png"
          alt={site.name}
          width={160}
          height={72}
          priority
          className={styles.logo}
        />
      </Link>

      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href} className={l.badge ? styles.hasBadge : undefined}>
            <Link href={l.href}>{l.label}</Link>
            {l.badge && <span className={styles.navBadge}>{l.badge}</span>}
          </li>
        ))}
      </ul>

      <MobileMenu />

      <div className={styles.cta}>
        <Link href="/contact" className={styles.ghost}>Afspraak</Link>
        <a href={`tel:${site.emergencyPhone.tel}`} className={styles.primary}>
          Spoed: {site.emergencyPhone.display} <span aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  );
}
