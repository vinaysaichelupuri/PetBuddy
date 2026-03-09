import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useGlobalContext} from '../context/GlobalContext';
import { styles } from '../screenStyling/PetInfoStyling';
import { TrackModal } from '../model/trackModal';

export function PetInfo({navigation}: {navigation: any}) {
  const {petData, petName, setTrackModal} = useGlobalContext();
  const petInfo = petData.find((item: any) => item.petName === petName);
  const handleTrack = ()=>{
    setTrackModal(true)
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: petInfo.petPhoto}} style={styles.petImage} />
        <TouchableOpacity style={styles.backarrow} onPress={()=>{navigation.navigate('Home')}}>
        <Image source={require('../public/assets/backarrowPetInfo.png')} style={styles.backarrow} />
        </TouchableOpacity>
        
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.petName}>{petInfo.petName}</Text>
        <View style={styles.breedGenderContainer}>
          <Text style={styles.breedName}>{petInfo.breadName}</Text>
          {petInfo.gender === 'Male' ? (
            <Image
              source={require('../public/assets/male.png')}
              style={styles.genderIcon}
            />
          ) : (
            <Image
              source={require('../public/assets/female.png')}
              style={styles.genderIcon}
            />
          )}
        </View>
        <Text style={styles.petNumber}>+91 {petInfo.emergencyNumber}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Age</Text>
          <Text style={styles.detailValue}>{petInfo.age} Years</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Weight</Text>
          <Text style={styles.detailValue}>{petInfo.weight} Kg</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Height</Text>
          <Text style={styles.detailValue}>{petInfo.height} Cm</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Colour</Text>
          <Text style={styles.detailValue}>{petInfo.color}</Text>
        </View>
      </View>

      <View style={styles.remarksContainer}>
        <Text style={styles.remarksLabel}>Remarks</Text>
        <Text style={styles.remarksText}>{petInfo.remarks}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Gallery')}}>
          <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.trackButtonContainer}>
        <TouchableOpacity style={styles.trackButton} onPress={handleTrack }>
          <Text style={styles.trackButtonText}>Track</Text>
        </TouchableOpacity>
      </View>
      <TrackModal navigation={navigation}/>
    </View>
  );
}
