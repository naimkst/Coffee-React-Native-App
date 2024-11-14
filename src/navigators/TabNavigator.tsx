import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FavoriesScreen from '../screens/FavoriesScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreeen from '../screens/OrderHistoryScreeen';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Favorate" component={FavoriesScreen}></Tab.Screen>
      <Tab.Screen name="Order" component={OrderHistoryScreeen}></Tab.Screen>
      <Tab.Screen name="Cart" component={CartScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
