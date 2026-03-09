
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Image } from 'react-native';
import { Services } from '../screens/Services';
import Training from '../screens/Training';
import { useGlobalContext } from '../context/GlobalContext';
const Tab = createBottomTabNavigator()
 export function TabNavigation(){
    const {username}= useGlobalContext()
    return(
         <Tab.Navigator initialRouteName="TabHome"
         >
        <Tab.Screen name = "TabHome" component={Home} options={{headerShown:false,tabBarIcon: ({size,focused,color}) => {
                return (
                  <Image
                    style={{ width: 30, height: 30}}
                    source={require('../public/assets/home.png')}
                  />
                );
              }}}/>
        <Tab.Screen name = "Services" component={Services}options={{tabBarIcon: ({size,focused,color}) => {
                return (
                  <Image
                    style={{ width: 30, height: 30}}
                    source={require('../public/assets/location.png')}
                  />
                );
              }}}/>
        <Tab.Screen name = "Training" component={Training}options={{tabBarIcon: ({size,focused,color}) => {
                return (
                  <Image
                    style={{ width: 30, height: 30}}
                    source={require('../public/assets/dog-training.png')}
                  />
                );
              }}}/>
      </Tab.Navigator>
    )
  }