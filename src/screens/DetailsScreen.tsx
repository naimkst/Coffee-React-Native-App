import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

export default function DetailsScreen({route, navigation}: any) {
  const {itemId}: any = route.params;
  useNavigation();
  return (
    <View>
      <Text>{itemId}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({});
