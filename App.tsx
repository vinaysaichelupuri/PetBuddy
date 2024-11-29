import React from 'react';
import {Login} from './screens/Login';
import {Introduction} from './screens/Introduction';
import {Profile} from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MyProvider} from './context/GlobalContext';
import {Register} from './screens/Register';
import {AddPet} from './screens/AddPet';
import {TabNavigation} from './navigations/TabNavigations';
import { PetInfo } from './screens/PetInfo';
import { Gallery } from './screens/Gallery';
import { Reminder } from './screens/Reminder';
import { Activity } from './screens/Activity';
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <MyProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Introduction">
            <Stack.Screen
              name="Introduction"
              component={Introduction}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={TabNavigation}
              options={{headerShown: false}}
            />
            <Stack.Screen name="AddPet" component={AddPet} />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PetInfo"
              component={PetInfo}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Gallery"
              component={Gallery}
            />
            <Stack.Screen
              name="Reminder"
              component={Reminder}
            />
            <Stack.Screen
              name="Activity"
              component={Activity}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MyProvider>
    </SafeAreaProvider>
  );
}
export default App;
