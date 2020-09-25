import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import Colors from '../../res/colors';
import CoinsDetail from './CoinsDetail';

const Stack = createStackNavigator();

export default function CoinsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.blackPearl},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen
        name="CoinsDetail"
        component={CoinsDetail}
        options={({route}) => ({title: route.params.coin.symbol})}
      />
    </Stack.Navigator>
  );
}
