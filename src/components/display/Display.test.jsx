import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display'

describe('Display component', () => {
  afterAll(() => cleanup());
  
  it('displays to the screen', () => {
    const { asFragment } = render(<Display
      result="{result}"
      />);
      expect(asFragment()).toMatchSnapshot();
  })
})

