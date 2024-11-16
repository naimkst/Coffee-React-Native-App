import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {ImageBackground} from 'react-native';
import CustomIcon from './CustomIcon';

// will be show 2 items and one half on the screen
const itemWidth = Dimensions.get('window').width * 0.33;

export default function ItemCard({data, navigation}: any) {
  return (
    <TouchableOpacity
      style={styles.section}
      onPress={() => navigation.push('Details', {itemId: data.id})}>
      <LinearGradient
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        style={styles.cardItem}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <ImageBackground
          source={data?.imagelink_square}
          resizeMode="cover"
          style={styles.itemImage}></ImageBackground>
        <Text style={styles.cartTitle}>{data?.name}</Text>
        <Text style={styles.subTitle}>{data?.special_ingredient}</Text>

        <View style={styles.priceBox}>
          <View style={styles.priceFlex}>
            <Text
              style={{
                color: COLORS.primaryOrangeHex,
                fontFamily: FONTFAMILY.poppins_bold,
                fontSize: FONTSIZE.size_18,
                marginRight: SPACING.space_4,
              }}>
              {data?.prices[1].currency}
            </Text>
            <Text style={styles.priceTxt}>{data?.prices[1].price}</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.iconBox}>
              <CustomIcon name="add" size={20} color={COLORS.primaryWhiteHex} />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  section: {},
  cardItem: {
    padding: SPACING.space_12,
    marginRight: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_20,
  },
  itemImage: {
    width: itemWidth,
    height: itemWidth,
    borderRadius: BORDERRADIUS.radius_20,
    overflow: 'hidden',
  },
  cartTitle: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    marginTop: SPACING.space_10,
  },
  subTitle: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    marginTop: SPACING.space_4,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_10,
  },
  priceFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceTxt: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_bold,
  },
  iconBox: {
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: BORDERRADIUS.radius_10,
    padding: SPACING.space_8,
  },
});
