import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePicture from './ProfilePicture';

export default function HeaderBar<HeaderBarProps>({title}: any) {
  return (
    <View style={styles.headerSection}>
      <GradientBGIcon
        name="menu"
        size={FONTSIZE.size_16}
        color={COLORS.primaryLightGreyHex}
      />
      <Text style={styles.headerTitle}>{title}</Text>
      <ProfilePicture />
    </View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
