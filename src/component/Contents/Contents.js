import React from 'react';
import Content from '../Content';
import styles from './index.scss';

const falseData = [
  {
    type: 'border',
    gridIndex: {
      rowStart: '1', rowEnd: '2', columnStart: '1', columnEnd: '2',
    },
  },
  {
    type: 'fill',
    gridIndex: {
      rowStart: '3', rowEnd: '4', columnStart: '5', columnEnd: '7',
    },
  },
  {
    type: 'line',
    gridIndex: {
      rowStart: '2', rowEnd: '4', columnStart: '1', columnEnd: '2',
    },
  }
];

const Contents = () => (
  <div className={styles.contents_block}>
    {
      falseData.map(datum => <Content key={datum.type} displayData={datum} />)
    }
  </div>
);

export default Contents;
