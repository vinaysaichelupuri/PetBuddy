import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useGlobalContext} from '../context/GlobalContext';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
    position:"relative"
  },
  petImage: {
    width: '100%',
    height: 350,
    borderRadius: 16,
  },
  infoContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 16,
    margin: 16,
  },
  petName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'bold',
  },
  breedGenderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  breedName: {
    fontSize: 22,
    fontWeight: '800',
    color: 'forestgreen',
    marginBottom: 8,
    fontFamily: 'bold',
  },
  genderIcon: {
    width: 24,
    height: 24,
  },
  detailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    height: '10%',
  },
  detailItem: {
    width: '23%',
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    borderRadius: 20,
  },
  detailLabel: {
    fontSize: 20,
    color: 'balck',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: 'forestgreen',
  },
  remarksContainer: {
    marginBottom: 16,
    padding: 16,
  },
  remarksLabel: {
    fontSize: 20,
    fontWeight: '800',
    color: '#333',
  },
  remarksText: {
    fontSize: 18,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width:"30%"
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  trackButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width:"30%"
  },
  trackButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  petNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'forestgreen',
    marginBottom: 8,
  },
  buttonContainer:{
    width:"100%",
    height:"5%",
    justifyContent:"flex-start"
  },
  trackButtonContainer:{
    width:"100%",
    height:"5%",
    justifyContent:"center",
    alignItems:"center"
  },
  backarrow:{
    height:30,
    width:30,
    position:"absolute",
    marginTop:"15%",
    alignSelf:"flex-start",
    marginLeft:"2%"
    
  }
});
