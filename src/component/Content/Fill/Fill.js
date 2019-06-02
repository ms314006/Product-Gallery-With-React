import React from 'react';
import styles from './index.scss';

const Fill = (props) => {
  const { gridIndex, } = props;
  return (
    <div
      className={styles.fill_style}
      style={{
        gridArea: `${gridIndex.rowStart}/${gridIndex.rowEnd}/${gridIndex.columnStart}/${gridIndex.columnEnd}`,
      }}
    />
  );
};

export default Fill;
