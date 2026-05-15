import type { Metadata } from 'next';
import { Bebas_Neue, Manrope, IBM_Plex_Mono } from 'next/font/google';
import { site } from '@/lib/site';
import { TopBar } from '@/components/TopBar';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './globals.css';

// ── Fonts ──────────────────────────────────────────────────
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

// ── SEO defaults ───────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Banden, uitlijnen & 24/7 spoedservice in ${site.address.city}`,
    template: `%s · ${site.name}`,
  },
  description:
    'Bandenspecialist in Culemborg, Utrecht, Nieuwegein en omgeving. Banden kopen, 3D uitlijnen, airco vullen, bandenwissel en 24/7 spoedservice. Deskundige technici, servicegarantie.',
  keywords: [
    // Culemborg (hoofdlocatie)
    'banden Culemborg', 'banden kopen Culemborg', 'banden wisselen Culemborg',
    'bandenmontage Culemborg', 'lekke band Culemborg', 'bandenservice Culemborg',
    '3D uitlijnen Culemborg', 'airco vullen Culemborg', 'bandenopslag Culemborg',
    // Utrecht
    'banden Utrecht', 'banden wisselen Utrecht', 'lekke band Utrecht',
    'bandenmontage Utrecht', '3D uitlijnen Utrecht', 'airco vullen Utrecht',
    // Nieuwegein & Houten
    'banden Nieuwegein', 'banden wisselen Nieuwegein', 'lekke band Nieuwegein',
    'banden Houten', 'banden wisselen Houten',
    // Amersfoort
    'banden Amersfoort', 'lekke band Amersfoort',
    // Vianen & IJsselstein
    'banden Vianen', 'banden IJsselstein',
    // Tiel & omgeving
    'banden Tiel', 'banden wisselen Tiel', 'lekke band Tiel',
    'banden Geldermalsen', 'banden Zaltbommel', 'banden Gorinchem',
    // Algemeen
    'Probandenservice', 'spoedservice banden 24/7', 'bandenspecialist Utrecht provincie',
    'tijdelijke band ter plekke', 'spoedband montage',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: site.name,
    url: site.url,
    title: `${site.name} — Banden, uitlijnen & 24/7 spoedservice`,
    description:
      '24/7 spoedservice voor banden. 3D uitlijnen, airco, montage. Eerlijke prijs, servicegarantie op al ons werk.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Banden, uitlijnen & 24/7 spoedservice`,
    description:
      '24/7 spoedservice voor banden. 3D uitlijnen, airco, montage. Eerlijke prijs, servicegarantie op al ons werk.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

// ── LocalBusiness JSON-LD voor Google ──────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: site.phone.tel,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: site.address.postal,
    addressLocality: site.address.city,
    addressCountry: 'NL',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  areaServed: site.serviceAreaCities.map(city => ({
    '@type': 'City',
    name: city,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${bebas.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TopBar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
