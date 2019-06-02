import React from 'react';
import styles from './index.scss';

const Border = (props) => {
  const { gridIndex, } = props;
  return (
    <div
      className={styles.border_style}
      style={{
        gridArea: `${gridIndex.rowStart}/${gridIndex.rowEnd}/${gridIndex.columnStart}/${gridIndex.columnEnd}`,
      }}
    />
  );
};

export default Border;
