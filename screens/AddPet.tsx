import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { requestPermissions } from '../permissions/ImagePermission';
import ImageCropPicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import axios from 'axios';
import { useGlobalContext } from '../context/GlobalContext';
export function AddPet({ navigation }: { navigation: any }) {
const {username} = useGlobalContext()
  const [image, setImage] = useState('');
  const [petName,setPetName] = useState('');
  const[breadName,setBreadName] = useState('')
  const [age,setAge] = useState('');
  const [height,setHeight] = useState('')
  const[weight,setWeight] = useState('')
  const[color,setColor] = useState('');
  const [gender,setGender] = useState('')
  const [emergencyNumber,setEmergencyNumber] = useState('');
  const[remarks,setRemarks] = useState('No Remarks')
  const [normalImage, setNormalImage] = useState(require('../public/assets/addpet.png'));

  const handleOpenGallery = async () => {
      const hasPermission = await requestPermissions();
      if (hasPermission) {
        Alert.alert(
          'Permission Denied',
          'We need access to your photos to select an image.'
        );
        return;
      }
      const pickedImage = await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      const source: string = pickedImage.path;
      const base64Image: string = await RNFS.readFile(source, 'base64');
      setImage(`data:image/jpeg;base64,${base64Image}`);
      setNormalImage({ uri: pickedImage.path }); 


  };

  const handleRegiter = async()=>{
    const response = await axios.post('http://localhost:5001/api/petRegister',{
      username:username,
      petName:petName,
      gender:gender,
      emergencyNumber:emergencyNumber,
      breadName:breadName,
      petPhoto:image,
      age:age,
      height:height,
      weight:weight,
      color:color,
      remarks:remarks

    })
    if(response.status ===200){
      navigation.replace('Home'),
      Alert.alert('Pet added succesfully')
     }
     if(response.status ===400){
      Alert.alert('User not exist')
     }
     if(response.status ===401){
      Alert.alert('Already pet with this user exist')
     }
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.imageContainer} onPress={handleOpenGallery} testID='photo'>
        <Image source={normalImage} style={styles.image} />
      </TouchableOpacity>
      <View >
        <TextInput
          style={styles.input}
          placeholder="Pet Name"
          value={petName}
          placeholderTextColor={'black'}
          onChangeText={setPetName}
          testID='name'
        />
        <TextInput
          style={styles.input}
          placeholder="Pet Breed"
          value={breadName}
          placeholderTextColor={'black'}
          onChangeText={setBreadName}
          testID='breadname'
        />
        <TextInput
          style={styles.input}
          placeholder="Colour"
          value={color}
          placeholderTextColor={'black'}
          onChangeText={setColor}
          testID='color'
        />
        <TextInput
          style={styles.input}
          placeholder="Emergency Number"
          value={emergencyNumber}
          placeholderTextColor={'black'}
          onChangeText={setEmergencyNumber}
          testID='number'
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          placeholderTextColor={'black'}
          onChangeText={setGender}
          keyboardType="phone-pad"
          testID='gender'
        />
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          value={height}
          placeholderTextColor={'black'}
          onChangeText={setHeight}
          keyboardType="phone-pad"
          testID='height'
        />
        <TextInput
          style={styles.input}
          placeholder="Weight (Kg's)"
          value={weight}
          placeholderTextColor={'black'}
          onChangeText={setWeight}
          keyboardType="phone-pad"
          testID='weight'
        />
        <TextInput
          style={styles.input}
          placeholder="Age (Years)"
          value={age}
          placeholderTextColor={'black'}
          onChangeText={setAge}
          keyboardType="phone-pad"
          testID='age'
        />
        <TextInput
          style={styles.input}
          placeholder="Remarks (if any)"
          value={remarks}
          placeholderTextColor={'black'}
          onChangeText={setRemarks}
          keyboardType="phone-pad"
          testID='remarks'
        />
        <TouchableOpacity style={styles.submitContainer} onPress={handleRegiter} testID='addpet'>
          <Text style={styles.text}>Add Pet</Text>
        </TouchableOpacity>
        
      </View>

    </View>
  );
}
const styles =  StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    image:{
        height:100,
        width:100,
        borderRadius:20
    },
    imageContainer:{
        justifyContent:"center",
        alignItems:"center",
        height:"20%"
    },
    input: {
        width: '90%',
        height:"6%",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: '5%',
        marginVertical: '2%',
        backgroundColor: '#fff',
        color: '#000',
        marginHorizontal:20
      },
      submitContainer:{
        width: '90%',
        height: '6%',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#32CD32',
        borderRadius:10,
        marginHorizontal:20
      },
      text:{
        color:"white",
        fontFamily:"bold",
        fontSize:18
      },
      login: {
        marginTop: '3%',
      },
      loginText: {
        color: '#32CD32',
        fontSize: 18,
      },
})