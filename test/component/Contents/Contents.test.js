import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import { createMemoryHistory } from 'history';
import { Router, HashRouter } from 'react-router-dom';
import Contents from '../../../src/component/Contents';

expect.extend({ toBeInTheDocument, });

describe('<Contents />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正確 render', () => {
    const { getByTestId, queryByTestId, } = render(
      <HashRouter>
        <Contents />
      </HashRouter>
    );

    expect(getByTestId('productContentBlock')).toBeInTheDocument();
    expect(queryByTestId('productImformationBlock')).toBeNull();
  });

  test('測試路由改變，畫面會不會跟著變', () => {
    const route = '/';
    const history = createMemoryHistory({ initialEntries: [route], });

    const { getByTestId, getAllByTestId, queryByTestId, } = render(
      <Router history={history}>
        <Contents />
      </Router>
    );
    expect(getByTestId('productContentBlock')).toBeInTheDocument();
    expect(queryByTestId('productImformationBlock')).toBeNull();
    fireEvent.click(getAllByTestId('productLink')[0]);
    expect(queryByTestId('productContentBlock')).toBeNull();
    expect(getByTestId('productImformationBlock')).toBeInTheDocument();
  });
});
