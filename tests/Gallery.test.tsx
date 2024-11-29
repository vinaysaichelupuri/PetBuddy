
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { Gallery } from '../screens/Gallery';
import { useGlobalContext } from '../context/GlobalContext';
import axios from 'axios';
jest.mock('../context/GlobalContext', () => ({
    useGlobalContext: jest.fn(),
  }));
  const mockNavigation = 
  { navigate: jest.fn(),
   replace:jest.fn() };

   jest.mock('axios');

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
  

  const mockGalleryData = [
    { path: 'photo.jpg' },
  
  ];
  
  describe('Gallery Screen', () => {
    beforeEach(() => {
      (useGlobalContext as jest.Mock).mockReturnValue({
        username: 'testUser',
        petName: 'testPet',
      });
      
      (axios.post as jest.Mock).mockResolvedValue({ data: mockGalleryData });
    });
  
    it('renders correctly and displays images', async () => {
      const { getByTestId, findAllByTestId } = render(<Gallery navigation={mockNavigation} />);
      
      await waitFor(() => {
        expect(axios.post).toHaveBeenCalledTimes(1); 
        expect(getByTestId('photo')).toBeTruthy(); 
      });
  
      const images = await findAllByTestId('photo');
      expect(images.length).toBe(mockGalleryData.length); 
    });
  });
  