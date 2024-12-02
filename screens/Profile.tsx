import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useGlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import { TProfile } from '../types/profileType';
import { ProfileHeader } from '../components/ProfileHeader';

export function Profile({navigation}:{navigation:any}) {
const{username} = useGlobalContext()
const[profileData,setProfileData] = useState<TProfile>({userPhoto:'',email:'',phoneNumber:'',username:'',password:""})
useEffect(()=>{
    const getData= async ()=>{
        const response = await axios.post('http://localhost:5001/api/getProfile',{
            username:username,
          })
          const profileData  = response.data
          setProfileData(profileData)
          
    }
    getData()
})
    return (
        <><ProfileHeader navigation={navigation} /><View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.profileImage} source={{ uri: profileData.userPhoto }} testID='userImage'/>
            </View>

            <View style={styles.contactContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.name} testID='name'>{profileData.username}</Text>
                    <TouchableOpacity style={styles.signOutButton} onPress={()=>{navigation.navigate('Login')}} testID='signOut'>
                        <Image style={styles.icon} source={require('../public/assets/logout-2.png')} testID='signOutImage'/>
                        <Text style={styles.signOutText} testID='signOutText'>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contactRow}>
                    <Image style={styles.icon} source={require('../public/assets/mail.png')}  testID='emailImage'/>
                    <Text style={styles.contactText} testID='emailText'>{profileData.email}</Text>
                </View>
                <View style={styles.contactRow}>
                    <Image style={styles.icon} source={require('../public/assets/phone-call.png')}  testID='callImage'/>
                    <Text style={styles.contactText} testID='callText'>{profileData.phoneNumber}</Text>
                </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        borderRadius: 10,
    },
    profileImage: {
        width: "100%",
        height: 250,
        marginBottom: 10,
    },
    greeting: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    infoContainer: {
        alignItems: 'center',
        marginVertical: 20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    signOutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    signOutText: {
        color: '#d9534f',
        marginLeft: 5,
    },
    contactContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    contactText: {
        fontSize: 16,
        color: '#333',
    },
    menuContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    menuIcon: {
        width: 25,
        height: 25,
        marginRight: 15,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    arrowIcon: {
        width: 15,
        height: 15,
    },
});