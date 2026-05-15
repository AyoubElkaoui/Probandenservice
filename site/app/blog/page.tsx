import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import { PageHeader } from '@/components/PageHeader';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog — tips, achtergrond en seizoensadvies',
  description:
    'Lees onze gidsen over banden, uitlijnen, airco en alles wat met uw auto te maken heeft. Geschreven door de monteurs zelf.',
  alternates: { canonical: '/blog' },
};

const A = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80';
const C = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80';

const postImages: Record<string, string> = {
  'wanneer-is-uw-band-versleten':   A,
  '2d-versus-3d-uitlijnen':         A,
  'allseasons-of-zomer-winter-set': C,
  'vakantiecheck-zomer-2026':       C,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default function BlogPage() {
  const [feature, ...rest] = blogPosts;

  return (
    <>
      <PageHeader
        eyebrow="BLOG"
        title={<>Lezen voor onderweg.</>}
        lede="Tips, achtergrond en seizoensadvies — geschreven door de monteurs zelf. Geen marketing, gewoon kennis."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Blog' }]}
      />

      <section className={styles.body}>
        <div className="container">
          {/* ── Featured article ── */}
          <Link href={`/blog/${feature.slug}`} className={styles.feature}>
            <div className={styles.featureImg}>
              {postImages[feature.slug] ? (
                <Image
                  src={postImages[feature.slug]}
                  alt={feature.title}
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 60vw"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <div className={styles.imgFallback} />
              )}
            </div>
            <div className={styles.featureCopy}>
              <div className={styles.meta}>
                <span className={styles.tag}>{feature.category.toUpperCase()}</span>
                <span>{formatDate(feature.date)}</span>
                <span>{feature.readMinutes} min lezen</span>
              </div>
              <h2 className={styles.featureTitle}>{feature.title}</h2>
              <p className={styles.featureExcerpt}>{feature.excerpt}</p>
              <span className={styles.featureArrow}>Lees verder →</span>
            </div>
          </Link>

          {/* ── Rest of the grid ── */}
          {rest.length > 0 && (
            <div className={styles.grid}>
              {rest.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                  <div className={styles.cardImg}>
                    {postImages[post.slug] ? (
                      <Image
                        src={postImages[post.slug]}
                        alt={post.title}
                        fill
                        sizes="(max-width: 720px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className={styles.imgFallback} />
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.meta}>
                      <span className={styles.tag}>{post.category.toUpperCase()}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
