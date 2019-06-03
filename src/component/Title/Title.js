import React from 'react';
import styles from './index.scss';

const Title = () => (
  <div className={styles.title_block}>
    <div className={styles.flex_content_block}>
      <span className={styles.little_title}>
        CCCLOTHES
      </span>
    </div>
    <div className={styles.flex_content_block}>
      <span className={styles.main_title}>
        MEN’S TOPS
      </span>
    </div>
  </div>
);

export default Title;
