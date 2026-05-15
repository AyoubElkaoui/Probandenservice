import Image from 'next/image';
import type { Metadata } from 'next';
import { Target, CheckCircle, Clock, BarChart3, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/Button';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../lp.module.css';

export const metadata: Metadata = {
  title: '3D Uitlijnen Culemborg | Hunter Hawkeye Elite | €69 | Probandenservice',
  description:
    'Professionele 3D wieluitlijning met Hunter Hawkeye Elite machine. Minder bandenlijtage, lager brandstofverbruik. Klaar in 45 minuten, rapport inbegrepen. €69.',
  alternates: { canonical: '/lp/uitlijnen' },
  openGraph: {
    title: '3D Wieluitlijnen Culemborg | Probandenservice',
    description: 'Hunter Hawkeye Elite machine, meetrapport inbegrepen. 45 minuten. €69 — direct boeken.',
    locale: 'nl_NL',
  },
};

const benefits = [
  {
    icon: <Target size={32} />,
    title: 'HUNTER HAWKEYE ELITE',
    text: 'Professionele 3D-camera meetmachine. Dezelfde apparatuur als merkdealers. Millimeternauwkeurig.',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'RAPPORT INBEGREPEN',
    text: 'U ontvangt een meetrapport voor én na de afstelling. Zwart op wit bewijs van het resultaat.',
  },
  {
    icon: <Clock size={32} />,
    title: '45 MINUTEN',
    text: 'Volledige 3D meting en correctie in 45 minuten. Geen afspraak weken vooruit — vandaag is vaak mogelijk.',
  },
  {
    icon: <Zap size={32} />,
    title: 'LAGER BRANDSTOFVERBRUIK',
    text: 'Verkeerde uitlijning kost u tot 5% meer brandstof. Na uitlijnen rijdt u zuiniger én veiliger.',
  },
  {
    icon: <Settings size={32} />,
    title: 'ALLE PARAMETERS',
    text: 'Toe-in, camber, caster en stuurhoekafwijking — alle vier hoekwaarden worden gemeten en gecorrigeerd.',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'ALLE VOERTUIGEN',
    text: 'Personenwagens, SUV\'s en busjes. Zowel voor- als achterwielen. Ook 4WD en sportwagens.',
  },
];

const steps = [
  {
    n: '01',
    t: 'Opname & diagnose',
    d: 'Uw auto rijdt de meetbrug op. Sensoren worden op alle vier wielen gemonteerd. De 3D-meting begint direct.',
  },
  {
    n: '02',
    t: 'Rapport bekijken',
    d: 'Wij tonen u live op het scherm waar de afwijkingen zitten. Geen vaktermen — gewoon duidelijk uitgelegd.',
  },
  {
    n: '03',
    t: 'Correctie & nacontrole',
    d: 'Na correctie volgt een tweede meting ter verificatie. U rijdt weg met een rapport en een perfect uitgelijnd stuur.',
  },
];

const reviews = [
  {
    name: 'René Wolters',
    role: 'Culemborg · 2 weken geleden',
    text: '"Na nieuw wegdek trok mijn auto naar rechts. Met het rapport zag ik precies wat er mis was. Na uitlijnen rijd ik weer kaarsrecht. Aanrader."',
    stars: 5,
  },
  {
    name: 'Fatima A.',
    role: 'Capelle a/d IJssel · 1 maand geleden',
    text: '"Mijn banden sleten scheef. Hier uitgelegd waarom, direct gecorrigeerd. Mijn banden gaan nu minstens 30% langer mee."',
    stars: 5,
  },
  {
    name: 'Johan de Bruin',
    role: 'Ridderkerk · 3 maanden geleden',
    text: '"Snel, professioneel en het rapport geeft vertrouwen. Brandstofverbruik ook al iets omlaag. Precies wat ik zocht."',
    stars: 5,
  },
];

export default function UitlijnenPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={s.hero} style={{ minHeight: '680px' }}>
        <div className={s.heroImgWrap}>
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=formatphoto-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600fit=cropphoto-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600w=1600&q=85"
            alt="3D wieluitlijning met Hunter Hawkeye Elite bij Probandenservice Culemborg"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div className={s.heroOverlay} />
        </div>

        <div className={s.heroContent}>
          <div className={s.trustBar}>
            <span className={s.trustItem}>✓ Servicegarantie</span>
            <span className={s.trustItem}>✓ Hunter Gecertificeerd</span>
            <span className={s.trustItem}><span className={s.trustStar}>★</span> 4.8 Google</span>
            <span className={s.trustItem}>✓ Rapport inbegrepen</span>
          </div>

          <div className={s.priceTag}>€69 — INCLUSIEF RAPPORT</div>

          <h1 className={s.heroH1}>
            3D UITLIJNEN.<br />MINDER SLIJTAGE.<br />
            <span className={s.heroH1Red}>LAGER VERBRUIK.</span>
          </h1>

          <p className={s.heroTagline}>
            De Hunter Hawkeye Elite meet elk wiel in drie dimensies. Tot op een tiende van een graad
            nauwkeurig — de standaard die autofabrikanten zelf gebruiken. Rapport inbegrepen. Klaar in 45 minuten.
          </p>

          <div className={s.heroCtas}>
            <Button href="tel:+31642513692">BEL NU: 06 — 42 51 36 92</Button>
            <Button href="/contact" variant="ghost">Plan afspraak →</Button>
          </div>

          <div className={s.statRow}>
            <div className={s.stat}>
              <div className={s.statN}>45</div>
              <div className={s.statL}>minuten klaar</div>
            </div>
            <div className={s.stat}>
              <div className={s.statN}>4</div>
              <div className={s.statL}>hoekwaarden gemeten</div>
            </div>
            <div className={s.stat}>
              <div className={s.statN}>€69</div>
              <div className={s.statL}>all-in prijs</div>
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
          <div className={s.detailImgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
              alt="Monteur bij wieluitlijning Probandenservice"
              fill
              sizes="(max-width: 1100px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={s.detailImgOverlay} />
          </div>

          <div className={s.detailsCopy}>
            <div>
              <span className={s.eyebrow}>WAAROM UITLIJNEN</span>
              <h2 className={s.sectionH2}>WAT VERKEERDE<br />UITLIJNING KOSt U.</h2>
              <p className={s.sectionIntro}>
                Rijdt uw auto naar één kant? Slijten uw banden ongelijkmatig? Dan staat uw uitlijning
                waarschijnlijk niet goed. Dat kost u geld — en is onveilig.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>ONGELIJKE BANDENSLIJTAGE</h3>
              <p className={s.detailsBlockP}>
                Één graad verkeerde camber is genoeg. De binnenkant van uw band slijt weg terwijl de
                buitenkant er nog goed uitziet. Een band die 40.000 km meegaat, haalt er nu nog maar
                25.000. U betaalt twee keer zo snel voor nieuwe banden.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>TOT 5% MEER BRANDSTOF</h3>
              <p className={s.detailsBlockP}>
                Banden die schuin staan, werken tegen u in. Meer rijweerstand, hogere motorlast,
                meer verbruik — bij elke rijkilometer. Bij 15.000 km per jaar loopt dat op tot een
                volledige tank extra. Voor €69 is dat snel terugverdiend.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>MINDER STUURNAUWKEURIGHEID</h3>
              <p className={s.detailsBlockP}>
                Verkeerde uitlijning voelt u direct: het stuur trekt bij het remmen, u moet bijsturen
                op de snelweg. Dat is vermoeiend — en gevaarlijk bij een nooduitwijkmanoeuvre. Na
                uitlijnen stuurt uw auto weer exact waar u het heen wijst.
              </p>
            </div>

            <div className={s.featureBox}>
              <h4 className={s.featureBoxTitle}>HUNTER HAWKEYE ELITE — WAT IS HET?</h4>
              <ul className={s.featureBoxList}>
                <li className={s.featureBoxItem}>Vier camera's meten alle wielen tegelijk in 3D</li>
                <li className={s.featureBoxItem}>Toe-in, camber, caster én stuurhoek — alles in één keer</li>
                <li className={s.featureBoxItem}>Vergelijkt automatisch met de fabrieksspecificatie van uw auto</li>
                <li className={s.featureBoxItem}>Meetrapport voor én na correctie — zwart op wit</li>
                <li className={s.featureBoxItem}>Dezelfde machine als bij BMW, Mercedes en Audi dealers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <div className={s.pricing}>
        <div className={s.pricingInner}>
          <div className={s.pricingCopy}>
            <div>
              <span className={s.eyebrow}>PRIJS</span>
              <h2 className={s.sectionH2}>ALLES INBEGREPEN.<br />GEEN VERRASSINGEN.</h2>
              <p className={s.sectionIntro}>
                Voor €69 krijgt u de complete 3D uitlijning: meting, correctie, verificatiemeting
                én een uitgeprint rapport. Geen extra kosten.
              </p>
            </div>
            <div className={s.heroCtas}>
              <Button href="tel:+31642513692">BEL VOOR AFSPRAAK</Button>
              <Button href="/contact" variant="outline">Boek online →</Button>
            </div>
          </div>

          <div className={s.priceCard}>
            <div className={s.priceCardLabel}>COMPLETE 3D UITLIJNING</div>
            <div>
              <div className={s.priceAmount}>€69</div>
              <div className={s.priceUnit}>incl. btw, incl. rapport</div>
            </div>
            <ul className={s.includes}>
              {[
                'Hunter Hawkeye Elite meting',
                'Alle vier hoekwaarden gecheckt',
                'Correctie van alle afwijkingen',
                'Verificatiemeting na correctie',
                'Uitgeprint meetrapport',
                'Klaar in 45 minuten',
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
            <h2 className={s.sectionH2}>VAN AANKOMST<br />TOT RAPPORT.</h2>
            <p className={s.sectionIntro}>
              Het hele proces duurt 45 minuten. U ziet live op het scherm wat er gemeten wordt.
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
              <span className={s.eyebrow}>KLANTEN AAN HET WOORD</span>
              <h2 className={s.sectionH2}>ZE REDEN WEG<br />EN KWAMEN TERUG.</h2>
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
            <span className={s.eyebrow}>VRAGEN</span>
            <h2 className={s.sectionH2}>ALLES WAT U<br />WILT WETEN.</h2>
          </div>
          <div className={s.faqList}>
            {[
              {
                q: 'Wanneer is uitlijnen nodig?',
                a: 'Na een harde klap op een kuil of stoeprand. Na vervanging van stuuronderdelen of veerpoten. Als uw banden scheef slijten of als uw auto naar één kant trekt. Preventief: één keer per jaar of na elke 20.000 km. Twijfelt u? Bel ons — wij kijken het kosteloos na.',
              },
              {
                q: 'Wat is het verschil tussen uitlijnen en balanceren?',
                a: 'Uitlijnen gaat over de hoek van uw wielen — staan ze recht ten opzichte van de weg en de rijrichting? Balanceren gaat over de gewichtsverdeling in het wiel zelf — zorgt een zwaar punt voor trillingen bij hoge snelheid? Beide zijn apart. Beide zijn nodig.',
              },
              {
                q: 'Moet ik een afspraak maken voor uitlijnen?',
                a: 'Een afspraak heeft de voorkeur — dan houden wij de meetbrug voor u vrij. Bel of mail ons. Dezelfde dag is vaak al mogelijk. Zonder afspraak kunt u ook langskomen, maar dan kan het even wachten zijn.',
              },
              {
                q: 'Doet uitlijnen ook iets voor mijn rijveiligheid?',
                a: 'Ja. Bij een noodstop of uitwijkmanoeuvre reageert uw auto precies zoals u verwacht. Slechte uitlijning vertroebelt dat gevoel. Remmen werken gelijkmatiger, banden hebben betere grip. Niet spectaculair — maar u merkt het.',
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
            <h2 className={s.finalCtaH2}>KLAAR VOOR<br />PERFECTE UITLIJNING?</h2>
            <p className={s.finalCtaP}>
              Bel of stuur een berichtje. Dezelfde dag is vaak al mogelijk.
              In 45 minuten rijdt u recht, zuiniger en met een rapport op zak.
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

      <EmergencyBand />
    </>
  );
}
