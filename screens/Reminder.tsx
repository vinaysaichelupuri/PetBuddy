import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {RemainderModal} from '../model/remainderModal';
import { useGlobalContext} from '../context/GlobalContext';
import axios from 'axios';

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
          'http://localhost:5001/api/getReminder',
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
      Header
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
  
    addButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#63B151',
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    addIcon: {
      width: 30,
      height: 30,
      tintColor: '#fff',
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