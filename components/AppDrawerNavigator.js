import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyDonationScreen from '../screens/MyDonationScreen'
import NotificationScreen from '../screens/NotificationScreen'
import MyReceievedBooksScreen from '../screens/MyReceievedBookScreen'
import CurrenyConvertScreen from '../screens/CurrencyConvertScreen'
import {Icon} from 'react-native-elements'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions: {
      drawerIcon: <Icon name='home' type='font-awesome'/>
    }
    },

    Settings:{
      screen: SettingScreen,
      navigationOptions: {
        drawerIcon: <Icon name='settings' type='fontawesome5'/>
      }
      
    },

    MyBarters:{
      screen: MyDonationScreen,
      navigationOptions: {
        drawerIcon: <Icon name='gift' type='font-awesome'/>
      }
    },

    Notification:{
      screen: NotificationScreen,
      navigationOptions: {
        drawerIcon: <Icon name='bell' type='font-awesome'/>
      }
    },

    MyReceievedItems: {
      screen: MyReceievedBooksScreen,
      navigationOptions: {
        drawerIcon: <Icon name='gift' type='font-awesome'/>
      }
    },

    
  
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
