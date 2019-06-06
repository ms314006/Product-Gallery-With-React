import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Title from '../Title';
import Logo from '../Title/Logo';
import Content from '../Content';
import styles from './index.scss';
import pageData from '../../static/pageData.js';
import imformationData from '../../static/imformationData.js';

const ProductList = (props) => {
  const { data, } = props;
  return (
    <>
      <Title />
      {
        data.map(datum => <Content key={datum.id} displayData={datum} />)
      }
    </>
  );
};

const ProductImformation = (props) => {
  const { data, } = props;
  return (
    <>
      <div style={{ gridArea: '2 / 2 / 3 / 6', }}>
        <Link to="/" style={{ textDecoration: 'none', }}>
          <span style={{ fontWeight: 'bold', color: '#000000', }}>←</span>
          &nbsp;
          <Logo />
        </Link>
      </div>
      {
        data.map(datum => <Content key={datum.id} displayData={datum} />)
      }
    </>
  );
};

const Contents = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/">
        <div className={styles.contents_block} data-testid="productContentBlock">
          <ProductList data={pageData} />
        </div>
      </Route>
      <Route path="/productImformation">
        <div className={styles.contents_block} data-testid="productImformationBlock">
          <ProductImformation data={imformationData} />
        </div>
      </Route>
    </Switch>
  </HashRouter>
);

export default Contents;
