
import React from 'react';
import { render } from '@testing-library/react-native';
import { Footer } from '../components/Footer';

describe('Footer Component', () => {
    it('renders correctly', () => {
        const {  getByTestId } = render(<Footer  />);
        expect(getByTestId('text')).toBeTruthy();
    });
});