import styles from './ImageSlot.module.css';

type Props = {
  label: string;
  height?: number | string;
  ratio?: string;     // e.g. "4 / 5"
  className?: string;
};

// Striped placeholder voor afbeeldingen.
// Vervang in productie door <Image src="/images/..." /> en verwijder dit component.
export function ImageSlot({ label, height, ratio, className }: Props) {
  const style: React.CSSProperties = {};
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;
  if (ratio) style.aspectRatio = ratio;
  return (
    <div className={`${styles.slot} ${className ?? ''}`} style={style}>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
