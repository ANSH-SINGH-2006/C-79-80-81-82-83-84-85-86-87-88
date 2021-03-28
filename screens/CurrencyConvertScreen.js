import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import {Card, Header, Icon} from 'react-native-elements'

export default class ReceiverDetailsScreen extends Component{
    constructor(props){
        super(props)

        this.state={
        
            
        }
    }



    render(){
        return(
            <View style={StyleSheet.container}>
                <View style={{flex:0.1}}>
                <Header
      leftComponent={<Icon name='arrow-left' type='feather' color='#B22222'  onPress={() => this.props.navigation.goBack()}/>}
      centerComponent={{ text: 'Convert Currency', style: { color: '#B22222', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#FCE8E8"
    />
                </View>

                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,

    },

    buttonContainer:{
        flex:0.3,
        justifyContent:'center',
        alignItems:'center'
    },

    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#B22222",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },

      
})
