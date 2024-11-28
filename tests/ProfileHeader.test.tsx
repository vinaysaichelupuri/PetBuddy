
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProfileHeader } from '../components/ProfileHeader';
import { useGlobalContext } from '../context/GlobalContext';
jest.mock('../context/GlobalContext', () => ({
    useGlobalContext: jest.fn(),
  }));
describe('Profile Header Component', () => {
    beforeEach(() => {
        (useGlobalContext as jest.Mock).mockReturnValue({
            username: '',
          });
      });
    const mockNavigation = { navigate: jest.fn() };

    it('renders correctly', () => {
        const {  getByTestId } = render(<ProfileHeader navigation={mockNavigation} />);
        expect(getByTestId('image')).toBeTruthy();
        expect(getByTestId('name')).toBeTruthy();


    });

    it('navigates to Login screen on button press', () => {
        const { getByTestId } = render(<ProfileHeader navigation={mockNavigation} />);

        fireEvent.press(getByTestId('handleProfile'));

        expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
    });
});