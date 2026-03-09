import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Introduction } from '../screens/Introduction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGlobalContext } from '../context/GlobalContext';
jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
  }));
  jest.mock('../context/GlobalContext', () => ({
    useGlobalContext: jest.fn(),
  }));
describe('Introduction Component', () => {
  const mockNavigation = { replace: jest.fn() };
  const setUsername = jest.fn();
  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      username: 'vinay',
      setUsername
     
    });
  });

  it('renders correctly', () => {
    const { getByTestId } = render(<Introduction navigation={mockNavigation} />);

    expect(getByTestId('dogImage')).toBeTruthy();
    expect(getByTestId('welcomeText')).toBeTruthy();
    expect(getByTestId('text')).toBeTruthy();
    expect(getByTestId('button')).toBeTruthy();
    expect(getByTestId('buttonText')).toBeTruthy();
    expect(getByTestId('buttonImage')).toBeTruthy();
  });

  it('navigates to Home if username exists in AsyncStorage', async () => {
    ( AsyncStorage.getItem as jest.Mock).mockResolvedValue('user123');

    const { getByTestId } = render(<Introduction navigation={mockNavigation} />);

    await waitFor(() => expect(mockNavigation.replace).toHaveBeenCalledWith('Home'));
  });

  it('navigates to Login screen on button press', () => {
    const { getByText } = render(<Introduction navigation={mockNavigation} />);

    fireEvent.press(getByText('Get started'));

    expect(mockNavigation.replace).toHaveBeenCalledWith('Login');
  });
});
