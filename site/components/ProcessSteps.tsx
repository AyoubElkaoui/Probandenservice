import styles from './ProcessSteps.module.css';

const defaultSteps = [
  { n: '01', t: 'Bel of plan online', d: 'Kies een tijdslot — of bel direct. Bevestiging binnen 1 minuut.' },
  { n: '02', t: 'Wij staan klaar', d: 'Bij aankomst zijn de banden gereed. Geen wachttijd.' },
  { n: '03', t: 'Klaar binnen 45 min', d: 'Vakkundig gemonteerd, gebalanceerd en uitgelijnd. U rijdt weg.' },
];

export function ProcessSteps({ steps = defaultSteps }: { steps?: typeof defaultSteps }) {
  return (
    <ol className={styles.list}>
      {steps.map((s, i) => (
        <li key={s.n} className={styles.row} style={{ borderBottom: i === steps.length - 1 ? '1px solid var(--line)' : 'none' }}>
          <span className={styles.number}>{s.n}</span>
          <div>
            <h3 className={styles.title}>{s.t}</h3>
            <p className={styles.body}>{s.d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
