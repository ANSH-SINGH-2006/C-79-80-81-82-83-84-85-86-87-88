import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../screens/BookDonateScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';
import CurrencyConvertScreen from '../screens/CurrencyConvertScreen'

export const AppStackNavigator=createStackNavigator({

    BookDonateList:{
        screen: BookDonateScreen,
        navigationOptions:{
            headerShown: false
        }
    },

    ReceiverDetails:{
        screen: ReceiverDetailsScreen,
        navigationOptions:{
            headerShown:false
        }
    },

    CurrencyConvert:{
        screen: CurrencyConvertScreen,
        navigationOptions:{
            headerShown:false
        }
    },



},

{
    initialRouteName: 'BookDonateList'
}

)