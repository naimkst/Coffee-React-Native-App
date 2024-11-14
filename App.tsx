import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigators/TabNavigator';

// export type RootStackParamList = {
//   Home: undefined;
//   Details: {itemId: string};
// };

const Stack = createNativeStackNavigator<any>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            title: 'TabNavigator',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Details', animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{title: 'Payment', animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
