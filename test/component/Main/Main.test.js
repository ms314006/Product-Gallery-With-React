import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Main from '../../../src/component/Main';

expect.extend({ toBeInTheDocument, });

describe('<Main />', () => {
  afterEach(() => {
    cleanup();
  });

  test('確認有沒有正確 render', () => {
    const { getByTestId, } = render(<Main />);

    expect(getByTestId('mainBlock')).toBeInTheDocument();
  });
});
