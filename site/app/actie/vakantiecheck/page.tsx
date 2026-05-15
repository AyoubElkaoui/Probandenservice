import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, FileText, AlertTriangle } from 'lucide-react';
import { site } from '@/lib/site';
import { Button } from '@/components/Button';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../actie.module.css';

export const metadata: Metadata = {
  title: 'Vakantiecheck — Rijklaar voor uw vakantie | Probandenservice Culemborg',
  description:
    'Elk jaar stranden er auto\'s met versleten banden of lege airco. Tien minuten bij ons en u rijdt met een gerust gevoel. Eerlijk rapport, geen verrassingen.',
  alternates: { canonical: '/actie/vakantiecheck' },
  openGraph: {
    title: 'Vakantie begint hier. Rijklaar in één bezoek.',
    description:
      'Banden, uitlijning, airco, lichten — wij checken het en geven u een eerlijk rapport. Geen onnodige reparaties, wel duidelijkheid voor de reis.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85',
    ],
  },
};

const checkItems = [
  {
    icon: <CheckCircle size={20} />,
    title: 'Bandenprofiel — alle 4',
    text: 'Elk band gemeten op profieldiepte. Wij geven eerlijk advies. Als het goed zit, zeggen we dat.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Bandenspanning + reservewiel',
    text: 'Spanning gecheckt en bijgeregeld. Inclusief het reservewiel achter in de kofferbak.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Uitlijning — meting',
    text: 'Wij meten de uitlijning. Zit hij scheef, dan horen we dat liever hier dan ergens op de snelweg.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Airco koelcapaciteit',
    text: 'Koelt hij nog goed? Wij testen de output. Als hij bijna leeg is, vullen we bij — apart geprijsd, altijd eerlijk.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Lichten en remsysteem',
    text: 'Visuele controle van remlichten, koplampen en remblokken. Snel, maar grondig.',
  },
  {
    icon: <FileText size={20} />,
    title: 'Digitaal rapport',
    text: 'Alles vastgelegd. U vertrekt met een overzicht van wat er gecheckt is en wat eventueel aandacht verdient.',
  },
];

const reviews = [
  {
    name: 'Sandra Vermeer',
    role: 'Culemborg · 2 maanden geleden',
    text: '"Bleek dat één band bijna op de grens zat. Hadden we zelf nooit gezien. Nieuwe band gemonteerd, rapport gekregen. Zijn de vakantie ingereden zonder zorgen."',
    stars: 5,
  },
  {
    name: 'Jeroen de Groot',
    role: 'Dordrecht · 1 maand geleden',
    text: '"Ze vonden een scheve uitlijning die ik niet wist. Direct gecorrigeerd. Het rapport was concreet — wist precies wat er was en wat het kostte."',
    stars: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Barendrecht · 3 weken geleden',
    text: '"Snel en professioneel. Airco was bijna leeg, ook gelijk gevuld. Ze legden alles uit zonder me te overweldigen met technische details. Aanrader."',
    stars: 5,
  },
];

export default function VakantieCheckPage() {
  return (
    <>
      {/* ── SPLIT HERO ────────────────────────────────────── */}
      <section className={s.heroSplit}>
        <div className={s.heroSplitCopy}>
          <div className={s.serviceTag}>Vakantiecheck</div>

          <h1 className={s.heroH1}>
            VAKANTIE<br />
            BEGINT<br />
            <span className={s.heroH1Accent}>HIER.</span>
          </h1>

          <p className={s.heroLede}>
            Elk jaar stranden er auto&rsquo;s met versleten banden, lege airco of gekke
            uitlijning. Tien minuten bij ons en u rijdt met een gerust gevoel.
          </p>

          <div className={s.heroCtaRow}>
            <Button href="/contact">PLAN EEN CHECK</Button>
            <Button href={`tel:${site.phone.tel}`} variant="ghost">
              BEL {site.phone.display}
            </Button>
          </div>
        </div>

        <div className={s.heroSplitImg}>
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85"
            alt="Monteur voert vakantiecheck uit — bandencontrole voor de lange rit"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
        </div>
      </section>

      {/* ── WHAT WE CHECK ─────────────────────────────────── */}
      <section className={s.sectionAlt}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>WAT WE CHECKEN</p>
          <h2 className={s.sectionH2}>
            ALLES WAT<br />ER TOE DOET.
          </h2>

          <ul className={s.checkList}>
            {checkItems.map((item, i) => (
              <li key={i} className={s.checkItem}>
                <span className={s.checkIcon}>{item.icon}</span>
                <div>
                  <p className={s.checkItemTitle}>{item.title}</p>
                  <p className={s.checkItemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── HONEST REPORT ─────────────────────────────────── */}
      <section className={s.section}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>EERLIJK RAPPORT</p>
          <h2 className={s.sectionH2}>
            GEEN VERRASSINGEN.<br />ALLEEN FEITEN.
          </h2>

          <div className={s.infoGrid}>
            <div className={s.infoBlock}>
              <span className={s.infoBlockLabel}>Wat u meekrijgt</span>
              <h3 className={s.infoBlockTitle}>DIGITAAL OVERZICHT</h3>
              <p className={s.infoBlockText}>
                Na de check krijgt u een digitaal rapport. Daarin staat wat we gemeten hebben,
                wat goed zit en wat eventueel aandacht verdient. Niets vaags, geen verkooppraatje.
              </p>
            </div>
            <div className={s.infoBlock}>
              <span className={s.infoBlockLabel}>Ons uitgangspunt</span>
              <h3 className={s.infoBlockTitle}>EERLIJK OVER STAAT</h3>
              <p className={s.infoBlockText}>
                Als uw band er goed uitziet, zeggen we dat. Komen we iets tegen, dan horen we
                dat liever hier dan op de A2 bij Parijs. U beslist altijd zelf wat u doet met
                het advies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────── */}
      <section className={s.quoteSection}>
        <div className={s.quoteBlock}>
          <p className={s.quoteText}>
            Als uw band er goed uit ziet, zeggen we dat. Komen we iets tegen,
            dan horen we dat liever hier dan op de A2 bij Parijs.
          </p>
          <span className={s.quoteAttr}>Probandenservice Culemborg — Culemborg</span>
        </div>
      </section>

      {/* ── WHY IT MATTERS ────────────────────────────────── */}
      <section className={s.sectionDark}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>WAAROM HET ERTOE DOET</p>
          <h2 className={s.sectionH2}>
            PECH OP DE<br />SNELWEG KOST<br />U MEER.
          </h2>

          <div className={s.highlightGrid}>
            <div className={s.highlightItem}>
              <div className={s.highlightIcon}><AlertTriangle size={24} /></div>
              <h3 className={s.highlightTitle}>1 op de 5 pechmeldingen door banden</h3>
              <p className={s.highlightText}>
                Versleten of te lage spanning zijn de meest voorkomende oorzaak van pech
                onderweg. En het is het gemakkelijkst te voorkomen.
              </p>
            </div>
            <div className={s.highlightItem}>
              <div className={s.highlightIcon}><AlertTriangle size={24} /></div>
              <h3 className={s.highlightTitle}>Scheef uitlijnen vreet aan uw banden</h3>
              <p className={s.highlightText}>
                2 mm afwijking is genoeg om banden 30–40% sneller te laten slijten.
                Het voelt amper in het stuur — totdat het te laat is.
              </p>
            </div>
            <div className={s.highlightItem}>
              <div className={s.highlightIcon}><AlertTriangle size={24} /></div>
              <h3 className={s.highlightTitle}>Airco werkt harder in de zomer</h3>
              <p className={s.highlightText}>
                Bij 35°C staat het systeem op maximale druk. Een kleine lekkage die u
                niet merkte in april, voelt u in augustus voortdurend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAR ───────────────────────────────────────── */}
      <div className={s.ctaBar}>
        <div className={s.ctaBarInner}>
          <div className={s.ctaBarText}>
            <h2 className={s.ctaBarH2}>
              PLAN UW CHECK.<br />GA GERUST WEG.
            </h2>
            <p className={s.ctaBarSub}>
              Bellweg 40, Culemborg. Bel of boek online.
            </p>
          </div>
          <div className={s.ctaBarActions}>
            <a href={`tel:${site.phone.tel}`} className={s.ctaBarPhone}>
              {site.phone.display}
            </a>
            <span className={s.ctaBarNote}>{site.hours.weekdays} · {site.hours.saturday}</span>
          </div>
        </div>
      </div>

      {/* ── REVIEWS ───────────────────────────────────────── */}
      <section className={s.reviewsSection}>
        <div className={s.container}>
          <div className={s.reviewsHead}>
            <div>
              <p className={s.sectionEyebrow}>REIZIGERS OVER ONS</p>
              <h2 className={s.sectionH2}>
                GEREDEN.<br />TERUGGEKOMEN.
              </h2>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </div>
      </section>

      {/* ── TRUST ─────────────────────────────────────────── */}
      <div className={s.trustStrip}>
        <div className={s.trustStripInner}>
          <div className={s.trustBadge}>
            <span className={s.trustBadgeNumRed}>4.8 ★</span>
            <span className={s.trustBadgeLabel}>Google sterren</span>
          </div>
          <div className={s.trustBadge}>
            <span className={s.trustBadgeNum}>24/7</span>
            <span className={s.trustBadgeLabel}>Bereikbaar voor spoed</span>
          </div>
          <div className={s.trustBadge}>
            <span className={s.trustBadgeNum}>Deskundig</span>
            <span className={s.trustBadgeLabel}>Vakkundige technici</span>
          </div>
          <div className={s.trustBadge}>
            <span className={s.trustBadgeNum}>RDW</span>
            <span className={s.trustBadgeLabel}>Erkend bedrijf</span>
          </div>
        </div>
      </div>

      {/* ── LP LINK ───────────────────────────────────────── */}
      <section className={s.lpLink}>
        <div className={s.container}>
          <p className={s.lpLinkText}>Wil je meer weten over onze diensten?</p>
          <div className={s.lpLinkBtns}>
            <Button href="/diensten">Bekijk alle diensten →</Button>
            <Button href="/contact" variant="ghost">Direct een afspraak</Button>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY ─────────────────────────────────────── */}
      <EmergencyBand />
    </>
  );
}
