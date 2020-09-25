import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import CoinsStack from './src/components/coins/CoinsStack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Colors from './src/res/colors'
import FavoritesStack from './src/components/favorites/FavoritesStack'

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: "#ccc",
          activeTintColor: "white",
          style: {
            backgroundColor: Colors.blackPearl,
            
          }
        }}
      >
        <Tabs.Screen 
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({size,color}) => (
              <Image 
                style={{tintColor:color, width: size, height: size}}  
                source={require('./src/assets/img/bank.png')}
              />
            )
          }}
        />  
        <Tabs.Screen 
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({size,color}) => (
              <Image 
                style={{tintColor:color, width: size, height: size}}  
                source={require('./src/assets/img/star.png')}
              />
            )
          }}
        />  
      </Tabs.Navigator>      
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
