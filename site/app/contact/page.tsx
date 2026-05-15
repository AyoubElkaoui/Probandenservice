import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact — afspraak maken of langskomen',
  description: `Probandenservice — ${site.address.street}, ${site.address.city}. Tel ${site.phone.display}, e-mail ${site.email}. Spoed 24/7.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title={<>Loop binnen.<br />Of bel.</>}
        lede="Elke dag open van 09:00 tot 20:00. Spoed? Bel 24/7 de spoedlijn."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Contact' }]}
      />

      <section className={styles.body}>
        <div className={`container ${styles.grid}`}>
          {/* Left — info blocks */}
          <div className={styles.info}>
            <div className={styles.block}>
              <div className={styles.blockHead}>BEZOEKEN</div>
              <div className={styles.address}>
                <strong>{site.legalName}</strong><br />
                {site.address.street}<br />
                {site.address.postal} {site.address.city}<br />
                {site.address.country}
              </div>
              <Button href={`https://maps.google.com/?q=${encodeURIComponent(`${site.address.street}, ${site.address.city}`)}`} variant="ghost" external>
                Routebeschrijving
              </Button>
            </div>

            <div className={styles.block}>
              <div className={styles.blockHead}>BELLEN</div>
              <a href={`tel:${site.phone.tel}`} className={styles.bigLink}>
                {site.phone.display}
              </a>
              <p className={styles.note}>
                Voor afspraken, advies, of een prijsopgave. Onze monteurs nemen zelf op — geen call center.
              </p>
            </div>

            <div className={styles.block}>
              <div className={styles.blockHead}>SPOED · 24 / 7</div>
              <a href={`tel:${site.emergencyPhone.tel}`} className={`${styles.bigLink} ${styles.red}`}>
                {site.emergencyPhone.display}
              </a>
              <p className={styles.note}>
                Pech onderweg, lekke band buiten openingstijden? Bel direct — wij rijden zo snel mogelijk naar je toe.
              </p>
            </div>

            <div className={styles.block}>
              <div className={styles.blockHead}>MAILEN</div>
              <a href={`mailto:${site.email}`} className={styles.bigLink}>
                {site.email}
              </a>
              <p className={styles.note}>
                Voor offertes of vragen waar geen haast bij is. Antwoord binnen één werkdag.
              </p>
            </div>
          </div>

          {/* Right — hours + map placeholder */}
          <div className={styles.side}>
            <div className={styles.hoursCard}>
              <div className={styles.blockHead}>OPENINGSTIJDEN</div>
              <table className={styles.hours}>
                <tbody>
                  <tr><th>Maandag — Zondag</th><td>09:00 — 20:00</td></tr>
                  <tr className={styles.spoedRow}><th>Spoed</th><td>{site.hours.emergency}</td></tr>
                </tbody>
              </table>
            </div>

            <div className={styles.mapEmbed}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.4!2d5.234!3d51.955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6b4a7b8e3e6d7%3A0x0!2sBellweg+40%2C+4104+BJ+Culemborg!5e0!3m2!1snl!2snl!4v1715000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Probandenservice Culemborg - locatie op Google Maps"
              />
            </div>

            <div className={styles.kvkBox}>
              <div className={styles.kvkLabel}>BEDRIJFSGEGEVENS</div>
              <dl>
                <dt>Naam</dt><dd>{site.legalName}</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ──────────────────────────────────────── */}
      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <div className={styles.formGrid}>
            {/* Left — heading */}
            <div className={styles.formHead}>
              <h2 className={styles.formTitle}>STUUR ONS<br />EEN BERICHT</h2>
              <p className={styles.formSubtext}>
                Liever schrijven dan bellen? Vul het formulier in. We lezen het zelf en antwoorden binnen één werkdag.
              </p>
            </div>

            {/* Right — form */}
            <form
              className={styles.formBody}
              action="https://formspree.io/f/xdkgnbpz"
              method="POST"
              data-netlify="true"
            >
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="contact-naam">Naam *</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    id="contact-naam"
                    name="naam"
                    required
                    placeholder="Uw volledige naam"
                    autoComplete="name"
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="contact-telefoon">Telefoon *</label>
                  <input
                    className={styles.formInput}
                    type="tel"
                    id="contact-telefoon"
                    name="telefoon"
                    required
                    placeholder="06 — 12 34 56 78"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="contact-email">E-mail</label>
                <input
                  className={styles.formInput}
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="uw@emailadres.nl"
                  autoComplete="email"
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="contact-dienst">Dienst</label>
                <select
                  className={styles.formSelect}
                  id="contact-dienst"
                  name="dienst"
                >
                  <option value="">Kies een dienst</option>
                  <option value="Banden kopen">Banden kopen</option>
                  <option value="3D Uitlijnen">3D Uitlijnen</option>
                  <option value="Airco vullen">Airco vullen</option>
                  <option value="Banden wisselen">Banden wisselen</option>
                  <option value="Spoedservice">Spoedservice</option>
                  <option value="Bandenopslag">Bandenopslag</option>
                  <option value="Anders">Anders</option>
                </select>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="contact-bericht">Bericht *</label>
                <textarea
                  className={styles.formTextarea}
                  id="contact-bericht"
                  name="bericht"
                  required
                  placeholder="Wat kunnen we voor u doen? Vermeld gerust uw kenteken en gewenste dag."
                />
              </div>

              <button type="submit" className={styles.formSubmit}>
                STUUR BERICHT
              </button>
              <p className={styles.formNote}>WE REAGEREN BINNEN 1 WERKDAG</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
