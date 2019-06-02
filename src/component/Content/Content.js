import React from 'react';
import Border from './Border';
import Fill from './Fill';

const Content = (props) => {

  const { displayData, } = props;

  const getDisplayData = () => {
    switch (displayData.type) {
      case 'border':
        return <Border gridIndex={displayData.gridIndex} />;
      case 'fill':
        return <Fill gridIndex={displayData.gridIndex} />;
      default:
        return null;
    }
  };

  return getDisplayData();
};

export default Content;
