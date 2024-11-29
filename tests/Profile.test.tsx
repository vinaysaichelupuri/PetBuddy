import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Profile} from '../screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {useGlobalContext} from '../context/GlobalContext';
jest.mock('../context/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
}));
describe('Profile Component', () => {
  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      username: 'testuser',
    });
  });
  const mockNavigation = {navigate: jest.fn(), replace: jest.fn()};

  it('renders correctly', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Profile navigation={mockNavigation} />
      </NavigationContainer>,
    );

    expect(getByTestId('userImage')).toBeTruthy();
    expect(getByTestId('signOutText')).toBeTruthy();
    expect(getByTestId('signOutImage')).toBeTruthy();
    expect(getByTestId('emailImage')).toBeTruthy();
    expect(getByTestId('emailText')).toBeTruthy();
    expect(getByTestId('callImage')).toBeTruthy();
    expect(getByTestId('callText')).toBeTruthy();
    expect(getByTestId('aboutImage')).toBeTruthy();
    expect(getByTestId('aboutText')).toBeTruthy();
    expect(getByTestId('nextImage')).toBeTruthy();
    expect(getByTestId('myPets')).toBeTruthy();
    
    expect(getByTestId('locationImage')).toBeTruthy();
    expect(getByTestId('locationText')).toBeTruthy();
  });

  it('navigates to Login screen on button press', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Profile navigation={mockNavigation} />
      </NavigationContainer>,
    );

    fireEvent.press(getByTestId('homeNavigation'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
  });
  it('navigates to Login screen on button press', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Profile navigation={mockNavigation} />
      </NavigationContainer>,
    );

    fireEvent.press(getByTestId('addPetNavigation'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddPet');
  });
  it('navigates to Login screen on button press', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Profile navigation={mockNavigation} />
      </NavigationContainer>,
    );

    fireEvent.press(getByTestId('signOut'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });
});
