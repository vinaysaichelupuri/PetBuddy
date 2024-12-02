import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGlobalContext } from '../context/GlobalContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Login({ navigation }: { navigation: any }) {
  const { username, setUsername, password, setPassword } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5001/api/login', {
        username: username,
        password: password,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  input: {
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  register: {
    marginTop: 20,
  },
  registerText: {
    color: '#007bff',
  },
  footerContainer: {
    marginTop: 20,
    width:"100%",
  },
  loadingImage:{
    height:915,
    width:450
  }
});
