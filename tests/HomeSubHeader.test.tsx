
import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeSubHeader } from '../components/HomeSubHeader';

describe('Home subHeader Header Component', () => {
    it('renders correctly', () => {
        const {  getByTestId } = render(<HomeSubHeader  />);
        expect(getByTestId('image')).toBeTruthy();
        expect(getByTestId('name')).toBeTruthy();
    });
});