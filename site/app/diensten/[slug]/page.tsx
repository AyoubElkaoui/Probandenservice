import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getService } from '@/lib/services';
import { site } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { EmergencyBand } from '@/components/EmergencyBand';
import { Button } from '@/components/Button';
import styles from './detail.module.css';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/diensten/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription },
  };
}

export default function ServiceDetail({ params }: { params: Params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = services.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`DIENST · ${service.number}`}
        title={service.title}
        lede={service.tagline}
        crumbs={[
          { href: '/', label: 'Home' },
          { href: '/diensten', label: 'Diensten' },
          { label: service.title },
        ]}
      />

      <article className={styles.body}>
        <div className={`container ${styles.layout}`}>
          {/* Main content column */}
          <div className={styles.main}>
            <p className={styles.intro}>{service.intro}</p>
            {service.body.map((block, i) => (
              <section key={i} className={styles.block}>
                <h2 className={styles.h2}>{block.heading}</h2>
                <p className={styles.p}>{block.text}</p>
              </section>
            ))}

            {/* Ontworpen sectie ipv willekeurige stockfoto */}
            <div className={styles.serviceVisual}>
              <span className={styles.serviceVisualNum} aria-hidden="true">{service.number}</span>
              <div className={styles.serviceVisualCopy}>
                <div className={styles.serviceVisualTitle}>{service.title}</div>
                <div className={styles.serviceVisualSub}>{site.address.city} · {site.phone.display}</div>
              </div>
            </div>

            <div className={styles.cta}>
              <Button href="/contact">Plan een afspraak</Button>
              <Button href={`tel:${site.phone.tel}`} variant="ghost">
                Bel · {site.phone.display}
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.aside}>
            <div className={styles.factCard}>
              <div className={styles.factHead}>OP EEN RIJ</div>
              <dl className={styles.facts}>
                {service.price && (
                  <>
                    <dt>Prijs</dt>
                    <dd>{service.price}</dd>
                  </>
                )}
                {service.duration && (
                  <>
                    <dt>Duur</dt>
                    <dd>{service.duration}</dd>
                  </>
                )}
                <dt>Locatie</dt>
                <dd>{site.address.city}</dd>
                <dt>Werkgebied</dt>
                <dd>Utrecht, Nieuwegein,<br />Culemborg, Tiel e.o.</dd>
              </dl>
              <div className={styles.tagrow}>
                {service.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>

            <div className={styles.related}>
              <div className={styles.relatedHead}>ANDERE DIENSTEN</div>
              <ul>
                {related.map(r => (
                  <li key={r.slug}>
                    <Link href={`/diensten/${r.slug}`}>
                      <span className={styles.relNum}>{r.number}</span>
                      <span>{r.title}</span>
                      <span className={styles.relArrow} aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <EmergencyBand />
    </>
  );
}
