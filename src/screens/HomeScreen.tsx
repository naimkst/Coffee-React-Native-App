import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import CartScreen from './CartScreen';

export default function HomeScreen({navigation}: any) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Read More"
        // onPress={() => navigation.navigate('Details', {itemId: '86'})}
        // onPress={() => navigation.navigate('Details')}
        onPress={() => navigation.push('Details', {itemId: '86'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
