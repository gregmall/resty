import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Resty from './Resty';
import fetchApi from '../services/fetch-api';
jest.mock('../services/fetch-api');

describe('Resty container', () => {
  it('calls the api service and displays the result', async() => {
    fetchApi.mockResolvedValue([
      { 'result': 'json'}
    ]);
    render(<Resty />);

    const button = screen.getByTestId('submit')

    await fireEvent.click(button)

    const resultDisplay = await screen.findByTestId('display')

    expect(resultDisplay).not.toBeEmptyDOMElement();
  });




});
