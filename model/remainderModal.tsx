import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import notifee, { AndroidImportance, EventType, TriggerType } from '@notifee/react-native';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useGlobalContext} from '../context/GlobalContext';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';

export function RemainderModal({ navigation }: { navigation: any }) {
  const { remainderModal, setRemainderModal,username,petName ,date,setDate,startTime,setStartTime,setEndTime ,endTime,name, setName} = useGlobalContext();
  const [dropdown, setDropdown] = useState('Daily');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  const dropdownData = [
    { label: 'Daily', value: '1' },
    { label: 'Weekly', value: '2' },
    { label: 'Monthly', value: '3' },
  ];


  async function setCategoriesIOS() {
    await notifee.setNotificationCategories([
      {
        id: 'reminder-actions',
        actions: [
          {id: 'yes', title: 'Completed'},
          {id: 'no', title: 'Not Completed'},
        ],
      },
    ]);
  }
  

  const handleSubmit = async() => {
    try{
      setCategoriesIOS()
       const scheduleNotification = async () => {
        console.log("funtion called")
        const permission = await notifee.requestPermission();
        if (!permission) {
          console.error('Notification permission not granted');
          return;
        }
        await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
          importance: AndroidImportance.HIGH,
        });
      
        const timestamp = new Date(endTime).getTime();
        console.log(new Date(endTime))
        console.log('Scheduling notification for:', timestamp);
        
      
        await notifee.createTriggerNotification(
          {
            title: 'Scheduled Notification',
            body: 'Do you completed the task?',
            android: {
              channelId: 'default',
              actions: [
                {
                  title: 'Completed',
                  pressAction: { id: 'yes' },
                },
                {
                  title: 'Not completed',
                  pressAction: { id: 'no' },
                },
              ],
            },
            ios: {
              categoryId: 'reminder-actions',
            },
            
          },
          {
            type: TriggerType.TIMESTAMP,
            timestamp,
          }
        );
        
      };

      notifee.onForegroundEvent(async ({type, detail}) => {
        const {pressAction } = detail
        if (type === EventType.ACTION_PRESS && pressAction?.id==='yes' ) {
          console.log('Action function hitted')
          try {
            const response = await axios.post('http://localhost:5001/api/addActivity', {
                username,
                petName,
                activityName: name,
                startTime,
                endTime,
            });
            console.log('API response:', response.data);
        } catch (error) {
            console.error('API call error:', error);
        }
        }
      });

      setRemainderModal(false);
      const response  = await axios.post('http://localhost:5001/api/addReminder',{
        username:username,
        petName:petName,
        type:dropdown,
        remainderName:name,
        date:date,startTime:startTime,endTime:endTime
      })
      scheduleNotification()

    }

    catch(e){
      console.log(e)
    }

  };

  const dateHandler = () => {
    setDatePickerVisibility(true);
  };

  const startTimeHandler = () => {
    setStartTimePickerVisibility(true);
  };

  const endTimeHandler = () => {
    setEndTimePickerVisibility(true);
  };

  return (
    <Modal
      visible={remainderModal}
      animationType="slide"
      transparent
      onRequestClose={() => setRemainderModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setRemainderModal(false)}>
            <Image
              source={require('../public/assets/cross.png')}
              style={styles.crossIcon}
            />
          </TouchableOpacity>

          <Dropdown
            style={styles.input}
            data={dropdownData}
            labelField="label"
            valueField="value"
            placeholder="Select type"
            value={dropdown}
            onChange={item => {
              setDropdown(item.label);
            }}
          />

          <TextInput
            placeholder="Activity"
            placeholderTextColor="black"
            style={styles.input}
            onChangeText={setName}
            value={name}
          />

          <TouchableOpacity onPress={dateHandler} style={styles.input}>
            <Text>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>

          <DatePicker
            modal
            open={isDatePickerVisible}
            date={date}
            onConfirm={selectedDate => {
              setDatePickerVisibility(false);
              setDate(selectedDate);
            }}
            onCancel={() => setDatePickerVisibility(false)}
          />

          <TouchableOpacity onPress={startTimeHandler} style={styles.input}>
            <Text>{startTime.toLocaleTimeString()}</Text>
          </TouchableOpacity>

          <DatePicker
            modal
            open={isStartTimePickerVisible}
            date={startTime}
            mode="time"
            onConfirm={selectedTime => {
              setStartTimePickerVisibility(false);
              setStartTime(selectedTime);
            }}
            onCancel={() => setStartTimePickerVisibility(false)}
          />

          <TouchableOpacity onPress={endTimeHandler} style={styles.input}>
            <Text>{endTime.toLocaleTimeString()}</Text>
          </TouchableOpacity>

          <DatePicker
            modal
            open={isEndTimePickerVisible}
            date={endTime}
            mode="time"
            onConfirm={selectedTime => {
              setEndTimePickerVisibility(false);
              setEndTime(selectedTime);
            }}
            onCancel={() => setEndTimePickerVisibility(false)}
          />

          <TouchableOpacity
            style={styles.addReminderButton}
            onPress={handleSubmit}
          >
            <Text style={styles.addReminderButtonText}>Add Reminder</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  crossIcon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    marginBottom: 15,
    padding: 10,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addReminderButton: {
    height: 50,
    width: '100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  addReminderButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
