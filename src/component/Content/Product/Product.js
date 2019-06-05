import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const Product = (props) => {
  const { displayData, } = props;
  const { gridIndex, } = displayData;
  return (
    <div
      className={styles.product_style}
      style={{
        display: 'flex',
        backgroundImage: `url(./image/${displayData.image}.jpg)`,
        gridArea: `${gridIndex.rowStart}/${gridIndex.columnStart}/${gridIndex.rowEnd}/${gridIndex.columnEnd}`,
        zIndex: displayData.zIndex,
      }}
    >
      <Link to="productList" style={{ display: 'block', height: '100%', width: '100%', }} />
    </div>
  );
};

export default Product;
