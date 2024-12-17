import React, { useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { styles } from '../screenStyling/ActivityStyling';
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
          'https://petbuddy-backend-rnu7.onrender.com/api/getActivity',
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
                <Text style={styles.reminderTitle} testID='activityName'>{ele.activityName}</Text>
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


