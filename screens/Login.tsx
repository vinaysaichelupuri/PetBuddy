import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGlobalContext } from '../context/GlobalContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { styles } from '../screenStyling/LoginStyling';
import { hashPassword } from '../encryption/encryptionFunction';

export function Login({ navigation }: { navigation: any }) {
  const { username, setUsername, password, setPassword } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const encryptedPassword = hashPassword(password)

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://petbuddy-backend-rnu7.onrender.com/api/login', {
        username: username,
        password: encryptedPassword,
      });
      setIsLoading(false);

      if (response.status === 200) {
        await AsyncStorage.setItem('username', username);
        navigation.replace('Home');
      } else if (response.status === 401) {
        Alert.alert('Wrong credentials');
      } else if (response.status === 404) {
        Alert.alert('No user found! Please register');
      }
    } catch (error) {
      setIsLoading(true);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Image
            source={require('../public/assets/loading.gif')}
            style={styles.loadingImage}
            testID="loadingImage"
          />
        </View>
      ) : (
        <><Header />
            <View style={styles.formContainer}>
              <Image
                source={require('../public/assets/logo.png')}
                style={styles.logo}
                testID="logo" />

              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor={'black'}
                testID="username" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                placeholderTextColor={'black'}
                onChangeText={setPassword}
                testID="password" />
              <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                testID="buttonLogin"
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.register}
                onPress={handleRegister}
                testID="buttonRegister"
              >
                <Text style={styles.registerText}>Don't have an account? Register</Text>
              </TouchableOpacity>
            </View></>
      )}

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}
