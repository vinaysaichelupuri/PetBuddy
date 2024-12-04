import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {useGlobalContext} from '../context/GlobalContext';
import { AddGallery } from '../components/AddGallery';
import { styles } from '../screenStyling/GalleryStyling';
export function Gallery({navigation}: {navigation: any}) {
  const {username, petName,setImage} = useGlobalContext();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
        const response = await axios.post(
          'http://localhost:5001/api/getGallery',
          {
            username: username,
            petName: petName,
          },
        );
        setData(response.data);
     
    };
    getData();
  }, [setImage]);
  return(
    <><ScrollView>
          {data.map((item: any) => (
              <View style={styles.container}>
                  <Image source={{ uri: item.path }} style={styles.image} testID='photo' />
              </View>
          ))}
      </ScrollView>
      <AddGallery navigation={navigation} />
      </>
  )

}





