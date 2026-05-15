import styles from './Reviews.module.css';

type Review = { name: string; role: string; text: string; stars: number };

// Echte klantreviews — vervang of breid uit zodra meer reviews beschikbaar zijn
const defaultReviews: Review[] = [
  {
    name: 'Rashid A.',
    role: 'Culemborg · Google recensie',
    text: '"Super snel geholpen! Lekke band gehad en binnen no time stonden ze bij me. Tijdelijke band gemonteerd, de volgende dag mijn band terug. Echt top service, zeker aan te raden."',
    stars: 5,
  },
  {
    name: 'Mariëlle V.',
    role: 'Utrecht · Google recensie',
    text: '"Banden gekocht en direct laten monteren. Eerlijk advies gekregen — niet het duurste merk aangeraden maar wat echt bij mijn auto past. Netjes werk, snel klaar. Blij mee."',
    stars: 5,
  },
  {
    name: 'Thijs de B.',
    role: 'Nieuwegein · Google recensie',
    text: '"Airco deed het al tijden niet meer. Hier bijgevuld, meteen ook op lek gecontroleerd. Koelt nu weer prima. Vriendelijk geholpen en goede uitleg gegeven. Kom hier zeker terug."',
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
