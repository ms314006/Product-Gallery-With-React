import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Text = (props) => {
  const { displayData, } = props;
  const { gridIndex, position, } = displayData;

  const getStyleForKind = (kind) => {
    switch (kind) {
      case 'title':
        return styles.text_style;
      case 'minorTitle':
        return styles.minor_title_style;
      case 'page':
        return styles.page_style;
      case 'comment':
        return styles.comment_style;
      case 'describe':
        return styles.describe_style;
      default:
        return null;
    }
  };

  return (
    <div
      className={styles.text_block}
      style={{
        top: `${position.top || 0}px`,
        bottom: `${position.bottom || 0}px`,
        left: `${position.left || 0}px`,
        right: `${position.right || 0}px`,
        gridArea: `${gridIndex.rowStart}/${gridIndex.columnStart}/${gridIndex.rowEnd}/${gridIndex.columnEnd}`,
        zIndex: displayData.zIndex,
        transform: `rotate(${displayData.rotate || 0}deg)`,
      }}
    >
      <div className={getStyleForKind(displayData.kind)} text={displayData.content}>
        {displayData.content}
      </div>
    </div>
  );
};

Text.propTypes = {
  displayData: PropTypes.shape({}),
};

Text.defaultProps = {
  displayData: {},
};

export default Text;
