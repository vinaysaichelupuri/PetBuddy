import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TrackModal } from '../model/trackModal';
import { useGlobalContext } from '../context/GlobalContext';

jest.mock('../context/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
}));

describe('TrackModal', () => {
  const navigation = { navigate: jest.fn() };

  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      trackModal: true,
      setTrackModal: jest.fn(),
    });
  });

  it('renders modal and navigates to Activity', () => {
    const { getByText } = render(<TrackModal navigation={navigation} />);
    const activityButton = getByText('Activity');

    fireEvent.press(activityButton);

    expect(navigation.navigate).toHaveBeenCalledWith('Activity');
    
  });

  it('navigates to Reminder and closes the modal', () => {
    const { getByText } = render(<TrackModal navigation={navigation} />);
    const reminderButton = getByText('Reminders');

    fireEvent.press(reminderButton);

    expect(navigation.navigate).toHaveBeenCalledWith('Reminder');
  });
});