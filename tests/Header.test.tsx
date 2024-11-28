
import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from '../components/Header';

describe('Footer Component', () => {
    it('renders correctly', () => {
        const {  getByTestId } = render(<Header  />);
        expect(getByTestId('image')).toBeTruthy();
    });
});