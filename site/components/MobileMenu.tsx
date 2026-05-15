'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { site } from '@/lib/site';
import styles from './MobileMenu.module.css';

const links = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/spoedservice', label: 'Spoedservice' },
  { href: '/actie/zomerbanden', label: 'Zomeracties' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className={styles.toggle} aria-label="Menu openen">
        <Menu size={24} />
      </button>

      {open && (
        <div className={styles.overlay}>
          <div className={styles.header}>
            <span className={styles.brand}>PROBANDENSERVICE</span>
            <button onClick={() => setOpen(false)} className={styles.close} aria-label="Menu sluiten">
              <X size={24} />
            </button>
          </div>
          <nav className={styles.nav}>
            {links.map(l => (
              <Link key={l.href} href={l.href} className={styles.link} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className={styles.footer}>
            <a href={`tel:${site.phone.tel}`} className={styles.callBtn}>
              BEL: {site.phone.display}
            </a>
            <Link href="/contact" className={styles.appointBtn} onClick={() => setOpen(false)}>
              Afspraak maken
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
