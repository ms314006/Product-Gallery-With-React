import React from 'react';
import Logo from './Logo';
import styles from './index.scss';

const Title = () => (
  <div className={styles.title_block} data-testid="titleBlock">
    <Logo />
    <div className={styles.flex_content_block}>
      <span className={styles.main_title}>
        MEN’S TOPS
      </span>
    </div>
  </div>
);

export default Title;
