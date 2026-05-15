import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getBlogPost } from '@/lib/blog';
import { site } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { EmergencyBand } from '@/components/EmergencyBand';
import styles from './post.module.css';

// Gebruik eigen foto's zodra beschikbaar — zet dan het pad hier in
// Nu: de enige bevestigde automotive Unsplash foto (mechanic)
const AUTOMOTIVE_IMG = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85';
const CAR_IMG        = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85';

const postImages: Record<string, string> = {
  'wanneer-is-uw-band-versleten':   AUTOMOTIVE_IMG,
  '2d-versus-3d-uitlijnen':         AUTOMOTIVE_IMG,
  'allseasons-of-zomer-winter-set': CAR_IMG,
  'vakantiecheck-zomer-2026':       CAR_IMG,
};

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default function BlogPost({ params }: { params: Params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const imgSrc = postImages[post.slug];

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name },
    description: post.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <PageHeader
        eyebrow={post.category.toUpperCase()}
        title={post.title}
        crumbs={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blog' },
          { label: post.title },
        ]}
      />

      <article className={styles.body}>
        <div className={`container ${styles.layout}`}>
          <div className={styles.main}>
            <div className={styles.meta}>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readMinutes} min lezen</span>
            </div>

            <div className={styles.featImg}>
              {imgSrc ? (
                <Image
                  src={imgSrc}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 65vw"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <div className={styles.featImgFallback} />
              )}
            </div>

            <div className={styles.prose}>
              {post.body.map((block, i) => (
                <section key={i}>
                  {block.heading && <h2>{block.heading}</h2>}
                  <p>{block.text}</p>
                </section>
              ))}
            </div>
          </div>

          <aside className={styles.aside}>
            {related.length > 0 && (
              <div className={styles.relatedBox}>
                <div className={styles.relHead}>OOK INTERESSANT</div>
                <ul>
                  {related.map(r => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`}>
                        <span className={styles.relCat}>{r.category.toUpperCase()}</span>
                        <span className={styles.relTitle}>{r.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>

      <EmergencyBand />
    </>
  );
}
