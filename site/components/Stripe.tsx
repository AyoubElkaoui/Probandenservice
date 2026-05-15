import styles from './Stripe.module.css';

// Racing-stripe divider element. Use between sections or at top of dark footers.
export function Stripe({ color }: { color?: string }) {
  return (
    <div
      className={styles.stripe}
      style={color ? { ['--stripe-color' as string]: color } : undefined}
      aria-hidden="true"
    />
  );
}
