import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { useGlobalContext} from '../context/GlobalContext';
import axios from 'axios';
import { RemainderModal } from '../model/remainderModal';
import { styles } from '../screenStyling/ReminderStyling';

export function Reminder({navigation}: {navigation: any}) {
  const { setRemainderModal, username, petName} = useGlobalContext()
  const [remainderData, setRemainderData] = useState([]);
  const[Type,setType]=useState('')
  const formatDate = (isoString: string | number | Date) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date);
  };

  const formatTime = (isoString: string | number | Date) => {
    const time = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      timeStyle: 'short',
    }).format(time);
  };

  useEffect(() => {
    const fetchRemainderData = async () => {
      try {
        const response = await axios.post(
          'https://petbuddy-backend-rnu7.onrender.com/api/getReminder',
          {
            username: username,
            petName: petName,
          },
        );
        setRemainderData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchRemainderData();
  }, [username, petName,setRemainderData,remainderData]);

  const filteredReminderData = remainderData.filter((item:any)=>(
    item.type===Type
  ))
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../public/assets/messenger.png')}
          style={styles.message}
        />
        <Text style={styles.headerText}>Reminders</Text>
        <Image
          source={require('../public/assets/dog.png')}
          style={styles.dog}
        />
      </View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={()=>{setType("Daily")}}>
          <Text style={styles.tabText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={()=>{setType("Weekly")}}>
          <Text style={styles.tabText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={()=>{setType("Monthly")}}>
          <Text style={styles.tabText}>Monthly</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.remindersContainer}>
          {filteredReminderData.length === 0 ? (
            <Text style={styles.reminderText}>
              No Reminders found. Add a Reminder.
            </Text>
          ) : (
            filteredReminderData.map((ele: any, index: any) => (
              <View key={index} style={styles.remindersContainer}>
                <Text style={styles.reminderTitle}>{ele.remainderName}</Text>
                <Text style={styles.reminderText}>{`Date: ${formatDate(
                  ele.date,
                )}`}</Text>
                <Text style={styles.reminderText}>{`Time: ${formatTime(
                  ele.startTime,
                )} - ${formatTime(ele.endTime)}`}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setRemainderModal(true)}>
        <Image
          source={require('../public/assets/add.png')}
          style={styles.addIcon}
        />
      </TouchableOpacity>
      <RemainderModal navigation={navigation} />
    </View>
  );
}
