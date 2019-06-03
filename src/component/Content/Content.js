import React from 'react';
import Product from './Product';
import styles from './index.scss';

const Content = (props) => {

  const { displayData, } = props;

  const getDisplayStyle = () => {
    switch (displayData.type) {
      case 'border':
        return styles.border_style;
      case 'fill':
        return styles.fill_style;
      case 'line':
        return styles.line_style;
      default:
        return null;
    }
  };

  const getDisplayBlock = () => {
    const { gridIndex, } = displayData;

    switch (displayData.type) {
      case 'product':
        return <Product displayData={displayData} />;
      default:
        return (
          <div
            className={getDisplayStyle()}
            style={{
              gridArea: `${gridIndex.rowStart}/${gridIndex.columnStart}/${gridIndex.rowEnd}/${gridIndex.columnEnd}`,
              zIndex: displayData.zIndex,
            }}
          />
        );
    }
  };

  return getDisplayBlock();
};

export default Content;
