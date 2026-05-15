import Image from 'next/image';
import type { Metadata } from 'next';
import { Phone, Clock, MapPin, Shield, Zap, Star } from 'lucide-react';
import { Button } from '@/components/Button';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../lp.module.css';

export const metadata: Metadata = {
  title: 'Lekke Band Culemborg — 24/7 Spoedservice in 45 min | Probandenservice',
  description: 'Lekke band, pech onderweg? Wij staan er binnen 45 minuten. Culemborg en omgeving, dag en nacht. Vaste prijs vooraf. Bel 06 — 40 96 18 48.',
  alternates: { canonical: '/lp/spoedservice' },
  openGraph: { title: '24/7 Spoedservice Lekke Band Culemborg | Probandenservice', description: 'Pech onderweg? Wij rijden naar je toe. Culemborg en omgeving, dag en nacht. Bel 06 40 96 18 48.', locale: 'nl_NL' },
};

const benefits = [
  { icon: <Clock size={32} />, title: '24/7 BEREIKBAAR', text: 'In Culemborg en omgeving staan we binnen 45 minuten naast u. In de stad vaak sneller.' },
  { icon: <Phone size={32} />, title: '24/7 BEREIKBAAR', text: '365 dagen per jaar, ook op feestdagen en midden in de nacht. Altijd opgenomen.' },
  { icon: <MapPin size={32} />, title: 'CULEMBORG E.O.', text: 'Culemborg, Tiel, Geldermalsen, Vianen, Utrecht en omgeving.' },
  { icon: <Shield size={32} />, title: 'VASTE PRIJS VOORAF', text: 'U weet wat het kost vóór we vertrekken. Geen toeslagen voor nacht of weekend achteraf.' },
  { icon: <Zap size={32} />, title: 'EIGEN MONTEURS', text: 'Geen derde partijen. Onze eigen gecertificeerde monteurs rijden altijd uit.' },
  { icon: <Star size={32} />, title: '4.8 GOOGLE RATING', text: '1.247 klanten — gemiddeld 4.8 sterren. Ook in spoedsituaties.' },
];

const steps = [
  { n: '01', t: 'Bel de spoedlijn', d: 'Eén telefoontje. Onze monteur neemt direct op — geen voicemail, geen menu.' },
  { n: '02', t: 'Wij rijden uit', d: 'U weet van tevoren wat het kost. Onze spoedwagen rijdt naar jouw locatie in Culemborg en omgeving.' },
  { n: '03', t: 'Probleem opgelost', d: 'Band gerepareerd, reservewiel gemonteerd, of slepen indien nodig. U rijdt weg.' },
];

const reviews = [
  { name: 'Mark de Vries', role: 'Culemborg · 2 maanden geleden', text: '"Lekke band om 23:00 op de A15. Binnen 35 minuten stond hun spoedwagen er. Vakkundig, vriendelijk, eerlijke prijs. Echte reddertjes."', stars: 5 },
  { name: 'Sandra H.', role: 'Barendrecht · 1 maand geleden', text: '"Zondagnacht platte band met twee kinderen in de auto. Bel gedaan, 40 minuten later opgelost. Kon niet sneller en ze waren ontzettend vriendelijk."', stars: 5 },
  { name: 'Karim B.', role: 'Spijkenisse · 3 weken geleden', text: '"Vaste prijs was echt vaste prijs. Geen vervelende verrassingen. Band gerepareerd in plaats van meteen vervangen. Top service."', stars: 5 },
];

export default function LpSpoedservicePage() {
  return (
    <>
      <section className={s.hero} style={{ minHeight: '700px' }}>
        <div className={s.heroImgWrap}>
          <Image src="https://images.unsplash.com/photo-1558618047-3e0b3d66bbfc?auto=format&fit=crop&w=1600&q=85" alt="Spoedservice monteur bij lekke band op de weg" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={s.heroOverlayRed} />
        </div>
        <div className={s.heroContent}>
          <div className={s.trustBar}>
            <span className={s.trustItem}>● LIVE · NU BEREIKBAAR</span>
            <span className={s.trustItem}>24/7 · 365 DAGEN</span>
            <span className={s.trustItem}><span className={s.trustStar}>★</span> 4.8 Google</span>
          </div>
          <div className={s.priceTag} style={{ background: '#fff', color: 'var(--red)' }}>VASTE PRIJS VOORAF</div>
          <h1 className={s.heroH1}>LEKKE BAND?<br />WIJ STAAN ER<br /><span className={s.heroH1Red} style={{ color: '#ffcdd2' }}>IN 45 MINUTEN.</span></h1>
          <p className={s.heroTagline}>Pech onderweg, midden in de nacht of op zondag? Onze spoedwagen rijdt uit naar Culemborg en omgeving. Binnen 45 minuten naast u. Vaste prijs vooraf — geen verrassingen.</p>
          <div className={s.heroCtas}>
            <Button href="tel:+31640961848">SPOED: 06 — 40 96 18 48</Button>
            <Button href="tel:+31642513692" variant="ghost">Normaal: 06 — 42 51 36 92</Button>
          </div>
          <div className={s.statRow}>
            <div className={s.stat}><div className={s.statN}>≤45</div><div className={s.statL}>minuten reactietijd</div></div>
            <div className={s.stat}><div className={s.statN}>24/7</div><div className={s.statL}>365 dagen bereikbaar</div></div>
            <div className={s.stat}><div className={s.statN}>CULEM</div><div className={s.statL}>Culemborg en omgeving</div></div>
          </div>
        </div>
      </section>

      <div className={s.benefits}>
        <div className={s.benefitsInner}>
          <div className={s.benefitsGrid}>
            {benefits.map(b => (<div key={b.title} className={s.benefit}><div className={s.benefitIcon}>{b.icon}</div><h3 className={s.benefitTitle}>{b.title}</h3><p className={s.benefitText}>{b.text}</p></div>))}
          </div>
        </div>
      </div>

      <div className={s.section}>
        <div className={s.detailsGrid}>
          <div className={s.detailsCopy}>
            <span className={s.eyebrow}>24/7 SPOEDSERVICE</span>
            <h2 className={s.sectionH2}>PECH IS AL<br />ERG GENOEG.</h2>
            <p className={s.sectionIntro}>
              Pech onderweg is al vervelend genoeg. Een onduidelijke rekening of lang wachten
              op een onbekend bedrijf hoeft er niet bij.
            </p>
            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>WAT WE TER PLEKKE DOEN</h3>
              <p className={s.detailsBlockP}>
                Eerst kijken of de band te redden valt — repareren is goedkoper dan vervangen.
                Kan het niet? Dan monteren we uw reservewiel of een nieuwe band die we bij ons
                hebben. Soms is slepen naar de werkplaats de enige optie. U beslist, wij adviseren.
              </p>
            </div>
            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>PRIJS VOORAF, GEEN VERRASSINGEN</h3>
              <p className={s.detailsBlockP}>
                Voordat we vertrekken stellen we de prijs vast. Geen nacht-toeslag die u
                achteraf pas ontdekt, geen weekend-tarief. Wat we afspreken betaalt u.
                Dat is geen marketingpraat — dat is hoe wij dat altijd al zo gedaan.
              </p>
            </div>
            <div className={s.featureBox}>
              <h4 className={s.featureBoxTitle}>WERKGEBIED</h4>
              <ul className={s.featureBoxList}>
                {['Culemborg', 'Tiel', 'Geldermalsen', 'Vianen', 'Utrecht', 'Gorinchem'].map(city => (<li key={city} className={s.featureBoxItem}>{city}</li>))}
              </ul>
            </div>
          </div>
          <div className={s.detailImgWrap}>
            <Image src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=85" alt="Spoedservice werkplaats Probandenservice Culemborg" fill sizes="(max-width: 1100px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            <div className={s.detailImgOverlay} />
          </div>
        </div>
      </div>

      <div className={s.process}>
        <div className={s.processGrid}>
          <div>
            <span className={s.eyebrow}>HOE HET WERKT</span>
            <h2 className={s.sectionH2}>BELLEN.<br />WACHTEN.<br />RIJDEN.</h2>
            <p className={s.sectionIntro}>Drie stappen. Geen gedoe. Ook midden in de nacht.</p>
          </div>
          <ProcessSteps steps={steps} />
        </div>
      </div>

      <div className={s.reviewsSection}>
        <div className={s.reviewsSectionInner}>
          <div className={s.reviewsHead}>
            <div><span className={s.eyebrow}>SPOEDKLANTEN OVER ONS</span><h2 className={s.sectionH2}>1.247 KLANTEN.<br />4.8 GEMIDDELD.</h2></div>
            <div className={s.bigStars}><div className={s.starLine}>★★★★★</div><div className={s.starSub}>GOOGLE · 4.8 / 5.0</div></div>
          </div>
          <Reviews reviews={reviews} />
        </div>
      </div>

      <div className={s.faq}>
        <div className={s.faqGrid}>
          <div><span className={s.eyebrow}>VEELGESTELDE VRAGEN</span><h2 className={s.sectionH2}>UW VRAGEN.<br />BEANTWOORD.</h2></div>
          <div className={s.faqList}>
            {[
              { q: 'Hoe snel zijn jullie er?', a: 'We rijden zo snel mogelijk naar je toe. In Culemborg en omgeving, afhankelijk van je locatie en het verkeer.' },
              { q: 'Wat kost de spoedservice?', a: 'De prijs wordt vooraf vastgesteld en hangt af van de situatie: reparatie, bandvervanging, of sleep. Wij communiceren de prijs altijd vóór we vertrekken.' },
              { q: 'Wat als mijn band niet te repareren is?', a: 'Dan monteren we uw reservewiel, of we vervangen de band door een nieuwe die wij bij ons hebben. Hebben wij de maat niet direct bij ons, dan slepen we u naar onze werkplaats.' },
              { q: 'Werken jullie ook op feestdagen?', a: 'Ja. 365 dagen per jaar, 24 uur per dag. Koningsdag, kerst, Oud & Nieuw — wij rijden altijd uit.' },
            ].map(faq => (<details key={faq.q} className={s.faqItem}><summary>{faq.q}</summary><p className={s.faqAnswer}>{faq.a}</p></details>))}
          </div>
        </div>
      </div>

      <div className={s.finalCta} style={{ background: 'var(--red)' }}>
        <div className={s.finalCtaInner}>
          <div>
            <h2 className={s.finalCtaH2}>PECH ONDERWEG?<br />BEL DIRECT.</h2>
            <p className={s.finalCtaP}>24/7 spoedlijn — altijd opgenomen, altijd dezelfde dag opgelost.</p>
            <div className={s.finalCtaCtas}>
              <Button href="tel:+31640961848">SPOED: 06 — 40 96 18 48</Button>
              <Button href="tel:+31642513692" variant="ghost">06 — 42 51 36 92</Button>
            </div>
          </div>
          <address className={s.finalCtaAddress} style={{ fontStyle: 'normal' }}>
            <strong>PROBANDENSERVICE</strong><br />
            Bellweg 40<br />4104 BJ Culemborg<br /><br />
            Spoedlijn: 24/7/365
          </address>
        </div>
      </div>

      <EmergencyBand />
    </>
  );
}
