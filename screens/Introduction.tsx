import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../screenStyling/IntroductionStyling';
import { useGlobalContext } from '../context/GlobalContext';

export function Introduction({navigation}:{navigation:any}) {
  const{setUsername} = useGlobalContext()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername)
        setIsLoggedIn(true);
        navigation.replace('Home');

      }
    };

    checkLoginStatus();
  }, [navigation]);


  const handleLogin=()=>{
    navigation.replace('Login')
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../public/assets/dog1.webp')}
        style={styles.dogImage}
        testID='dogImage'
      />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText} testID='welcomeText'>Hey! Welcome</Text>
        <Text style={styles.descriptionText} testID='text'>
          while you sit and stay - we'll go out and play
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin} testID='button' >
          <Text style={styles.buttonText} testID='buttonText'>Get started</Text>
          <Image source={require('../public/assets/next-button.png')} style={styles.buttonIcon} testID='buttonImage' />
        </TouchableOpacity>
      </View>
    </View>
  );
}



