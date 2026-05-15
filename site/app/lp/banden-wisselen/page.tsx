import Image from 'next/image';
import type { Metadata } from 'next';
import { Wrench, CheckCircle, Clock, Shield, RotateCcw, Gauge } from 'lucide-react';
import { Button } from '@/components/Button';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../lp.module.css';

export const metadata: Metadata = {
  title: 'Banden Wisselen Culemborg | €15 per band | Terwijl U Wacht | Probandenservice',
  description:
    'Vakkundig banden wisselen terwijl u wacht. Touchless montagemachines, balancering, TPMS reset en gratis afvoer. Vanaf €15 per band. Deskundig advies.',
  alternates: { canonical: '/lp/banden-wisselen' },
  openGraph: {
    title: 'Banden Wisselen Culemborg | Probandenservice',
    description: 'Touchless montage, balancering & TPMS. €15 per band. Terwijl u wacht.',
    locale: 'nl_NL',
  },
};

const benefits = [
  {
    icon: <Wrench size={32} />,
    title: 'TOUCHLESS MONTAGE',
    text: 'Onze krasvrije montagemachines raken uw velgen nooit. Veilig voor aluminium, smeedstaal en lichtmetalen velgen.',
  },
  {
    icon: <Gauge size={32} />,
    title: 'BALANCERING INBEGREPEN',
    text: 'Elk wiel wordt gebalanceerd na montage. Geen trilling, geen onregelmatige slijtage, een glad rijgevoel.',
  },
  {
    icon: <RotateCcw size={32} />,
    title: 'TPMS RESET',
    text: 'Heeft uw auto een bandenspanningsmeter? Wij resetten TPMS sensors bij elke wiselbeurt. Standaard inbegrepen.',
  },
  {
    icon: <Shield size={32} />,
    title: 'VEILIGHEIDSCHECK',
    text: 'Na montage controleren wij remmen, wielophanging en stuurspeling. Gratis advies over wat aandacht verdient.',
  },
  {
    icon: <Clock size={32} />,
    title: 'TERWIJL U WACHT',
    text: 'Vier wielen wisselen, balanceren en TPMS resetten — klaar in 45 minuten. Geen volle dag uw auto kwijt.',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'GRATIS AFVOER',
    text: 'Uw oude banden worden milieuvriendelijk afgevoerd. Geen extra kosten. Geen gedoe met uw eigen afval.',
  },
];

const steps = [
  {
    n: '01',
    t: 'Aankomst & check-in',
    d: 'U rijdt voor, meldt u aan de balie. Wij noteren uw gegevens en de monteur neemt uw auto direct in behandeling.',
  },
  {
    n: '02',
    t: 'Krasvrije montage & balancering',
    d: 'Touchless machines wisselen de banden krasvrij. Elk wiel wordt daarna gebalanceerd en TPMS gereset.',
  },
  {
    n: '03',
    t: 'Veiligheidscheck & aflevering',
    d: 'Remmen, wielophanging en bandenspanning worden gecheckt. U rijdt weg — veilig en klaar.',
  },
];

const reviews = [
  {
    name: 'Pieter van Dam',
    role: 'Culemborg · 1 maand geleden',
    text: '"Seizoenswisseling in 40 minuten. Velgen zaten er perfect op, geen krassen. Meteen ook mijn remmen laten checken — niks mis. Goed bedrijf."',
    stars: 5,
  },
  {
    name: 'Sara El H.',
    role: 'Barendrecht · 6 weken geleden',
    text: '"TPMS lampje ging altijd aan. Hier resetten ze het gewoon standaard mee. Sindsdien geen enkel probleem. Precies zoals het hoort."',
    stars: 5,
  },
  {
    name: 'Dirk Hoogenbosch',
    role: 'Capelle a/d IJssel · 2 maanden geleden',
    text: '"Mooie lichtmetalen velgen — ik durfde ze nergens anders naartoe te brengen. Hier touchless gemonteerd, velgen zijn vlekkeloos. Aanrader."',
    stars: 5,
  },
];

export default function BandenWisselenPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={s.hero} style={{ minHeight: '680px' }}>
        <div className={s.heroImgWrap}>
          <Image
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=85"
            alt="Vakkundige bandenmonteur wisselt banden krasvrij bij Probandenservice Culemborg"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div className={s.heroOverlay} />
        </div>

        <div className={s.heroContent}>
          <div className={s.trustBar}>
            <span className={s.trustItem}>✓ Touchless Montage</span>
            <span className={s.trustItem}>✓ TPMS Reset</span>
            <span className={s.trustItem}><span className={s.trustStar}>★</span> 4.8 Google</span>
            <span className={s.trustItem}>✓ Gratis afvoer</span>
          </div>

          <div className={s.priceTag}>VANAF €15 PER BAND</div>

          <h1 className={s.heroH1}>
            BANDEN WISSELEN.<br />VAKKUNDIG.<br />
            <span className={s.heroH1Red}>TERWIJL U WACHT.</span>
          </h1>

          <p className={s.heroTagline}>
            Heeft u al banden of koopt u ze hier? In beide gevallen zijn ze binnen
            drie kwartier gemonteerd, gebalanceerd en klaar. Touchless — geen krasje op uw velgen.
          </p>

          <div className={s.heroCtas}>
            <Button href="tel:+31642513692">BEL NU: 06 — 42 51 36 92</Button>
            <Button href="/contact" variant="ghost">Plan afspraak →</Button>
          </div>

          <div className={s.statRow}>
            <div className={s.stat}>
              <div className={s.statN}>€15</div>
              <div className={s.statL}>per band wisselen</div>
            </div>
            <div className={s.stat}>
              <div className={s.statN}>45</div>
              <div className={s.statL}>minuten klaar</div>
            </div>
            <div className={s.stat}>
              <div className={s.statN}>Culemborg</div>
              <div className={s.statL}>en omgeving</div>
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
              <span className={s.eyebrow}>VAKKUNDIG WISSELEN</span>
              <h2 className={s.sectionH2}>GEEN KRASSEN.<br />GEEN TRILLINGEN.</h2>
              <p className={s.sectionIntro}>
                Fout monteren trekt schade aan uw velg en geeft trillingen op de snelweg.
                Goedkoper is het niet als u daarna ergens anders opnieuw langs moet.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>TOUCHLESS</h3>
              <p className={s.detailsBlockP}>
                Touchless betekent: de machine maakt geen contact met de rand van uw velg.
                Bij normale montagemachines wel — en dat zie je terug in krassen en inkepingen.
                Wij investeren in betere machines omdat uw velgen het waard zijn.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>BALANCERING</h3>
              <p className={s.detailsBlockP}>
                Een ongebalanceerd wiel trilt bij hogesnelheidsrijden en vreet uw banden sneller
                op. Wij balanceren alle vier wielen na montage. Dat is standaard inbegrepen —
                geen apart tarief.
              </p>
            </div>

            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>TPMS LAMPJE</h3>
              <p className={s.detailsBlockP}>
                Als na een bandenwisseling uw TPMS-lampje blijft branden, is de sensor niet
                gereset. Wij doen dat standaard. U rijdt weg zonder lampje, zonder gedoe.
              </p>
            </div>
          </div>

          <div className={s.detailImgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
              alt="Touchless bandenmontage Probandenservice"
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
              <h2 className={s.sectionH2}>€15 PER BAND.<br />ALLES INBEGREPEN.</h2>
              <p className={s.sectionIntro}>
                Montage, balancering, TPMS reset en gratis afvoer van uw oude banden — voor een vaste,
                eerlijke prijs. Geen verborgen kosten.
              </p>
            </div>
            <div className={s.heroCtas}>
              <Button href="tel:+31642513692">BEL VOOR AFSPRAAK</Button>
              <Button href="/contact" variant="outline">Boek online →</Button>
            </div>
          </div>

          <div className={s.priceCard}>
            <div className={s.priceCardLabel}>BANDEN WISSELEN PER BAND</div>
            <div>
              <div className={s.priceAmount}>€15</div>
              <div className={s.priceUnit}>per band — incl. btw</div>
            </div>
            <ul className={s.includes}>
              {[
                'Krasvrije touchless demontage & montage',
                'Computergestuurde balancering',
                'TPMS reset (indien aanwezig)',
                'Bandenspanning instellen',
                'Milieuvriendelijke afvoer oude banden',
                'Gratis veiligheidscheck na montage',
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
            <h2 className={s.sectionH2}>45 MINUTEN.<br />KLAAR.</h2>
            <p className={s.sectionIntro}>
              Van aankomst tot wegrijden: 45 minuten. Er is koffie en een comfortabele wachtruimte.
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
              <span className={s.eyebrow}>WAT KLANTEN ZEGGEN</span>
              <h2 className={s.sectionH2}>VAKWERK DAT<br />OPVALT.</h2>
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
            <h2 className={s.sectionH2}>HELDER<br />ANTWOORD.</h2>
          </div>
          <div className={s.faqList}>
            {[
              {
                q: 'Wat is het verschil tussen zomer- en winterbanden wisselen?',
                a: 'Technisch is het hetzelfde proces — banden van de velg, nieuw erop, balanceren. Maar let op: stelt u ook uw rijgedrag bij aan het seizoen. Winterbanden zijn beter bij temperaturen onder de 7°C; zomerbanden bieden betere grip en zuiniger rijden bij hogere temperaturen.',
              },
              {
                q: 'Kan ik ook zonder afspraak langskomen voor banden wisselen?',
                a: 'Dat kan, maar een afspraak bespaart u wachttijd. Zeker in het seizoenswissel-seizoen (oktober-november voor winter, maart-april voor zomer) is het erg druk. Plan op tijd.',
              },
              {
                q: 'Wat als ik mijn banden ook opgeslagen wil hebben?',
                a: 'Wij bieden bandensopslag aan voor €49 per seizoen. Uw banden worden veilig en geconditioneerd opgeslagen, inclusief profielcheck bij ophalen. Vraag ernaar bij uw bezoek of bekijk onze opslag-pagina.',
              },
              {
                q: 'Hoe lang duurt het wisselen van 4 banden?',
                a: 'Inclusief balancering en TPMS reset duurt het gemiddeld 40 tot 50 minuten. Bij drukte kan het iets langer duren. Met een afspraak weet u zeker wanneer uw auto klaar is.',
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
            <h2 className={s.finalCtaH2}>KLAAR OM TE<br />WISSELEN?</h2>
            <p className={s.finalCtaP}>
              Maak een afspraak of rij gewoon langs. Wij staan klaar met touchless machines, een
              vakkundige monteur en een kopje koffie. Klaar in 45 minuten.
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
        heading={<>LEKKE BAND?<br />WIJ STAAN ER IN 45 MIN.</>}
        subline="Pech onderweg? Bel onze spoedlijn. Dag en nacht beschikbaar, Culemborg en omgeving. Vaste prijs vooraf."
      />
    </>
  );
}
