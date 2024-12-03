import React, { useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { useGlobalContext} from '../context/GlobalContext';
import axios from 'axios';

export function Activity({navigation}: {navigation: any}) {
  const {  username, petName} = useGlobalContext()
  const [activityData, setActivityData] = useState([]);

  const formatTime = (isoString: string | number | Date) => {
    const time = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      timeStyle: 'short',
    }).format(time);
  };

  useEffect(() => {
    const fetchRemainderData = async () => {
        const response = await axios.post(
          'http://localhost:5001/api/getActivity',
          {
            username: username,
            petName: petName,
          },
        );
        setActivityData(response.data);
    };
    fetchRemainderData();
  }, [username, petName,setActivityData,activityData]);

  return (
    <View style={styles.container}>
      Header
      <View style={styles.header}>
        <Image
          source={require('../public/assets/messenger.png')}
          style={styles.message}
          testID='image'
        />
        <Text style={styles.headerText}>Activity</Text>
        <Image
          source={require('../public/assets/dog.png')}
          style={styles.dog}
          testID='dogImage'
        />
      </View>
   
      <ScrollView>
        <View style={styles.remindersContainer}>
          {activityData.length === 0 ? (
            <Text style={styles.reminderText} testID='noActivityText'>
              No Activity found..
            </Text>
          ) : (
            activityData.map((ele: any, index: any) => (
              <View key={index} style={styles.remindersContainer}>
                <Text style={styles.reminderTitle} testID='activity'>{ele.activityName}</Text>
                <Text style={styles.reminderText} testID='time'>{`Time: ${formatTime(
                  ele.startTime,
                )} - ${formatTime(ele.endTime)}`}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      padding: 16,
    },
  
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 10,
      backgroundColor: '#63B151',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: '#fff',
    },
  
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
    },
    tabButton: {
      backgroundColor: '#63B151',
      paddingVertical: 10,
      paddingHorizontal: 25,
      borderRadius: 20,
    },
    tabText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
    },
  
    remindersContainer: {
      backgroundColor: '#fff',
      marginVertical: 10,
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    reminderTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    reminderText: {
      fontSize: 14,
      color: '#777',
    },

    message:{
        height:40,
        width:40
    },
    dog:{
        height:40,
        width:40,
        borderRadius:50
    }
  });