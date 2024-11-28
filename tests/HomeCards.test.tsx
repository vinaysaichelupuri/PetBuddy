import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeCards } from '../components/HomeCards';
import { useGlobalContext } from '../context/GlobalContext';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('../context/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
}));

describe('Home Screen', () => {
  const mockNavigation = { navigate: jest.fn() };
  const setPetName = jest.fn();
  const setPetData = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it('navigates to PetInfo screen when a pet card is pressed', async () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      username: 'testUser',
      petData: [
        { petName: 'Buddy', petPhoto: 'dog.jpg', breedName: 'Golden Retriever' },
      ],
      setPetData,
      setPetName,
    });

    const { getByTestId } = render(
      <NavigationContainer>
        <HomeCards navigation={mockNavigation} />
      </NavigationContainer>,
    );

    fireEvent.press(getByTestId('handleNavigation'));
    expect(setPetName).toHaveBeenCalledWith('Buddy'); 
    expect(mockNavigation.navigate).toHaveBeenCalledWith('PetInfo');
  });

  it('renders "No pets available" view when petData is empty', () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      username: '',
      petData: [],
      setPetData,
      setPetName,
    });

    const { getByTestId } = render(
      <NavigationContainer>
        <HomeCards navigation={mockNavigation} />
      </NavigationContainer>,
    );

    expect(getByTestId('noPetImage')).toBeTruthy();
    expect(getByTestId('noPetText')).toBeTruthy();  
  });
});