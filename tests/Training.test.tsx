
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Training } from '../screens/Training';
import { Linking } from 'react-native';

describe('Introduction Component', () => {

    jest.mock('react-native', () => {
        const RN = jest.requireActual('react-native');
        return {
          ...RN,
          Linking: {
            openURL: jest.fn(),
          },
        };
      });
      
    it('renders correctly', () => {
        const {  getByTestId } = render(<Training />);

        expect(getByTestId('text')).toBeTruthy();
        expect(getByTestId('text1')).toBeTruthy();
        expect(getByTestId('text2')).toBeTruthy();
        expect(getByTestId('text3')).toBeTruthy();
        expect(getByTestId('text4')).toBeTruthy();
        expect(getByTestId('text5')).toBeTruthy();
        expect(getByTestId('text6')).toBeTruthy();
        expect(getByTestId('text7')).toBeTruthy();
        expect(getByTestId('text8')).toBeTruthy();
        expect(getByTestId('text9')).toBeTruthy();


    });

    it('navigates to Training screen on link press', () => {
        const { getByTestId } = render(<Training  />);

        fireEvent.press(getByTestId('link'));
        expect(Linking.openURL).toHaveBeenCalledWith('https://youtu.be/jFMA5ggFsXU?si=cMljN3XdmvzjWBW9');


    });
    it('navigates to Training screen on link press', () => {
        const { getByTestId } = render(<Training  />);
        fireEvent.press(getByTestId('link1'));
        expect(Linking.openURL).toHaveBeenCalledWith('https://youtu.be/jFMA5ggFsXU?si=cMljN3XdmvzjWBW9');



    });
});