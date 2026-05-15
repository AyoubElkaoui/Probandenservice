import Image from 'next/image';
import type { Metadata } from 'next';
import { ShoppingCart, CheckCircle, Clock, Star, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/Button';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../lp.module.css';

export const metadata: Metadata = {
  title: 'Nieuwe Banden Kopen Culemborg | Klaar in 1 Uur | Probandenservice',
  description:
    'Alle topmerken in stock: Michelin, Continental, Pirelli en meer. Eerlijk advies, scherpe prijs. Vandaag nog montage. Vanaf €49 per band. Bel 06 — 42 51 36 92.',
  alternates: { canonical: '/lp/banden-kopen' },
  openGraph: {
    title: 'Nieuwe Banden Kopen | Probandenservice Culemborg',
    description: 'Alle merken & maten op voorraad. Vakkundig gemonteerd terwijl u wacht. Vanaf €49 per band.',
    locale: 'nl_NL',
  },
};

const benefits = [
  {
    icon: <ShoppingCart size={32} />,
    title: '6.000+ BANDEN OP VOORRAAD',
    text: 'Alle gangbare maten direct beschikbaar. Van compactklasse tot SUV en bestelwagen.',
  },
  {
    icon: <Star size={32} />,
    title: 'ALLE TOPMERKEN',
    text: 'Michelin, Continental, Pirelli, Bridgestone, Goodyear — én scherp geprijsde kwalitatieve alternatieven.',
  },
  {
    icon: <Clock size={32} />,
    title: 'KLAAR IN 1 UUR',
    text: 'Advies, keuze, montage én balanceren. Alles in één bezoek. Terwijl u wacht of koffiedrinkt.',
  },
  {
    icon: <Shield size={32} />,
    title: 'SERVICEGARANTIE',
    text: 'Gecertificeerde monteurs, touchless machines, TPMS reset. Krasvrij gegarandeerd.',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'EERLIJK ADVIES',
    text: 'Wij adviseren wat ú nodig heeft — niet wat de meeste marge oplevert. Profielcheck gratis.',
  },
  {
    icon: <Truck size={32} />,
    title: 'GRATIS AFVOER',
    text: 'Uw oude banden worden milieuvriendelijk afgevoerd. Geen extra kosten, geen gedoe.',
  },
];

const steps = [
  {
    n: '01',
    t: 'Bel of boek online',
    d: 'Geef uw bandenmaat door (staat op uw huidige banden: b.v. 205/55R16). Wij zoeken het beste aanbod voor u uit.',
  },
  {
    n: '02',
    t: 'Banden klaargelegd bij aankomst',
    d: 'Als u arriveert liggen uw banden al klaar. Onze monteur begint direct — geen wachtrij.',
  },
  {
    n: '03',
    t: 'Gemonteerd, gebalanceerd, klaar',
    d: 'Alle vier wielen gemonteerd, gebalanceerd en TPMS gereset. U rijdt weg op nieuwe banden.',
  },
];

const reviews = [
  {
    name: 'Thomas van der Berg',
    role: 'Culemborg · 1 maand geleden',
    text: '"Vier Michelin\'s op mijn Volvo. Goed advies gekregen over het juiste type. In minder dan een uur klaar en de prijs klopte precies met de offerte."',
    stars: 5,
  },
  {
    name: 'Ingrid Smits',
    role: 'Barendrecht · 3 maanden geleden',
    text: '"Had online al goedkopere banden gevonden, maar hier kregen we beter advies én betere service. Uiteindelijk ook voordeliger uitgevallen."',
    stars: 5,
  },
  {
    name: 'Davit M.',
    role: 'Spijkenisse · 6 weken geleden',
    text: '"Snel geholpen, nette montage. Ze controleerden ook mijn remmen en zeiden eerlijk dat die nog prima waren. Dat waardeer ik enorm."',
    stars: 5,
  },
];

export default function BandenKopenPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={s.hero} style={{ minHeight: '680px' }}>
        <div className={s.heroImgWrap}>
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85"
            alt="Nieuwe banden in het rek bij Probandenservice Culemborg"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className={s.heroOverlay} />
        </div>

        <div className={s.heroContent}>
          {/* Trust bar */}
          <div className={s.trustBar}>
            <span className={s.trustItem}>✓ Servicegarantie</span>
            <span className={s.trustItem}>✓ Deskundige technici</span>
            <span className={s.trustItem}><span className={s.trustStar}>★</span> 4.8 Google</span>
            <span className={s.trustItem}>✓ 24/7 bereikbaar</span>
          </div>

          {/* Price tag */}
          <div className={s.priceTag}>VANAF €49 PER BAND</div>

          {/* H1 */}
          <h1 className={s.heroH1}>
            NIEUWE BANDEN<br />NODIG?<br />
            <span className={s.heroH1Red}>KLAAR IN 1 UUR.</span>
          </h1>

          <p className={s.heroTagline}>
            Zeg ons uw maat. Wij zoeken het juiste merk voor uw rijstijl en budget.
            Michelin, Continental, Pirelli — of een solide middenklasser.
            Zonder verkooppraatjes, zonder wachttijd.
          </p>

          <div className={s.heroCtas}>
            <Button href="tel:+31642513692">BEL NU: 06 — 42 51 36 92</Button>
            <Button href="/contact" variant="ghost">Plan afspraak →</Button>
          </div>

          <div className={s.statRow}>
            <div className={s.stat}>
              <div className={s.statN}>6.000+</div>
              <div className={s.statL}>banden op voorraad</div>
            </div>
            <div className={s.stat}>
              <div className={s.statN}>10+</div>
              <div className={s.statL}>topmerken</div>
            </div>
            <div className={s.stat}>
              <div className={s.statN}>24/7</div>
              <div className={s.statL}>bereikbaar voor spoed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ROW ───────────────────────────────────────── */}
      <div className={s.brands}>
        <div className={s.brandsInner}>
          <span className={s.brandsLabel}>Merken in stock:</span>
          {['Michelin', 'Continental', 'Pirelli', 'Bridgestone', 'Goodyear', 'Dunlop', 'Hankook', 'Nokian', 'Vredestein', 'Falken'].map(b => (
            <span key={b} className={s.brandPill}>{b}</span>
          ))}
        </div>
      </div>

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <div className={s.benefits}>
        <div className={s.benefitsInner}>
          <div className={`${s.benefitsGrid} ${s.benefitsGrid4}`} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {benefits.map((b) => (
              <div key={b.title} className={s.benefit}>
                <div className={s.benefitIcon}>{b.icon}</div>
                <h3 className={s.benefitTitle}>{b.title}</h3>
                <p className={s.benefitText}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DETAILS ──────────────────────────────────────────── */}
      <div className={s.section}>
        <div className={s.detailsGrid}>
          <div className={s.detailsCopy}>
            <div>
              <span className={s.eyebrow}>WAAROM PROBANDENSERVICE</span>
              <h2 className={s.sectionH2}>HET JUISTE BAND.<br />VOOR UW AUTO.</h2>
              <p className={s.sectionIntro}>
                Geef ons uw kenteken of bandenmaat. Wij kijken wat er op voorraad is en welk merk
                bij uw rijstijl past. Tien minuten later rijdt u weg op de juiste banden.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>6.000 BANDEN OP VOORRAAD</h3>
              <p className={s.detailsBlockP}>
                Michelin, Continental, Pirelli, Bridgestone — maar ook Falken en Hankook als u
                budget wil besparen zonder kwaliteit in te leveren. Alle gangbare maten direct
                beschikbaar. Wachten op een bestelling is hier niet nodig.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>EERLIJK ADVIES, PUNT UIT</h3>
              <p className={s.detailsBlockP}>
                Als uw banden er nog goed uitzien, zeggen we dat. Als er iets mis is, leggen we
                uit wat er aan de hand is — in gewone taal, zonder gedoe. We rekenen niets voor
                advies. Dat is gewoon hoe wij werken.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>KOPEN EN METEEN MONTEREN</h3>
              <p className={s.detailsBlockP}>
                U hoeft niet twee keer te komen. Banden uitzoeken, beslissen, monteren en
                balanceren — dat doen wij in één bezoek van gemiddeld 45 minuten. Touchless
                machines, dus geen krasje op uw velgen.
              </p>
            </div>

            <div className={s.featureBox}>
              <h4 className={s.featureBoxTitle}>WAT IS INBEGREPEN?</h4>
              <ul className={s.featureBoxList}>
                <li className={s.featureBoxItem}>Profielcheck & bandadvies</li>
                <li className={s.featureBoxItem}>Krasvrije touchless montage</li>
                <li className={s.featureBoxItem}>Balancering op alle vier wielen</li>
                <li className={s.featureBoxItem}>TPMS reset (indien van toepassing)</li>
                <li className={s.featureBoxItem}>Milieuvriendelijke afvoer oude banden</li>
                <li className={s.featureBoxItem}>Rijdveiligheidscheck na montage</li>
              </ul>
            </div>
          </div>

          <div className={s.detailImgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
              alt="Professionele bandenmontage bij Probandenservice"
              fill
              sizes="(max-width: 1100px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={s.detailImgOverlay} />
          </div>
        </div>
      </div>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <div className={s.pricing}>
        <div className={s.pricingInner}>
          <div className={s.pricingCopy}>
            <div>
              <span className={s.eyebrow}>PRIJZEN</span>
              <h2 className={s.sectionH2}>EERLIJKE PRIJZEN.<br />GEEN VERRASSINGEN.</h2>
              <p className={s.sectionIntro}>
                Vaste montageprijs, inclusief balancering. De prijs van de band hangt af van het
                merk en de maat — maar u weet altijd precies wat u betaalt vóór wij beginnen.
              </p>
            </div>
            <div className={s.heroCtas}>
              <Button href="tel:+31642513692">BEL VOOR OFFERTE</Button>
              <Button href="/contact" variant="outline">Vraag offerte aan →</Button>
            </div>
          </div>

          <div className={s.priceCard}>
            <div className={s.priceCardLabel}>PRIJS INCLUSIEF MONTAGE</div>
            <div>
              <div className={s.priceAmount}><span style={{ fontSize: '0.5em', verticalAlign: 'top', paddingTop: '0.3em', display: 'inline-block' }}>v.a.</span> €49</div>
              <div className={s.priceUnit}>per band, incl. btw</div>
            </div>
            <ul className={s.includes}>
              {[
                'Krasvrije touchless montage',
                'Balancering inbegrepen',
                'TPMS reset inbegrepen',
                'Profielcheck & veiligheidscheck',
                'Afvoer oude banden gratis',
                'Geen verborgen kosten',
              ].map(item => (
                <li key={item} className={s.includesItem}>
                  <CheckCircle size={16} className={s.includesCheck} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── HOE HET WERKT ────────────────────────────────────── */}
      <div className={s.process}>
        <div className={s.processGrid}>
          <div>
            <span className={s.eyebrow}>HOE HET WERKT</span>
            <h2 className={s.sectionH2}>DRIE STAPPEN.<br />KLAAR.</h2>
            <p className={s.sectionIntro}>
              Van telefoontje tot nieuwe banden onder uw auto — binnen één uur geregeld.
            </p>
          </div>
          <ProcessSteps steps={steps} />
        </div>
      </div>

      {/* ── REVIEWS ──────────────────────────────────────────── */}
      <div className={s.reviewsSection}>
        <div className={s.reviewsSectionInner}>
          <div className={s.reviewsHead}>
            <div>
              <span className={s.eyebrow}>KLANTEN OVER ONS</span>
              <h2 className={s.sectionH2}>1.247 KLANTEN.<br />4.8 GEMIDDELD.</h2>
            </div>
            <div className={s.bigStars}>
              <div className={s.starLine}>★★★★★</div>
              <div className={s.starSub}>GOOGLE · 4.8 / 5.0</div>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </div>
      </div>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <div className={s.faq}>
        <div className={s.faqGrid}>
          <div>
            <span className={s.eyebrow}>VEELGESTELDE VRAGEN</span>
            <h2 className={s.sectionH2}>UW VRAGEN.<br />BEANTWOORD.</h2>
          </div>
          <div className={s.faqList}>
            {[
              {
                q: 'Hoe weet ik welke bandenmaat ik nodig heb?',
                a: 'De bandenmaat staat op de zijkant van uw huidige banden, b.v. "205/55 R16 91V". U vindt het ook in uw kentekenboekje of op de stickerlijst in de deurpost. Geef het gewoon door als u belt — wij zoeken het ook voor u op als u het niet weet.',
              },
              {
                q: 'Kan ik ook slechts 2 nieuwe banden laten monteren?',
                a: 'Dat kan. Wij adviseren wel altijd om as-gewijs te werken: beide banden van dezelfde as tegelijk vervangen voor optimale stabiliteit. Wij kijken ook of de andere banden nog veilig zijn en geven eerlijk advies.',
              },
              {
                q: 'Hoe lang duurt het monteren van 4 nieuwe banden?',
                a: 'Normaal gesproken bent u binnen 45 tot 60 minuten klaar. Dit is inclusief montage, balancering en TPMS reset. Er is een wachtruimte met koffie.',
              },
              {
                q: 'Voeren jullie ook seizoensbanden en winterbanden?',
                a: 'Ja, wij voeren zomer-, winter- en all-season banden van alle topmerken. Winterbanden adviseren we sterk als u regelmatig rijdt bij temperaturen onder de 7°C.',
              },
            ].map((faq) => (
              <details key={faq.q} className={s.faqItem}>
                <summary>{faq.q}</summary>
                <p className={s.faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <div className={s.finalCta}>
        <div className={s.finalCtaInner}>
          <div>
            <h2 className={s.finalCtaH2}>KLAAR VOOR<br />NIEUWE BANDEN?</h2>
            <p className={s.finalCtaP}>
              Bel ons of maak een afspraak. Wij hebben de banden op voorraad en de monteur staat klaar.
              Vandaag nog veilig op de weg.
            </p>
            <div className={s.finalCtaCtas}>
              <Button href="tel:+31642513692">BEL NU: 06 — 42 51 36 92</Button>
              <Button href="/contact" variant="ghost">Plan afspraak →</Button>
            </div>
          </div>
          <address className={s.finalCtaAddress} style={{ fontStyle: 'normal' }}>
            <strong>PROBANDENSERVICE</strong><br />
            Bellweg 40<br />
            4104 BJ Culemborg<br />
            <br />
            Ma — Vr · 08:00 — 18:00<br />
            Za · 09:00 — 14:00
          </address>
        </div>
      </div>

      {/* ── EMERGENCY BAND ───────────────────────────────────── */}
      <EmergencyBand
        heading={<>LEKKE BAND?<br />WIJ STAAN ER IN 45 MIN.</>}
        subline="Pech onderweg? Onze 24/7 spoedwagen staat binnen 45 minuten naast u. Culemborg en omgeving, dag en nacht. Vaste prijs vooraf."
      />
    </>
  );
}
