import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

export default function ProfilePicture() {
  return (
    <View style={styles.section}>
      <Image
        style={styles.image}
        source={require('../assets/app_images/avatar.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});
