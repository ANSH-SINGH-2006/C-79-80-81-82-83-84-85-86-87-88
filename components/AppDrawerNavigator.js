import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyDonationScreen from '../screens/MyDonationScreen'
import NotificationScreen from '../screens/NotificationScreen'
import MyReceievedBooksScreen from '../screens/MyReceievedBookScreen'
import CurrenyConvertScreen from '../screens/CurrencyConvertScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },

    Settings:{
      screen: SettingScreen
    },

    MyBarters:{
      screen: MyDonationScreen
    },

    Notification:{
      screen: NotificationScreen
    },

    MyReceievedItems: {
      screen: MyReceievedBooksScreen
    },

    CurrencyConvert: {
      screen: CurrenyConvertScreen
    }
  
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
