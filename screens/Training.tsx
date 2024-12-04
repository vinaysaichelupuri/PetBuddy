import React from 'react';
import {Image, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import { styles } from '../screenStyling/TrainingStyling';

export function Training() {
  return (
    <ScrollView style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../public/assets/dog-training.png')}
          style={styles.image}
          testID='image1'
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.step} testID='text1'>
          Step 1: Start with a small treat in your hand, and close your fist
          around it.
        </Text>
        <Text style={styles.step} testID='text2'>
          Step 2: Allow your dog to sniff or nudge your hand but do not open
          your fist.
        </Text>
        <Text style={styles.step} testID='text3'>
          Step 3: Wait until your dog stops trying to reach the treat and looks
          away or waits calmly.
        </Text>
        <Text style={styles.step} testID='text4'>
          Step 4: The moment they back off, say “Take it” and open your hand,
          allowing them to have the treat.
        </Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL('https://youtu.be/jFMA5ggFsXU?si=cMljN3XdmvzjWBW9')
            
          }
          testID='link'>
          Here is a link for dog training
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../public/assets/drink.png')}
          style={styles.image}
          testID='image2'
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.step} testID='text5'>
          Step 1: Start with your dog's food bowl in your hand and ask them to
          sit.
        </Text>
        <Text style={styles.step} testID='text6'>
          Step 2: Lower the bowl towards the floor slowly, but lift it back up
          if your dog jumps or tries to reach for the food.
        </Text>
        <Text style={styles.step} testID='text7'>
          Step 3: Repeat this until your dog sits calmly and waits while you
          lower the bowl completely.
        </Text>
        <Text style={styles.step} testID='text8'>
          Step 4: Once the bowl is on the floor and your dog remains calm, say
          “Eat” or “Okay” to give them permission to eat.
        </Text>
        <Text style={styles.step} testID='text9'>
          Step 5: If your dog rushes, lift the bowl again and repeat until they
          consistently wait for your cue.
        </Text>
        <Text style={styles.step} testID='text'>
          Step 6: Practice this daily, gradually increasing the waiting time
          before you give the command to eat.
        </Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL('https://youtu.be/jFMA5ggFsXU?si=cMljN3XdmvzjWBW9')
          }
          testID='link1'>
          Here is a link for dog eating
        </Text>
      </View>
    </ScrollView>
  );
}



export default Training;
