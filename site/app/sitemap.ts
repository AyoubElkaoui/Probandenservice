import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url.replace(/\/$/, '');

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`,                       lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/diensten`,               lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/spoedservice`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/over-ons`,               lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/faq`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`,                   lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/contact`,                lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    // LP pages
    { url: `${base}/lp/banden-kopen`,        lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/lp/uitlijnen`,           lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/lp/airco`,               lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/lp/banden-wisselen`,     lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/lp/spoedservice`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${base}/lp/bandenopslag`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    // Zomervakantie acties 2026
    { url: `${base}/actie/zomerbanden`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/actie/vakantiecheck`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/actie/airco-zomer`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/actie/road-trip`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/diensten/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
