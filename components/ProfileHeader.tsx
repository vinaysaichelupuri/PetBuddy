import React from 'react';
import {useGlobalContext} from '../context/GlobalContext';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export function ProfileHeader({navigation}: {navigation: any}) {
  const handleProfile = () => {
    navigation.navigate('Home');
  };
  const {username} = useGlobalContext();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfile} testID='handleProfile'>
        <Image
          source={require('../public/assets/left-arrow.png')}
          style={styles.image}
          testID='image'
        />
      </TouchableOpacity>
      <Text style={styles.name} testID='name'>Hi, {username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#32CD32',
    alignItems: 'flex-end',
  },
  image: {
    height: 25,
    width: 25,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'bold',
    marginBottom: 15,
    marginLeft: 20,
    fontWeight:"600"
  },
});
