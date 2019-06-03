import React from 'react';
import Title from '../Title';
import Content from '../Content';
import styles from './index.scss';
import pageData from '../../static/pageData.js';

const Contents = () => (
  <div className={styles.contents_block}>
    <Title />
    {
      pageData.map(datum => <Content key={datum.id} displayData={datum} />)
    }
  </div>
);

export default Contents;
