import React from 'react';
import { render, cleanup } from '@testing-library/react';
import  Controller from './controller';

describe('Controller component', () => {
  afterEach(() => cleanup());

  it('renders Controller', () => {
    const { asFragment } = render(<Controller
      text="Test Display"
      handleChange={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
