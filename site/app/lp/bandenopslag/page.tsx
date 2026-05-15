import Image from 'next/image';
import type { Metadata } from 'next';
import { Package, CheckCircle, Calendar, Bell, ClipboardCheck, Thermometer } from 'lucide-react';
import { Button } from '@/components/Button';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../lp.module.css';

export const metadata: Metadata = {
  title: 'Bandenopslag Culemborg — Geconditioneerd €49 | Probandenservice',
  description: 'Bandenopslag in geconditioneerde ruimte. Inclusief profielcheck en automatische seizoensherinnering. €49 per seizoen. Bel 06 — 42 51 36 92.',
  alternates: { canonical: '/lp/bandenopslag' },
  openGraph: { title: 'Bandenopslag Culemborg | Probandenservice', description: 'Geconditioneerde opslag, profielcheck inbegrepen. €49 per seizoen.', locale: 'nl_NL' },
};

const benefits = [
  { icon: <Thermometer size={32} />, title: 'GECONDITIONEERDE RUIMTE', text: 'Constant 12–18°C, gecontroleerde luchtvochtigheid. Uw banden gaan langer mee.' },
  { icon: <Bell size={32} />, title: 'AUTOMATISCHE REMINDER', text: 'Wij sturen u rond de seizoenswisseling een herinnering. Nooit te vroeg of te laat wisselen.' },
  { icon: <CheckCircle size={32} />, title: 'PROFIELCHECK INCLUSIEF', text: 'Bij elke wissel meten wij de profieldiepte. U weet tijdig wanneer vervanging nodig is.' },
  { icon: <Package size={32} />, title: 'GELABELD & VEILIG', text: 'Uw banden worden professioneel gelabeld opgeslagen. Nooit verwarring bij het wisselen.' },
  { icon: <Calendar size={32} />, title: '€49 PER SEIZOEN', text: 'Transparante vaste prijs. Eén set (4 banden) opslaan per seizoen, inclusief profielcheck.' },
  { icon: <ClipboardCheck size={32} />, title: 'KLAAR BIJ AANKOMST', text: 'Uw opgeslagen set ligt klaar als u arriveert voor de wissel. Geen wachttijd.' },
];

const steps = [
  { n: '01', t: 'Wissel uw banden', d: 'Kom voor de seizoenswisseling. Wij monteren de juiste set en slaan de andere op in ons magazijn.' },
  { n: '02', t: 'Wij beheren het voor u', d: 'Uw banden liggen droog en geconditioneerd opgeslagen. U ontvangt automatisch een reminder.' },
  { n: '03', t: 'Volgend seizoen: klaar', d: 'Kom terug op afspraak. Uw banden liggen klaar, profielcheck is al gedaan. Direct monteren.' },
];

export default function BandenopslagPage() {
  return (
    <>
      <section className={s.hero} style={{ minHeight: '640px' }}>
        <div className={s.heroImgWrap}>
          <Image src="https://images.unsplash.com/photo-1597404294360-feeeda04612e?auto=format&fit=crop&w=1600&q=85" alt="Geconditioneerde bandenopslag bij Probandenservice Culemborg" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
          <div className={s.heroOverlay} />
        </div>
        <div className={s.heroContent}>
          <div className={s.trustBar}>
            <span className={s.trustItem}>✓ Geconditioneerde opslag</span>
            <span className={s.trustItem}>✓ Profielcheck inbegrepen</span>
            <span className={s.trustItem}><span className={s.trustStar}>★</span> 4.8 Google</span>
          </div>
          <div className={s.priceTag}>€49 PER SEIZOEN</div>
          <h1 className={s.heroH1}>BANDEN OPSLAAN.<br />NOOIT MEER<br /><span className={s.heroH1Red}>GEDOE IN DE SCHUUR.</span></h1>
          <p className={s.heroTagline}>Professionele bandenopslag in geconditioneerde ruimte. Inclusief profielcheck bij elke wissel en automatische seizoensherinnering. Simpel, veilig, en goedkoper dan u denkt.</p>
          <div className={s.heroCtas}>
            <Button href="tel:+31642513692">BEL NU: 06 — 42 51 36 92</Button>
            <Button href="/contact" variant="ghost">Plan afspraak →</Button>
          </div>
          <div className={s.statRow}>
            <div className={s.stat}><div className={s.statN}>€49</div><div className={s.statL}>per seizoen (4 banden)</div></div>
            <div className={s.stat}><div className={s.statN}>12°C</div><div className={s.statL}>geconditioneerde ruimte</div></div>
            <div className={s.stat}><div className={s.statN}>100%</div><div className={s.statL}>profielcheck inbegrepen</div></div>
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
            <span className={s.eyebrow}>PROFESSIONELE OPSLAG</span>
            <h2 className={s.sectionH2}>UW BANDEN.<br />ONZE ZORG.</h2>
            <p className={s.sectionIntro}>
              Banden in een koude, vochtige schuur? Dat kost levensjaren.
              Rubber houdt niet van vorst, UV-licht en grote temperatuurwisselingen.
            </p>
            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>WAAROM HET UITMAAKT</h3>
              <p className={s.detailsBlockP}>
                Onze ruimte hangt continu op 12–18°C met gecontroleerde luchtvochtigheid.
                Geen vorst in de winter, geen hitte in de zomer. Uw banden gaan
                meetbaar langer mee. De meeste klanten merken het verschil
                na twee of drie seizoenen.
              </p>
            </div>
            <div className={s.detailsBlock}>
              <h3 className={s.detailsBlockH3}>PROFIELCHECK INBEGREPEN</h3>
              <p className={s.detailsBlockP}>
                Bij elke wissel meten wij de profieldiepte. Als vervanging eraan
                komt, zeggen we dat ruim van tevoren. Geen verrassing op de dag
                dat u voor de wisseling staat — en geen onnodig nieuws als er
                niets mis is.
              </p>
            </div>
            <div className={s.featureBox}>
              <h4 className={s.featureBoxTitle}>WAT IS INBEGREPEN VOOR €49?</h4>
              <ul className={s.featureBoxList}>
                {['Geconditioneerde opslag (12–18°C)', 'Professionele labeling van uw set', 'Profieldieptemeting bij wissel', 'Automatische seizoensherinnering per SMS/e-mail', 'Klaar bij aankomst voor de wissel', 'Transparante vaste prijs per seizoen'].map(item => (<li key={item} className={s.featureBoxItem}>{item}</li>))}
              </ul>
            </div>
          </div>
          <div className={s.detailImgWrap}>
            <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85" alt="Professionele bandenopslag werkplaats" fill sizes="(max-width: 1100px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            <div className={s.detailImgOverlay} />
          </div>
        </div>
      </div>

      <div className={s.pricing}>
        <div className={s.pricingInner}>
          <div className={s.pricingCopy}>
            <span className={s.eyebrow}>TARIEF</span>
            <h2 className={s.sectionH2}>SIMPEL.<br />TRANSPARANT.</h2>
            <p className={s.sectionIntro}>Eén vaste prijs per seizoen. Geen verborgen kosten.</p>
            <div className={s.heroCtas}>
              <Button href="tel:+31642513692">BEL VOOR OPSLAG</Button>
              <Button href="/contact" variant="outline">Maak afspraak →</Button>
            </div>
          </div>
          <div className={s.priceCard}>
            <div className={s.priceCardLabel}>BANDENOPSLAG PER SEIZOEN</div>
            <div><div className={s.priceAmount}>€49</div><div className={s.priceUnit}>per seizoen, incl. btw</div></div>
            <ul className={s.includes}>
              {['Één set (4 banden) opslaan', 'Geconditioneerde ruimte (12–18°C)', 'Professionele labeling inbegrepen', 'Profielcheck bij wissel inbegrepen', 'Automatische seizoensherinnering', 'Klaar bij aankomst gegarandeerd'].map(item => (<li key={item} className={s.includesItem}><CheckCircle size={16} className={s.includesCheck} />{item}</li>))}
            </ul>
          </div>
        </div>
      </div>

      <div className={s.process}>
        <div className={s.processGrid}>
          <div>
            <span className={s.eyebrow}>HOE HET WERKT</span>
            <h2 className={s.sectionH2}>DRIE STAPPEN.<br />HEEL HET JAAR.</h2>
            <p className={s.sectionIntro}>Laat ons uw banden beheren. U rijdt altijd op het juiste seizoen.</p>
          </div>
          <ProcessSteps steps={steps} />
        </div>
      </div>

      <div className={s.reviewsSection}>
        <div className={s.reviewsSectionInner}>
          <div className={s.reviewsHead}>
            <div><span className={s.eyebrow}>KLANTEN OVER ONS</span><h2 className={s.sectionH2}>1.247 KLANTEN.<br />4.8 GEMIDDELD.</h2></div>
            <div className={s.bigStars}><div className={s.starLine}>★★★★★</div><div className={s.starSub}>GOOGLE · 4.8 / 5.0</div></div>
          </div>
          <Reviews />
        </div>
      </div>

      <div className={s.faq}>
        <div className={s.faqGrid}>
          <div><span className={s.eyebrow}>VEELGESTELDE VRAGEN</span><h2 className={s.sectionH2}>UW VRAGEN.<br />BEANTWOORD.</h2></div>
          <div className={s.faqList}>
            {[
              { q: 'Hoe werkt de automatische herinnering?', a: 'U geeft uw telefoonnummer en e-mailadres op bij aanmelding. Wij sturen u rond de seizoenswisseling (april/mei voor zomer, oktober/november voor winter) een bericht om een afspraak te maken.' },
              { q: 'Kan ik ook velgen laten opslaan?', a: 'Ja, wij slaan volledige wielen op (band met velg). De prijs blijft hetzelfde. Graag melden bij aanmelding voor de juiste opslagrammen.' },
              { q: 'Wat als mijn banden aan vervanging toe zijn?', a: 'Wij meten de profieldiepte bij elke wissel. Als vervanging nodig is, adviseren wij dit tijdig en bieden we u een offerte aan voor nieuwe banden van alle gangbare merken.' },
              { q: 'Per wanneer kan ik starten met opslag?', a: 'U kunt op elk moment instappen — ook midden in het seizoen. Maak een afspraak voor een wissel en wij slaan uw set direct op.' },
            ].map(faq => (<details key={faq.q} className={s.faqItem}><summary>{faq.q}</summary><p className={s.faqAnswer}>{faq.a}</p></details>))}
          </div>
        </div>
      </div>

      <div className={s.finalCta}>
        <div className={s.finalCtaInner}>
          <div>
            <h2 className={s.finalCtaH2}>KLAAR MET<br />BANDEN SJOUWEN?</h2>
            <p className={s.finalCtaP}>Meld u aan voor professionele bandenopslag. Wij regelen de rest.</p>
            <div className={s.finalCtaCtas}>
              <Button href="tel:+31642513692">BEL NU: 06 — 42 51 36 92</Button>
              <Button href="/contact" variant="ghost">Plan afspraak →</Button>
            </div>
          </div>
          <address className={s.finalCtaAddress} style={{ fontStyle: 'normal' }}>
            <strong>PROBANDENSERVICE</strong><br />
            Bellweg 40<br />4104 BJ Culemborg<br /><br />
            Ma — Vr · 08:00 — 18:00<br />Za · 09:00 — 14:00
          </address>
        </div>
      </div>

      <EmergencyBand />
    </>
  );
}
