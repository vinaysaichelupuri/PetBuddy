import React from 'react'
import { Text, View } from 'react-native'
import { HomeHeader } from '../components/HomeHeader'
import { HomeCards } from '../components/HomeCards'
import { HomeSubHeader } from '../components/HomeSubHeader'
import { AddPetComponent } from '../components/AddPetComponent'
export function Home({navigation}:{navigation:any}) {
  return (
  <View testID='view'>
  <HomeHeader navigation={navigation}/>
  <HomeSubHeader />
  <HomeCards navigation={navigation} />
  <AddPetComponent navigation={navigation} />
  </View>
  )
}
