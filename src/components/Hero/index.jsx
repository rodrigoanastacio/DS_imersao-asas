import Headline from '../Headline';

import styles from './styles.module.scss';

export default function Hero({ children }) {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>{children}</div>
    </header>
  );
}
