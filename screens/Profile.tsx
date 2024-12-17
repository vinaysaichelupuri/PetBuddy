import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, Platform, Linking } from 'react-native';
import { useGlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import { TProfile } from '../types/profileType';
import { ProfileHeader } from '../components/ProfileHeader';
import { styles } from '../screenStyling/ProfileStyling';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Profile({navigation}:{navigation:any}) {
const{username,setUsername} = useGlobalContext()
const[profileData,setProfileData] = useState<TProfile>({userPhoto:'',email:'',phoneNumber:'',username:'',password:""})
useEffect(()=>{
    const getData= async ()=>{
        const response = await axios.post('https://petbuddy-backend-rnu7.onrender.com/api/getProfile',{
            username:username,
          })
          const profileData  = response.data
          setProfileData(profileData)
          
    }
    getData()
})
    const checkLoginStatus = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername('')
      }
      navigation.navigate('Login')
    };
const dialCall = (number:any) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };
    return (
        <><ProfileHeader navigation={navigation} /><View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.profileImage} source={{ uri: profileData.userPhoto }} testID='userImage'/>
            </View>

            <View style={styles.contactContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.name} testID='name'>{profileData.username}</Text>
                    <TouchableOpacity style={styles.signOutButton} onPress={checkLoginStatus} testID='signOut'>
                        <Image style={styles.icon} source={require('../public/assets/logout-2.png')} testID='signOutImage'/>
                        <Text style={styles.signOutText} testID='signOutText'>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contactRow}>
                    <Image style={styles.icon} source={require('../public/assets/mail.png')}  testID='emailImage'/>
                    <Text style={styles.contactText} testID='emailText'>{profileData.email}</Text>
                </View>
                <TouchableOpacity style={styles.contactRow} onPress={()=>dialCall(profileData.phoneNumber)}  testID='callContainer'>
                    <Image style={styles.icon} source={require('../public/assets/phone-call.png')}  testID='callImage'/>
                    <Text style={styles.contactText} testID='callText'>{profileData.phoneNumber}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem}>
                    <Image style={styles.menuIcon} source={require('../public/assets/user.png')} testID='aboutImage'/>
                    <Text style={styles.menuText} testID='aboutText'>About me</Text>
                    <Image style={styles.arrowIcon} source={require('../public/assets/next.png')} testID='nextImage'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={()=>{navigation.navigate('Home')}} testID='homeNavigation' >
                    <Image style={styles.menuIcon} source={require('../public/assets/3d-cube.png')} testID='myPets' />
                    <Text style={styles.menuText} testID='petImage'>My Pets</Text>
                    <Image style={styles.arrowIcon} source={require('../public/assets/next.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image style={styles.menuIcon} source={require('../public/assets/location.png')} testID='locationImage'/>
                    <Text style={styles.menuText} testID='locationText'>My Address</Text>
                    <Image style={styles.arrowIcon} source={require('../public/assets/next.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}  onPress={()=>{navigation.navigate('AddPet')}} testID='addPetNavigation'>
                    <Image style={styles.menuIcon} source={require('../public/assets/paw.png')} testID='pawImage' />
                    <Text style={styles.menuText} testID='pawText'>Add Pet</Text>
                    <Image style={styles.arrowIcon} source={require('../public/assets/next.png')} />
                </TouchableOpacity>
            </View>
        </View></>
    );
}

