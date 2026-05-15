import Link from 'next/link';
import styles from './Button.module.css';

type Variant = 'primary' | 'ghost' | 'outline';

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  external?: boolean;
};

export function Button({ children, href, variant = 'primary', external }: Props) {
  const cls = `${styles.btn} ${styles[variant]}`;
  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden="true" className={styles.arrow}>→</span>
    </>
  );
  if (!href) return <button className={cls}>{content}</button>;
  if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return <a href={href} className={cls}>{content}</a>;
  }
  return <Link href={href} className={cls}>{content}</Link>;
}
