import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import { AddGallery } from '../components/AddGallery';
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
const mockNavigation = { navigate: jest.fn()};

jest.mock('../permissions/ImagePermission', () => ({
    requestPermissions: jest.fn(),
  }));
  
  
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
  

describe('Add Gallery Component', () => {
    beforeEach(() => {
        (useGlobalContext as jest.Mock).mockReturnValue({
            username: '',
            petName:"",
          });
      });

  it('should alert if permission is denied', async () => {
    (requestPermissions as jest.Mock).mockResolvedValue(true); 
    const {getByTestId} = render(
      <NavigationContainer>
        <AddGallery navigation={mockNavigation} />
    </NavigationContainer>,
  );
    fireEvent.press(getByTestId("image"));
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Permission Denied',
        'We need access to your photos to select an image.',
      );
    });
  });
  it('handles image selection', async () => {
    (requestPermissions as jest.Mock).mockResolvedValue(false); 

    const {getByTestId} = render(
        <NavigationContainer>
          <AddGallery navigation={mockNavigation} />
      </NavigationContainer>,
    );
    fireEvent.press(getByTestId('image')); 
    
    await waitFor(() => expect(ImageCropPicker.openPicker).toHaveBeenCalled());
  });


  it('handles image selection', async () => {
    (requestPermissions as jest.Mock).mockResolvedValue(false); 

    const { getByTestId } = render(<AddGallery navigation={{ navigate: jest.fn() }} />);
    
    fireEvent.press(getByTestId('image')); 
    
    await waitFor(() => expect(ImageCropPicker.openPicker).toHaveBeenCalled());
  });

    
  });


