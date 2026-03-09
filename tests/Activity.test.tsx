import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { useGlobalContext } from '../context/GlobalContext';
import { Activity } from '../screens/Activity';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

jest.mock('../context/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
}));
jest.mock('axios');
describe('Activity Screen', () => {
  const mockNavigation = { navigate: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();

    (useGlobalContext as jest.Mock).mockReturnValue({
      username: 'testUser',
      petName: 'Petter',
    });
  });

  it('renders activity data correctly', async () => {
    (axios.post as jest.Mock).mockResolvedValue({
        data: [
          { activityName: 'Walk', startTime: new Date ('2023-12-02T10:00:00Z'), endTime: new Date('2023-12-02T11:00:00Z') },
        ]
      });
      
    const { getByTestId } = render(
      <NavigationContainer>
        <Activity navigation={mockNavigation} />
      </NavigationContainer>,
    );

    await waitFor(() => getByTestId('activityName'));
    expect(getByTestId('activityName')).toBeTruthy();
    expect(getByTestId('time')).toBeTruthy();
  });

  it('renders "No Activity found" when activityData is empty', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: [] });

    const { getByTestId } = render(
      <NavigationContainer>
        <Activity navigation={mockNavigation} />
      </NavigationContainer>,
    );

    await waitFor(() => getByTestId('noActivityText'));

    expect(getByTestId('noActivityText')).toBeTruthy();
  });
});
