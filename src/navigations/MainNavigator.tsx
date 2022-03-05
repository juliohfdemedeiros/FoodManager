import React from 'react';

import RegimeScreen from '../screens/RegimeScreen';
import MealScreen from '../screens/MealScreen';

import {createStackNavigator} from '@react-navigation/stack';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="RegimeScreen">
      <MainStack.Screen name="RegimeScreen" component={RegimeScreen}
        options={{
          headerTitle:'Agenda Alimentar',
          headerTitleStyle: {color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: {
          backgroundColor: 'grey',
          },
        }}
      />
      <MainStack.Screen name="MealScreen" component={MealScreen}
        options={{
          headerTitle:'Agenda Alimentar',
          headerTitleStyle: {color: '#fff'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'grey',
          }
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;