import Image from 'next/image';
import type { Metadata } from 'next';
import { Wind, CheckCircle, Clock, ThermometerSun, Wrench, Shield } from 'lucide-react';
import { Button } from '@/components/Button';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../lp.module.css';

export const metadata: Metadata = {
  title: 'Airco Bijvullen & Repareren Culemborg | €59 | Probandenservice',
  description:
    'Airco werkt niet meer? Wij vullen bij en controleren op lekkage. R134a & R1234yf. Inclusief lecktestcontrole en filtercheck. Klaar in 1 uur. €59.',
  alternates: { canonical: '/lp/airco' },
  openGraph: {
    title: 'Airco Service Culemborg | €59 | Probandenservice',
    description: 'Airco bijvullen R134a & R1234yf. Lektest inbegrepen. 1 uur. €59.',
    locale: 'nl_NL',
  },
};

const benefits = [
  {
    icon: <Wind size={32} />,
    title: 'R134A & R1234YF',
    text: 'Wij werken met beide gangbare koudemiddelen. Nieuwere auto\'s met R1234yf? Geen probleem — wij hebben het in huis.',
  },
  {
    icon: <ThermometerSun size={32} />,
    title: 'LEKTEST INBEGREPEN',
    text: 'Niet alleen bijvullen, maar ook controleren of er een lekkage is. Zo weet u zeker dat uw airco daarna ook blijft werken.',
  },
  {
    icon: <Clock size={32} />,
    title: 'KLAAR IN 1 UUR',
    text: 'Complete airco service in 60 minuten. U kunt wachten in onze wachtruimte met koffie.',
  },
  {
    icon: <Wrench size={32} />,
    title: 'FILTER VERNIEUWEN',
    text: 'Optioneel: pollenfilter en cabinefilter vervangen. Fijn voor mensen met allergie of hooikoorts.',
  },
  {
    icon: <Shield size={32} />,
    title: 'RDW ERKEND',
    text: 'Onze technicians zijn gecertificeerd voor aircosystemen. Veilig, vakkundig, conform wetgeving.',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'ALLE MERKEN',
    text: 'Volkswagen, BMW, Mercedes, Peugeot, Toyota — wij werken aan airco van alle automerken en modellen.',
  },
];

const steps = [
  {
    n: '01',
    t: 'Aansluit & diagnose',
    d: 'Onze technician sluit de diagnosemachine aan op uw airco systeem. Binnen 5 minuten weten we wat er speelt.',
  },
  {
    n: '02',
    t: 'Bijvullen & lektest',
    d: 'Het koudemiddel wordt afgetapt, gecontroleerd en aangevuld tot de juiste hoeveelheid. Daarna volgt de lektest.',
  },
  {
    n: '03',
    t: 'Ijskoud & klaar',
    d: 'Na de service koelt uw airco weer optimaal. U rijdt weg met een frisse, koele auto — ook op warme dagen.',
  },
];

const reviews = [
  {
    name: 'Karin Janssen',
    role: 'Culemborg · 3 weken geleden',
    text: '"Mijn airco blies alleen maar warme lucht. Hier snel en vakkundig bijgevuld. Lektest inbegrepen. Prijs was netjes. Airco werkt nu perfect."',
    stars: 5,
  },
  {
    name: 'Marco Pietersen',
    role: 'Schiedam · 2 maanden geleden',
    text: '"Wist niet eens dat mijn auto R1234yf had. Hier hadden ze het gewoon in huis. In een uurtje klaar. Super service."',
    stars: 5,
  },
  {
    name: 'Aisha B.',
    role: 'Culemborg · 5 maanden geleden',
    text: '"Airco had een kleine lekkage. Eerlijk verteld en direct gerepareerd. Geen gedoe, goede prijs, vriendelijk personeel."',
    stars: 5,
  },
];

export default function AircoPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={s.hero} style={{ minHeight: '680px' }}>
        <div className={s.heroImgWrap}>
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
            alt="Auto airco service bij Probandenservice Culemborg"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
          />
          <div className={s.heroOverlay} />
        </div>

        <div className={s.heroContent}>
          <div className={s.trustBar}>
            <span className={s.trustItem}>✓ Servicegarantie</span>
            <span className={s.trustItem}>✓ F-Gassen Gecertificeerd</span>
            <span className={s.trustItem}><span className={s.trustStar}>★</span> 4.8 Google</span>
            <span className={s.trustItem}>✓ R134a & R1234yf</span>
          </div>

          <div className={s.priceTag}>AIRCO SERVICE €59</div>

          <h1 className={s.heroH1}>
            AIRCO WERKT<br />NIET MEER?<br />
            <span className={s.heroH1Red}>IN 1 UUR OPGELOST.</span>
          </h1>

          <p className={s.heroTagline}>
            Airco bijvullen, lektest, filtercheck — alles in één bezoek. R134a én R1234yf in huis.
            Vaste prijs, geen verassingen. In een uur koud en klaar.
          </p>

          <div className={s.heroCtas}>
            <Button href="tel:+31642513692">BEL NU: 06 — 42 51 36 92</Button>
            <Button href="/contact" variant="ghost">Plan afspraak →</Button>
          </div>

          <div className={s.statRow}>
            <div className={s.stat}>
              <div className={s.statN}>€59</div>
              <div className={s.statL}>complete airco service</div>
            </div>
            <div className={s.stat}>
              <div className={s.statN}>60</div>
              <div className={s.statL}>minuten klaar</div>
            </div>
            <div className={s.stat}>
              <div className={s.statN}>2</div>
              <div className={s.statL}>koudemiddelen beschikbaar</div>
            </div>
          </div>
        </div>
      </section>

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
              <span className={s.eyebrow}>AIRCO SERVICE</span>
              <h2 className={s.sectionH2}>WAAROM UW AIRCO<br />NIET MEER KOELT.</h2>
              <p className={s.sectionIntro}>
                Een airco verliest elk jaar tot 15% koudemiddel. Na drie tot vier jaar is de airco
                zo leeg dat hij het nauwelijks meer voelt. Bijvullen is de oplossing.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>KOUDEMIDDEL BIJVULLEN</h3>
              <p className={s.detailsBlockP}>
                Wij tappen het oude koudemiddel af en vullen bij tot de exacte hoeveelheid die de
                fabrikant voorschrijft. Niet meer, niet minder. Duurt 30 minuten. U kunt wachten.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>LEKTEST — ALTIJD INBEGREPEN</h3>
              <p className={s.detailsBlockP}>
                Bijvullen zonder lektest is weggegooid geld. Als er ergens gas weglekt, is het er
                over een jaar weer uit. Wij controleren het hele systeem op microlekkages. Kleine
                lekken dichten wij direct. Bij een groter probleem krijgt u een eerlijke offerte — geen verrassingen.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>CABINE- & POLLENFILTER</h3>
              <p className={s.detailsBlockP}>
                Een verstopt cabinefilter geeft minder luchtstroom en verspreidt stof en schimmelsporen
                door uw auto. Niet fijn, zeker niet als u hooikoorts heeft. Optioneel vervangen wij
                het filter tijdens uw bezoek. Snel gedaan, voordelig geprijsd.
              </p>
            </div>
          </div>

          <div className={s.detailImgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85"
              alt="Aircotechnicus aan het werk"
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
              <span className={s.eyebrow}>PRIJS</span>
              <h2 className={s.sectionH2}>€59 COMPLETE<br />AIRCO SERVICE.</h2>
              <p className={s.sectionIntro}>
                Inclusief koudemiddel bijvullen, lektest en check van compressor en slangen. Geen
                verborgen kosten. Extra filter vervanging is optioneel en transparant geprijsd.
              </p>
            </div>
            <div className={s.heroCtas}>
              <Button href="tel:+31642513692">BEL VOOR AFSPRAAK</Button>
              <Button href="/contact" variant="outline">Boek online →</Button>
            </div>
          </div>

          <div className={s.priceCard}>
            <div className={s.priceCardLabel}>COMPLETE AIRCO SERVICE</div>
            <div>
              <div className={s.priceAmount}>€59</div>
              <div className={s.priceUnit}>incl. btw — vaste prijs</div>
            </div>
            <ul className={s.includes}>
              {[
                'Koudemiddel R134a of R1234yf bijvullen',
                'Lektest op het complete systeem',
                'Compressor & slangen check',
                'Capaciteitstest airco',
                'Advies over cabinefilter',
                'Klaar in 60 minuten',
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
            <h2 className={s.sectionH2}>VAN WARM<br />NAAR IJSKOUD.</h2>
            <p className={s.sectionIntro}>
              In drie stappen werkt uw airco weer als nieuw. Geen gedoe, vaste prijs.
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
              <span className={s.eyebrow}>ERVARINGEN</span>
              <h2 className={s.sectionH2}>ZE REDEN WEG<br />MET FRISSE LUCHT.</h2>
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
            <span className={s.eyebrow}>VRAGEN OVER AIRCO</span>
            <h2 className={s.sectionH2}>ALLES WAT U<br />WILT WETEN.</h2>
          </div>
          <div className={s.faqList}>
            {[
              {
                q: 'Hoe weet ik welk koudemiddel mijn auto heeft?',
                a: 'Kijk onder de motorkap, vlakbij de compressor — daar zit een sticker met R134a of R1234yf. Geen zin om te zoeken? Stuur uw kenteken via WhatsApp of bel ons. Wij zoeken het op.',
              },
              {
                q: 'Moet ik een afspraak maken voor airco service?',
                a: 'Liefst wel, zeker als u R1234yf heeft — dan reserveren wij de apparatuur voor u. Bel of mail even. Zonder afspraak kunt u ook langskomen, maar dan kan het wachten worden.',
              },
              {
                q: 'Hoe vaak moet ik airco laten bijvullen?',
                a: 'Elke twee à drie jaar is een goede richtlijn. Een airco verliest elk jaar zo\'n 10 tot 15% koudemiddel, gewoon door diffusie. Merkt u dat het minder koud wordt? Wacht dan niet te lang. Een lege compressor draait droog en slijt snel.',
              },
              {
                q: 'Mijn auto stinkt als ik de airco aanzet — wat nu?',
                a: 'Schimmel en bacteriën op de verdamper. Dat is de oorzaak. Bijvullen helpt daar niet bij. Wij voeren een airco-reiniging of ozonbehandeling uit. Bel ons — wij vertellen wat het kost en wat het beste werkt voor uw auto.',
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
            <h2 className={s.finalCtaH2}>KLAAR VOOR<br />IJSKOUDE AIRCO?</h2>
            <p className={s.finalCtaP}>
              Bel of stuur een berichtje. In een uur rijdt u weg met een airco die weer doet wat
              hij moet doen. Geen gedoe, vaste prijs.
            </p>
            <div className={s.finalCtaCtas}>
              <Button href="tel:+31642513692">BEL: 06 — 42 51 36 92</Button>
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

      <EmergencyBand
        heading={<>PECH ONDERWEG?<br />WIJ RIJDEN UIT.</>}
        subline="Lekke band, airco plots kapot onderweg? Bel onze spoedlijn. Wij staan binnen 45 minuten naast u."
      />
    </>
  );
}
