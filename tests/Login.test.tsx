import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Login } from '../screens/Login'; 
import { useGlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import { Alert } from 'react-native';
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

jest.mock('../context/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
}));
jest.spyOn(Alert,'alert')

jest.mock('axios');

describe('Login Screen', () => {
  const mockNavigate = jest.fn();
  const setUsername = jest.fn();
  const setPassword = jest.fn();

  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      username: '',
      setUsername,
      password: '',
      setPassword,
    });
  });

  it('renders the login screen correctly', () => {
    const { getByTestId } = render(<Login navigation={{ replace: mockNavigate }} />);
    expect(getByTestId('logo')).toBeTruthy();
    expect(getByTestId('username')).toBeTruthy();
    expect(getByTestId('password')).toBeTruthy();
    expect(getByTestId('buttonLogin')).toBeTruthy();
    expect(getByTestId('buttonRegister')).toBeTruthy();
  });

  it('updates username and password fields', () => {
    const { getByTestId } = render(<Login navigation={{ replace: mockNavigate }} />);

    fireEvent.changeText(getByTestId('username'), 'testuser');
    fireEvent.changeText(getByTestId('password'), 'password123');

    expect(setUsername).toHaveBeenCalledWith('testuser');
    expect(setPassword).toHaveBeenCalledWith('password123');
  });

  it('navigates to Home on successful login', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 200 });

    const { getByTestId } = render(<Login navigation={{ replace: mockNavigate }} />);

    fireEvent.press(getByTestId('buttonLogin'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5001/api/login', {
        username: '',
        password: '',
      });
      expect(mockNavigate).toHaveBeenCalledWith('Home');
    });
  });

  it('shows alert on wrong credentials', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 401 });

    const { getByTestId } = render(<Login navigation={{ replace: mockNavigate }} />);

    fireEvent.press(getByTestId('buttonLogin'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(Alert.alert).toHaveBeenCalledWith('Wrong credentials');
    });
  });

  it('shows alert if no user is found', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 404 });
    const { getByTestId } = render(<Login navigation={{ replace: mockNavigate }} />);

    fireEvent.press(getByTestId('buttonLogin'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(Alert.alert).toHaveBeenCalledWith('No user found! Please register');
    });
  });

  it('navigates to Register screen when Register button is pressed', () => {
    const mockNavigateToRegister = jest.fn();
    const { getByTestId } = render(<Login navigation={{ navigate: mockNavigateToRegister }} />);

    fireEvent.press(getByTestId('buttonRegister'));
    expect(mockNavigateToRegister).toHaveBeenCalledWith('Register');
  });
});