import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import { createMemoryHistory } from 'history';
import { Router, HashRouter } from 'react-router-dom';
import Product from '../../../../src/component/Content/Product';

expect.extend({ toBeInTheDocument, });

describe('<Product />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render ', () => {
    const displayData = {
      id: 1,
      type: 'product',
      gridIndex: {
        rowStart: '5', rowEnd: '13', columnStart: '1', columnEnd: '9',
      },
      image: 'img01',
      zIndex: 10,
    };

    const { getByTestId, } = render(
      <HashRouter>
        <Product displayData={displayData} />
      </HashRouter>
    );

    expect(getByTestId('productBlock')).toBeInTheDocument();
  });

  test('確認路由有沒有改變', () => {
    const displayData = {
      id: 1,
      type: 'product',
      gridIndex: {
        rowStart: '5', rowEnd: '13', columnStart: '1', columnEnd: '9',
      },
      image: 'img01',
      zIndex: 10,
    };

    const route = '/';
    const history = createMemoryHistory({ initialEntries: [route], });

    const { getByTestId, } = render(
      <Router history={history}>
        <Product displayData={displayData} />
      </Router>
    );

    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByTestId('productLink'));
    expect(history.location.pathname).toBe('/productImformation');
  });
});
