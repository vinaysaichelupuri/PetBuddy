import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGlobalContext } from '../context/GlobalContext';

export function HomeCards({navigation}:{navigation:any}) {
  const { username ,setPetName,petData, setPetData} = useGlobalContext();
  const handlePetInfo = (petName:string)=>{
      setPetName(petName),
      navigation.navigate('PetInfo')

  }

  useEffect(() => {
    const getData = async () => {
        const response = await axios.post('http://localhost:5001/api/petData', { 
          username: username,
        });
        setPetData(response.data.petData);
    };
    getData();
  }, [username]);

  return petData.length === 0 ? (
    <View style={styles.noPet}> 
      <Image source={require('../public/assets/noPetFound.png')} style={styles.noPetImage} testID='noPetImage'/>
      <Text style={styles.noPetText} testID='noPetText'>No pets available!</Text>
    </View>
  ) : (
    <ScrollView style={styles.petList}>
      {petData.map((pet: any, index: number) => (
        <TouchableOpacity key={index} style={styles.petCard} onPress={()=>handlePetInfo(pet.petName)} testID='handleNavigation'>
          <Image source={{ uri:pet.petPhoto}} style={styles.petImage} />
          <View style={styles.petNameContainer}>
            <Text style={styles.petName}>{pet.petName}</Text>
            <Text style={styles.petBreed}>{pet.breadName}</Text> 
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    noPet: {
      justifyContent: 'center',
      alignItems: 'center',
      height:"70%"

    },
    noPetImage: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    noPetText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 10,
    },
    petList: {
      backgroundColor: 'lightgreen', 
      height:"73%"
    },
    petCard: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      margin: 10,
      borderRadius: 15,
      padding: 10,
      alignItems: 'center',
      elevation: 4, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    petImage: {
      width: 200,
      height: 280,
      borderRadius: 15,
      marginRight: 15,
    },
    petNameContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    petName: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 5,
    },
    petBreed: {
      fontSize: 20,
      color: '#666',
    },
  });