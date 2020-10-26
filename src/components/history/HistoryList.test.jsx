import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList'

describe('HistoryItem component', () => {
  afterAll(() => cleanup());
  
  it('displays a history item', () => {
    const { asFragment } = render(<HistoryList
      history={[
        {
          url: "www.website.com",
          method: "GET"
        },
        { 
          url: "www.another.com",
          method: "PUT"

        },
        {
          url: "www.there.com",
          method: "DELETE"
        }
      ]}
    
      />);
      expect(asFragment()).toMatchSnapshot();
  })
})
