import React from 'react';
import styles from './index.scss';

const Content = (props) => {

  const { displayData, } = props;
  const { gridIndex, } = displayData;

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

  return (
    <div
      className={getDisplayStyle()}
      style={{
        gridArea: `${gridIndex.rowStart}/${gridIndex.columnStart}/${gridIndex.rowEnd}/${gridIndex.columnEnd}`,
      }}
    />
  );
};

export default Content;
