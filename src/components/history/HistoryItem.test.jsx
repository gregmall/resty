import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem'

describe('HistoryItem component', () => {
  afterAll(() => cleanup());
  
  it('displays a history item', () => {
    const { asFragment } = render(<HistoryItem
      url="www.awebwsite.com"
      method="GET"
      />);
      expect(asFragment()).toMatchSnapshot();
  })
})
