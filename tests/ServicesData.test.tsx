import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ServicesData } from '../components/ServicesData';
import { useGlobalContext } from '../context/GlobalContext';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('../context/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
}));

describe('Home Screen', () => {
  const setPetName = jest.fn();
  const setPetData = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it('navigates to PetInfo screen when a pet card is pressed', async () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      data: [
        { image: 'Buddy.jpg', name: 'dog', study: 'Veternity',rating:"5", numberOfReviews:"100",experience:"12",distance:"12Km",price:"500",available:24/7},
      ],
      setPetData,
      setPetName,
    });

    const { getByTestId } = render(
      <NavigationContainer>
        <ServicesData />
      </NavigationContainer>,
      
    );
    expect(getByTestId('image')).toBeTruthy();
    expect(getByTestId('name')).toBeTruthy();
    expect(getByTestId('study')).toBeTruthy();
    expect(getByTestId('rating')).toBeTruthy();
    expect(getByTestId('reviews')).toBeTruthy();
    expect(getByTestId('experince')).toBeTruthy();
    expect(getByTestId('distance')).toBeTruthy();
    expect(getByTestId('price')).toBeTruthy();
    expect(getByTestId('available')).toBeTruthy();

  });

  it('renders "No pets available" view when petData is empty', () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      data: [],
    });

    const { getByTestId } = render(
      <NavigationContainer>
        <ServicesData />
      </NavigationContainer>,
    );

    expect(getByTestId('headerText')).toBeTruthy();
  });
});