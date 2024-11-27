
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Introduction } from '../screens/Introduction';

describe('Introduction Component', () => {
    const mockNavigation = { replace: jest.fn() };

    it('renders correctly', () => {
        const {  getByTestId } = render(<Introduction navigation={mockNavigation} />);

        expect(getByTestId('dogImage')).toBeTruthy();
        expect(getByTestId('welcomeText')).toBeTruthy();
        expect(getByTestId('text')).toBeTruthy();
        expect(getByTestId('button')).toBeTruthy();
        expect(getByTestId('buttonText')).toBeTruthy();
        expect(getByTestId('buttonImage')).toBeTruthy();

    });

    it('navigates to Login screen on button press', () => {
        const { getByText } = render(<Introduction navigation={mockNavigation} />);

        fireEvent.press(getByText('Get started'));

        expect(mockNavigation.replace).toHaveBeenCalledWith('Login');
    });
});