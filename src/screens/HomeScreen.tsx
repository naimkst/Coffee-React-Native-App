import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useStore} from '../store/store';
import CartScreen from './CartScreen';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name] += 1;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeList = (category: string, data: any) => {
  if (category === 'All') {
    return data;
  } else {
    return data.filter((item: any) => item.name === category);
  }
};

export default function HomeScreen({navigation}: any) {
  const CoffeeList = useStore((state: any) => state.coffeList);
  const BeansList = useStore((state: any) => state.beansList);
  const [category, setCategory] = React.useState(
    getCategoriesFromData(CoffeeList),
  );
  const [search, setSearch] = React.useState('');
  const [categoryIndex, setCategoryIndex] = React.useState({
    index: 0,
    category: category[0],
  });
  const [sortList, setSortList] = React.useState(
    getCoffeList(categoryIndex.category, CoffeeList),
  );

  console.log('category', sortList.length);
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        {/* App Header */}

        <HeaderBar />

        <Text style={styles.homeBigTitle}>
          Find the best {'\n'} coffee for you
        </Text>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon
              style={styles.searchIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={search ? COLORS.primaryWhiteHex : COLORS.primaryGreyHex}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee"
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.searchInput}
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </View>

        {/* Category List */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}>
          {category.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setCategoryIndex({index: index, category: item});
                  setSortList(getCoffeList(item, CoffeeList));
                }}>
                <Text
                  style={[
                    styles.catText,
                    categoryIndex.index === index
                      ? {color: COLORS.primaryOrangeHex}
                      : {color: COLORS.primaryLightGreyHex},
                  ]}>
                  {item}
                </Text>
                {categoryIndex.index === index && (
                  <View style={styles.activeDot}>
                    <Text style={styles.textDot}>.</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Coffee List */}

        {/* Beans List */}

        {/* Cart Button */}

        {/* Cart Screen */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  homeBigTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  searchIcon: {
    padding: SPACING.space_10,
  },
  searchSection: {
    marginTop: SPACING.space_30,
    marginLeft: SPACING.space_30,
    marginRight: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  searchInput: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
  categoryList: {
    margin: SPACING.space_30,
  },
  catText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    marginHorizontal: SPACING.space_10,
  },
  textDot: {
    color: COLORS.primaryWhiteHex,
    textAlign: 'center',
    backgroundColor: COLORS.primaryOrangeHex,
    width: 8,
    height: 8,
    borderRadius: SPACING.space_10,
  },
  activeDot: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
