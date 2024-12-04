import React from 'react';
import {useGlobalContext} from '../context/GlobalContext';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../componentStyling/ProfileHeaderStyling';

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


