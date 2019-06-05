import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Logo from '../../../../src/component/Title/Logo';

expect.extend({ toBeInTheDocument, });

describe('<Logo />', () => {
  afterEach(() => {
    cleanup();
  });

  test('確認有沒有正確 render', () => {
    const { getByTestId, } = render(<Logo />);

    expect(getByTestId('logoBlock')).toBeInTheDocument();
  });
});
