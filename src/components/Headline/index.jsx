import styles from './styles.module.scss';

export default function Headline({ children }) {
  return <div className={styles.call}>{children}</div>;
}
