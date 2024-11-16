import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) => ({
      coffeList: CoffeeData,
      beansList: BeansData,
      cartList: [],
      cartPrice: 0,
      FavoritesList: [],
      OrderHistoryList: [],
      addToCart: (item: any) => {
        set(
          produce(state => {
            state.cartList.push(item);
            state.cartPrice += item.prices[1].price;
          }),
        );
      },
    }),
    {
      name: 'coffee-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
