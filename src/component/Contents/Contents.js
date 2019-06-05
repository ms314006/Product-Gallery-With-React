import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Title from '../Title';
import Content from '../Content';
import styles from './index.scss';
import pageData from '../../static/pageData.js';

const ProductList = () => (
  <>
    <Title />
    {
      pageData.map(datum => <Content key={datum.id} displayData={datum} />)
    }
  </>
);

const Test = () => (
  <div>1111111111111</div>
);

const Contents = () => (
  <HashRouter>
    <div className={styles.contents_block}>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/productList" component={Test} />
      </Switch>
    </div>
  </HashRouter>
);

export default Contents;
