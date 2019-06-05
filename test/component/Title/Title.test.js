import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Title from '../../../src/component/Title';

expect.extend({ toBeInTheDocument, });

describe('<Title />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試 Title 是否正常 render', () => {
    const { getByTestId, } = render(<Title />);

    expect(getByTestId('titleBlock')).toBeInTheDocument();
  });
});
