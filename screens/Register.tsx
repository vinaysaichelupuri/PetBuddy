import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { requestPermissions } from '../permissions/ImagePermission';
import ImageCropPicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import axios from 'axios';
import { styles } from '../screenStyling/RegisterStyling';
export function Register({ navigation }: { navigation: any }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[confirmPassword] = useState('')
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [image, setImage] = useState('');
  const [normalImage, setNormalImage] = useState(require('../public/assets/addPhoto.png'));

  const handleLogin = () => {
    navigation.navigate('Login');
  };
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
      setImage(`data:image/jpeg;base64,${base64Image}`);
      setNormalImage({ uri: pickedImage.path }); 

   
  };

  const handleRegiter = async()=>{
    const response = await axios.post('http://localhost:5001/api/register',{
      username:username,
      password:password,
      userPhoto:image,
      email:email,
      phoneNumber:number
    })
    if(response.status ===200){
      navigation.replace('Login')
     }
     if(response.status ===400){
      Alert.alert('Already user exist. Please login.')
     }
  }

  return (
    <View style={styles.mainContainer}>
      <Header />
      <TouchableOpacity style={styles.imageContainer} onPress={handleOpenGallery}>
        <Image source={normalImage} style={styles.image} testID='photo' />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          placeholderTextColor={'black'}
          onChangeText={setUsername}
          testID='username'
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          placeholderTextColor={'black'}
          onChangeText={setPassword}
          secureTextEntry
          testID='password'
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          placeholderTextColor={'black'}
          testID='confirmPassword'

        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          placeholderTextColor={'black'}
          onChangeText={setEmail}
          testID='email'
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={number}
          placeholderTextColor={'black'}
          onChangeText={setNumber}
          keyboardType="phone-pad"
          testID='number'
        />
        <TouchableOpacity style={styles.submitContainer} onPress={handleRegiter} testID='register'>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login} onPress={handleLogin} testID='login'>
          <Text style={styles.loginText}>
            Already have an account? Please login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}
