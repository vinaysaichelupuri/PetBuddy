
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Introduction } from '../screens/Introduction';
import { AddPetComponent } from '../components/AddPetComponent';

describe('Add pet component', () => {
    const mockNavigation = { navigate: jest.fn() };

    it('renders correctly', () => {
        const {  getByTestId } = render(<AddPetComponent navigation={mockNavigation} />);

        expect(getByTestId('image')).toBeTruthy();
        expect(getByTestId('text')).toBeTruthy();
        expect(getByTestId('handlePet')).toBeTruthy();


    });

    it('navigates to Login screen on button press', () => {
        const { getByTestId } = render(<AddPetComponent navigation={mockNavigation} />);
        fireEvent.press(getByTestId('handlePet'));
        expect(mockNavigation.navigate).toHaveBeenCalledWith('AddPet');
    });
});