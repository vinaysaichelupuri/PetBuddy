import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGlobalContext } from '../context/GlobalContext';
import { styles } from '../componentStyling/HomecardsStyling';


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
