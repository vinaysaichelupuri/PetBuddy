import React, { useState } from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { requestPermissions } from '../permissions/ImagePermission';
import ImageCropPicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import axios from 'axios';
import { useGlobalContext } from '../context/GlobalContext';

export function AddGallery({navigation}: {navigation: any}) {
    const {username,petName,setImage} = useGlobalContext()
    const handleOpenGallery = async () => {
          const hasPermission = await requestPermissions();
          if (hasPermission) {
            Alert.alert(
              'Permission Denied',
              'We need access to your photos to select an image.'
            );
            return;
          }
          const pickedImage = await ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          });
    
          const source: string = pickedImage.path;
          const base64Image: string = await RNFS.readFile(source, 'base64');
          const imageData = `data:image/jpeg;base64,${base64Image}`
          const response = await axios.post('http://localhost:5001/api/addGallery', { 
            username: username,
            petName:petName,
            path:imageData
          });
      };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.subContainer} onPress={handleOpenGallery} testID='image'>
        <Text style={styles.text}>Add Photos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    width: '100%',
    justifyContent:"center",
    alignItems:"center"
  },
  subContainer: {
    height:40,
    width:"40%",
    backgroundColor:"forestgreen",
     justifyContent:"center",
    alignItems:"center",
    borderRadius:20
  },
  text: {
    color:"white",
    fontSize:20,
    fontFamily:"bold",
    fontWeight:"600"
  },
});
