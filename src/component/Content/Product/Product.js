import React from 'react';
import styles from './index.scss';

const Product = (props) => {
  const { displayData, } = props;
  const { gridIndex, } = displayData;
  return (
    <div
      className={styles.product_style}
      style={{
        backgroundImage: `url(./image/${displayData.image}.jpg)`,
        gridArea: `${gridIndex.rowStart}/${gridIndex.columnStart}/${gridIndex.rowEnd}/${gridIndex.columnEnd}`,
        zIndex: displayData.zIndex,
      }}
    />
  );
};

export default Product;
