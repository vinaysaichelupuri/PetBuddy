import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {useGlobalContext} from '../context/GlobalContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Login({navigation}:{navigation:any}) {
  const {username, setUsername, password, setPassword} = useGlobalContext();
  const handleLogin = async() => {
    const response = await axios.post('http://localhost:5001/api/login',{
      username:username,
      password:password
    })
     if( response.status ===200){
      navigation.replace('Home')
     }
     else if( response.status ===401){
      Alert.alert('Wrong credentials')
     }
     else if( response.status ===404){
      Alert.alert('No user found! Please register')
     }

  };
  const handleRegister = async()=>{
navigation.navigate('Register')
  }
  return (
    <View style={styles.container}>
      <Header />
      
      <View>
        <Image
          source={require('../public/assets/logo.png')}
          style={styles.logo}
          testID='logo'
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor={'black'}
        testID='username'
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        placeholderTextColor={'black'}
        onChangeText={setPassword}
        testID='password'
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} testID='buttonLogin'>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.register} onPress={handleRegister} testID='buttonRegister'>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer} >
      <Footer />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"white"
  },
  headerLogin: {
    height: 100,
    width: 450,
  },
  logo: {
    height: 300,
    width: 300,
  },
  input: {
    width: '90%',
    height: '6%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: '5%',
    marginVertical: '2%',
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    width: '90%',
    height: '5%',
    backgroundColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: '5%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  register: {
    marginTop: '3%',
  },
  registerText: {
    color: '#32CD32',
    fontSize: 18,
  },
  footerContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"flex-end",
    height:"29%",
  }
});
