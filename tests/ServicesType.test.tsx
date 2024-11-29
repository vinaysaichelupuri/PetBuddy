
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import { ServicesTypes } from '../components/ServicesTypes'; 
import { useGlobalContext } from '../context/GlobalContext';

jest.mock('axios');
jest.mock('../context/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
}));

jest.mock('react-native/Libraries/Image/Image', () => ({
  ...jest.requireActual('react-native/Libraries/Image/Image'),
  default: 'mocked-image',
}));

describe('ServicesTypes Component', () => {
  const setData = jest.fn();

  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({ setData });
  });

  it('sets veternity data when corresponding button is pressed', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: ['Vet Data'] }) 
          .mockResolvedValueOnce({ data: ['Grooming Data'] }) 
          .mockResolvedValueOnce({ data: ['Boarding Data'] }) 
          .mockResolvedValueOnce({ data: ['Training Data'] });

    const { getByTestId } = render(<ServicesTypes />);

    fireEvent.press(getByTestId('veternity'));

    await waitFor(() => {
      expect(setData).toHaveBeenCalled();
    });
  });

  it('sets grooming data when corresponding button is pressed', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: ['Vet Data'] }) 
          .mockResolvedValueOnce({ data: ['Grooming Data'] }) 
          .mockResolvedValueOnce({ data: ['Boarding Data'] }) 
          .mockResolvedValueOnce({ data: ['Training Data'] }); 

    const { getByTestId } = render(<ServicesTypes />);

    fireEvent.press(getByTestId('grooming'));

    await waitFor(() => {
      expect(setData).toHaveBeenCalled();
    });
  });

  it('sets boarding data when corresponding button is pressed', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: ['Vet Data'] })  
          .mockResolvedValueOnce({ data: ['Grooming Data'] }) 
          .mockResolvedValueOnce({ data: ['Boarding Data'] }) 
          .mockResolvedValueOnce({ data: ['Training Data'] }); 

    const { getByTestId } = render(<ServicesTypes />);

    fireEvent.press(getByTestId('boarding'));

    await waitFor(() => {
      expect(setData).toHaveBeenCalled();
    });
  });

  it('sets training data when corresponding button is pressed', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: ['Vet Data'] }) 
          .mockResolvedValueOnce({ data: ['Grooming Data'] }) 
          .mockResolvedValueOnce({ data: ['Boarding Data'] }) 
          .mockResolvedValueOnce({ data: ['Training Data'] }); 

    const { getByTestId } = render(<ServicesTypes />);

    fireEvent.press(getByTestId('training'));

    await waitFor(() => {
      expect(setData).toHaveBeenCalled();
    });
  });
});
