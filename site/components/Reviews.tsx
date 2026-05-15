import styles from './Reviews.module.css';

type Review = { name: string; role: string; text: string; stars: number };

// Echte Google reviews van Pro Banden Service Culemborg
// Bron: Google Business profiel (5/5 · 158 reviews)
const defaultReviews: Review[] = [
  {
    name: 'ERWU-projects',
    role: 'Google recensie · 5 maanden geleden',
    text: '"Hele aardige en kundige eigenaar van dit kleine bedrijf. Hele scherpe prijs voor winterbanden. De wachttijd is alleen totdat de banden daar bezorgd worden. Daarna supersnel geholpen. Aanrader."',
    stars: 5,
  },
  {
    name: 'Romke Wolters',
    role: 'Google recensie',
    text: '"Heel goed en vakkundig geholpen door Pro Banden Service. Twee voorbanden moesten worden vervangen en gebalanceerd. Ik kon snel een afspraak maken. Top service."',
    stars: 5,
  },
  {
    name: 'Erik de Rooij',
    role: 'Google recensie',
    text: '"Achterbanden laten vervangen. Betreft een klein bedrijfje dat ook buiten reguliere werktijden reageert en beschikbaar is. Aanrader voor iedereen die snel geholpen wil worden."',
    stars: 5,
  },
];

export function Reviews({ reviews = defaultReviews }: { reviews?: Review[] }) {
  return (
    <div className={styles.grid}>
      {reviews.map((r, i) => (
        <article key={i} className={styles.card}>
          <div className={styles.stars} aria-label={`${r.stars} sterren`}>{'★'.repeat(r.stars)}</div>
          <p className={styles.quote}>{r.text}</p>
          <div className={styles.meta}>
            <div className={styles.name}>{r.name}</div>
            <div className={styles.role}>{r.role}</div>
          </div>
        </article>
      ))}
    </div>
  );
}
