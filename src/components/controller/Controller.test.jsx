import React from 'react';
import { render, cleanup } from '@testing-library/react';
import  Controller from './Controller';

describe('Controller component', () => {
  afterEach(() => cleanup());

  it('renders Controller', () => {
    const { asFragment } = render(<Controller
      url="www.url.com"
      text="Test Display"
      method="method"
      handleChange={() => {}}
      handleSubmit={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
