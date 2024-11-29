import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {useGlobalContext} from '../context/GlobalContext';
import { AddGallery } from '../components/AddGallery';
export function Gallery({navigation}: {navigation: any}) {
  const {username, petName} = useGlobalContext();
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
  }, []);
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

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexWrap:"wrap",
    },
    image:{
        height:180,
        width:180,
        margin:10,
    },


})




