import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useGlobalContext } from '../context/GlobalContext';
import { styles } from '../modolStylings/trackModolStyling';

export function TrackModal({ navigation }: { navigation: any }) {
  const { trackModal, setTrackModal } = useGlobalContext();

  return (
    <Modal
      visible={trackModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setTrackModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
              navigation.navigate('Activity');
              setTrackModal(false); 
            }}
          >
            <Text style={styles.optionText}>Activity</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
              navigation.navigate('Reminder');
              setTrackModal(false); 
            }}
          >
            <Text style={styles.optionText}>Reminders</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

