import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from './FavoritesScreen'
import Colors from '../../res/colors'

const Stack = createStackNavigator()

export default function FavoritesStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {backgroundColor: Colors.blackPearl},
            headerTintColor: '#fff',
          }}
        >
            <Stack.Screen 
                component={FavoritesScreen}
                name="Favorites"
            />
        </Stack.Navigator>        
    )
}

