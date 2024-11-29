import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { AddPet } from '../screens/AddPet'; 
import axios from 'axios';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { requestPermissions } from '../permissions/ImagePermission';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useGlobalContext } from '../context/GlobalContext';

jest.mock('axios');
jest.spyOn(Alert, 'alert');


jest.mock('../context/GlobalContext', () => ({
    useGlobalContext: jest.fn(),
  }));
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
    beforeEach(() => {
        (useGlobalContext as jest.Mock).mockReturnValue({
          username: '',
         
        });
      });



  it('renders correctly', () => {
    const {getByTestId} = render(
        <NavigationContainer>
          <AddPet navigation={mockNavigation} />
      </NavigationContainer>,
    );
  
    expect(getByTestId('name')).toBeTruthy();
    expect(getByTestId('age')).toBeTruthy();
    expect(getByTestId('breadname')).toBeTruthy();
    expect(getByTestId('color')).toBeTruthy();
    expect(getByTestId('number')).toBeTruthy();
    expect(getByTestId('gender')).toBeTruthy();
    expect(getByTestId('height')).toBeTruthy();
    expect(getByTestId('weight')).toBeTruthy();
    expect(getByTestId('age')).toBeTruthy();
    expect(getByTestId('remarks')).toBeTruthy();

  });

  it('handles registration success', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 200 });

    const mockReplace = jest.fn();
    const { getByText, getByTestId } = render(<AddPet navigation={{ replace: mockReplace }} />);
    
    fireEvent.changeText(getByTestId('name'), 'peter');
    fireEvent.changeText(getByTestId('breadname'), 'local');
    fireEvent.changeText(getByTestId('color'), 'black');
    fireEvent.changeText(getByTestId('number'), '11234567');
    fireEvent.changeText(getByTestId('gender'), 'male');
    fireEvent.changeText(getByTestId('height'), '10');
    fireEvent.changeText(getByTestId('weight'), '10');
    fireEvent.changeText(getByTestId('age'), '10');
    fireEvent.changeText(getByTestId('remarks'), 'no remarks');


    fireEvent.press(getByTestId('addpet'));

    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:5001/api/petRegister', expect.any(Object)));
    expect(mockReplace).toHaveBeenCalledWith('Home');
  });

  it('handles registration failure', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 200 });

    const {getByTestId} = render(
        <NavigationContainer>
          <AddPet navigation={mockNavigation} />
      </NavigationContainer>,
    );
    fireEvent.press(getByTestId('addpet'));

    await waitFor(() => expect(axios.post).toHaveBeenCalled());
  });
  it('handles registration failure', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 400 });

    const {getByTestId} = render(
        <NavigationContainer>
          <AddPet navigation={mockNavigation} />
      </NavigationContainer>,
    );
    fireEvent.press(getByTestId('addpet'));
    await waitFor(() => expect(axios.post).toHaveBeenCalled());
  });
  it('handles registration failure', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 401 });

    const {getByTestId} = render(
        <NavigationContainer>
          <AddPet navigation={mockNavigation} />
      </NavigationContainer>,
    );
    fireEvent.press(getByTestId('addpet'));
    await waitFor(() => expect(axios.post).toHaveBeenCalled());
  });


  it('should alert if permission is denied', async () => {
    (requestPermissions as jest.Mock).mockResolvedValue(true); 
    const {getByTestId} = render(
      <NavigationContainer>
        <AddPet navigation={mockNavigation} />
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

    const { getByTestId } = render(<AddPet navigation={{ navigate: jest.fn() }} />);
    
    fireEvent.press(getByTestId('photo')); 
    
    await waitFor(() => expect(ImageCropPicker.openPicker).toHaveBeenCalled());
  });


  it('handles image selection', async () => {
    (requestPermissions as jest.Mock).mockResolvedValue(false); 

    const { getByTestId } = render(<AddPet navigation={{ navigate: jest.fn() }} />);
    
    fireEvent.press(getByTestId('photo')); 
    
    await waitFor(() => expect(ImageCropPicker.openPicker).toHaveBeenCalled());
  });

    
  });


