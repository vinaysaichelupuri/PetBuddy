import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Register } from '../screens/Register'; 
import axios from 'axios';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { requestPermissions } from '../permissions/ImagePermission';
import ImageCropPicker from 'react-native-image-crop-picker';

jest.mock('axios');
jest.spyOn(Alert, 'alert');



const mockNavigation = 
{ navigate: jest.fn(),
 replace:jest.fn() };

jest.mock('../permissions/ImagePermission', () => ({
    requestPermissions: jest.fn(),
  }));
  
const mockedPhoto = "data:image/jpeg;base64,mocked file content"; 
  
jest.mock('react-native-permissions', () => ({
    check: jest.fn(() => Promise.resolve('granted')),
    request: jest.fn(() => Promise.resolve('granted')),
    PERMISSIONS: {
      IOS: {
        PHOTO_LIBRARY: 'ios.permission.PHOTO_LIBRARY',
      },
    },
    RESULTS: {
      GRANTED: 'granted',
      DENIED: 'denied',
      BLOCKED: 'blocked',
    },
  }));
  
  
  
jest.mock('react-native-image-crop-picker', () => ({
    openPicker: jest.fn(() =>
      Promise.resolve({path: '/mock/path', mime: 'image/jpeg'}),
    ),
    openCamera: jest.fn(() =>
      Promise.resolve({path: '/mock/path', mime: 'image/jpeg'}),
    ),
    clean: jest.fn(() => Promise.resolve()),
    cleanSingle: jest.fn(() => Promise.resolve()),
  }));
  
  
  
jest.mock('react-native-fs', () => ({
    readDir: jest.fn(() => Promise.resolve([])),
    readFile: jest.fn(() => Promise.resolve('mocked file content')),
    writeFile: jest.fn(() => Promise.resolve()),
    unlink: jest.fn(() => Promise.resolve()),
    mkdir: jest.fn(() => Promise.resolve()),
    moveFile: jest.fn(() => Promise.resolve()),
  }));
  
  
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  

describe('Register Component', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(
        <NavigationContainer>
          <Register navigation={mockNavigation} />
      </NavigationContainer>,
    );
  
    expect(getByTestId('username')).toBeTruthy();
    expect(getByTestId('password')).toBeTruthy();
    expect(getByTestId('photo')).toBeTruthy();
    expect(getByTestId('confirmPassword')).toBeTruthy();
    expect(getByTestId('number')).toBeTruthy();
    expect(getByTestId('email')).toBeTruthy();

  });

  it('handles input changes', () => {
    const { getByPlaceholderText } = render(<Register navigation={{ navigate: jest.fn() }} />);
    
    fireEvent.changeText(getByPlaceholderText('Username'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Phone Number'), '1234567890');
    
    expect(getByPlaceholderText('Username').props.value).toBe('testuser');
    expect(getByPlaceholderText('Email').props.value).toBe('test@example.com');
    expect(getByPlaceholderText('Phone Number').props.value).toBe('1234567890');
  });



  it('handles registration success', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 200 });

    const mockReplace = jest.fn();
    const { getByText, getByPlaceholderText } = render(<Register navigation={{ replace: mockReplace }} />);
    
    fireEvent.changeText(getByPlaceholderText('Username'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Phone Number'), '1234567890');

    fireEvent.press(getByText('Submit'));

    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:5001/api/register', expect.any(Object)));
    expect(mockReplace).toHaveBeenCalledWith('Login');
  });

  it('handles registration failure', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 200 });

    const {getByText} = render(
        <NavigationContainer>
          <Register navigation={mockNavigation} />
      </NavigationContainer>,
    );
    fireEvent.press(getByText('Submit'));

    await waitFor(() => expect(axios.post).toHaveBeenCalled());
  });
  it('handles registration failure', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 400 });

    const {getByText} = render(
        <NavigationContainer>
          <Register navigation={mockNavigation} />
      </NavigationContainer>,
    );
    fireEvent.press(getByText('Submit'));

    await waitFor(() => expect(axios.post).toHaveBeenCalled());
  });


  it('handles Login screen', async () => {
    const {getByTestId} = render(
        <NavigationContainer>
          <Register navigation={mockNavigation} />
      </NavigationContainer>,
    );
    fireEvent.press(getByTestId('login'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });
  it('handles Login screen', async () => {
    const {getByTestId} = render(
        <NavigationContainer>
          <Register navigation={mockNavigation} />
      </NavigationContainer>,
    );
    fireEvent.press(getByTestId('register'));
    expect(mockNavigation.replace).toHaveBeenCalledWith('Login');
  });

  it('should alert if permission is denied', async () => {
    (requestPermissions as jest.Mock).mockResolvedValue(true); 
    const {getByTestId} = render(
      <NavigationContainer>
        <Register navigation={mockNavigation} />
    </NavigationContainer>,
  );
    fireEvent.press(getByTestId("photo"));
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Permission Denied',
        'We need access to your photos to select an image.',
      );
    });
  });
  it('handles image selection', async () => {
    (requestPermissions as jest.Mock).mockResolvedValue(false); 

    const { getByTestId } = render(<Register navigation={{ navigate: jest.fn() }} />);
    
    fireEvent.press(getByTestId('photo')); 
    
    await waitFor(() => expect(ImageCropPicker.openPicker).toHaveBeenCalled());
  });


  it('handles image selection', async () => {
    (requestPermissions as jest.Mock).mockResolvedValue(false); 

    const { getByTestId } = render(<Register navigation={{ navigate: jest.fn() }} />);
    
    fireEvent.press(getByTestId('photo')); 
    
    await waitFor(() => expect(ImageCropPicker.openPicker).toHaveBeenCalled());
  });

    
  });


