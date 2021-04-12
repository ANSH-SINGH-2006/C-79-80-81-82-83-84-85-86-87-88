import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Modal, KeyboardAvoidingView  } from 'react-native';

import firebase from 'firebase';
import db from '../config';
import { ScrollView } from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize'


export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emaiId: '',
            password: '',
            firstName:'',
            lastName:'',
            contact:'',
            address:'',
            confirmPassword:'',
            isModalVisible:'false'
        }
    }

    userLogin= (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            this.props.navigation.navigate('DonateBooks')
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message
            return alert(errorMessage)
        })
    }


    userSignup= (emailId, password, confirmPassword)=>{
        if(password!==confirmPassword){
            return alert("password doesn't match")
        }
        else{

        
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(()=>{
            db.collection('users').add({
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                contact: this.state.contact,
                email_id: this.state.emailId,
                address: this.state.address
            })

            return alert(
                'user added successfully!',
                '',
                [
                    {text:'ok', onPress:()=>this.setState({
                        'isModalVisible': false
                    })}
                ]
            )
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message
            return alert(errorMessage)
        })
    }
    }

    showModal=()=>{
        return(
            <Modal
            animationType='fade'
            tranparentType={true}
            visible={this.state.isModalVisible}>
                <View style={styles.modalContainer}>
                    <ScrollView style={{width: '100%'}}>
                        <KeyboardAvoidingView stlye={styles.KeyboardAvoidingView}>
                            <Text style={styles.modalTitle}>
                                Registration
                            </Text>
                            <TextInput style={styles.formTextInput}
                            placeholder={"first name"}
                            maxLength= {8}
                            onChangeText={(text)=>{
                                this.setState({
                                    firstName:text
                                })
                            }}/>

                        <TextInput style={styles.formTextInput}
                            placeholder={"last name"}
                            maxLength= {8}
                            onChangeText={(text)=>{
                                this.setState({
                                    lastName:text
                                })
                            }}/>

                        <TextInput style={styles.formTextInput}
                            placeholder={"contact"}
                            maxLength= {10}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                this.setState({
                                    contact:text
                                })
                            }}/>

                        <TextInput style={styles.formTextInput}
                            placeholder={"address"}
                            multiline={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    address:text
                                })
                            }}/>

                        <TextInput style={styles.formTextInput}
                            placeholder={"Email ID"}
                            keyboardType={'email-address'}
                            onChangeText={(text)=>{
                                this.setState({
                                    emailId:text
                                })
                            }}/>

                        <TextInput style={styles.formTextInput}
                            placeholder={"password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    password:text
                                })
                            }}/>

                        <TextInput style={styles.formTextInput}
                            placeholder={"confirm password"}
                            secureTextEntry= {true}
                            onChangeText={(text)=>{
                                this.setState({
                                    confirmPassword:text
                                })
                            }}/>

                        <View style={styles.modalBackButton}>
                            <TouchableOpacity style={styles.registerButton}
                            onPress={()=>{
                                this.userSignup(this.state.emailId, this.state.password, this.state.confirmPassword)
                            }}><Text style={styles.registerButtonText}>Register</Text></TouchableOpacity>
                        </View>

                        <View style={styles.modalBackButton}>
                            <TouchableOpacity style={styles.cancelButton}
                            onPress={()=>{
                                this.setState({
                                    isModalVisible: false
                                })
                            }}><Text style={styles.registerButtonText}>Cancel</Text></TouchableOpacity>
                        </View>

                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
   
    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent:'center', alignItems:'center'}}>

{
    this.showModal()
}
</View>
                <View style={styles.profileContainer}>

                <Image source={{uri: 'https://i.ibb.co/R2KSPBR/image.png'}}
       style={{width: '30%', height: 400}} />
                    <Text
                    style={styles.title}
                    >Barter</Text>

                    <Text
                    style={styles.title2}
                    >A nice way to exchange physical stuffs.</Text>
                    

                    
                </View>
                    
                <View
                style={styles.buttonContainer}
                >

                    <TextInput style={styles.loginBox}
                    placeholder="example@booksanta.com"
                    placeholderTextColor="#DB2929"
                    
                    keyboardType="email-address"
                    onChangeText={
                        (text)=>{
                            this.setState({
                                emailId:text
                            })
                        }
                    }/>



                    <TextInput style={styles.loginBox1}
                    placeholder="password"
                    placeholderTextColor="#DB2929"
                    
                    secureTextEntry={true}
                    onChangeText={
                        (text)=>{
                            this.setState({
                                password:text
                            })
                        }
                    }/>

                    <TouchableOpacity
                    style={[styles.button, {marginBottom:20, marginTop:20}]}
                    onPress={()=>{this.userLogin(this.state.emailId, this.state.password)}}
                    >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{this.setState({
                        isModalVisible:true
                    })}}
                    >
                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>

                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FCE8E8'
        

    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:100,
        fontWeight:'400',
        paddingBottom:10,
        color:'#A52A2A',
        paddingTop: 20,
        fontFamily:'Courier New'
    },
    loginBox:{
        width: "50%",
        height: RFValue(50),
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize: RFValue(20),
        margin:RFValue(10),
        paddingLeft:10,
        marginTop:10,
        marginTop:40
    },
    loginBox1:{
        width: "50%",
        height: RFValue(50),
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize: RFValue(20),
        margin:RFValue(10),
        paddingLeft:10,
        
    },
    button:{
        width:'50%',
        height:RFValue(50),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:RFValue(25),
        backgroundColor:'#B22222',
        shadowColor:'#000',
        marginBottom: RFValue(10),
        shadowOffset:{
            width:0,
            height:8
        },

        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:60

    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:RFValue(20)

    },
    buttonContainer:{
        flex:1,
        alignItems:'center'
    },

    title2:{
        textTransform:'uppercase',
        color:'#EE3B3B',
        fontWeight:'600',
        fontFamily: 'cursive',
        fontSize: 20
    },
    modalTitle:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color: '#A52A2A',
        margin:50,

    },
    modalContainer:{
        justifyContent:'center',
        flex:1,
        borderRadius:20,
        backgroundColor:'white',
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        marginBottom:80,
        alignItems:'center',
    },
    formTextInput:{
        width:'75%',
        height: 35,
        alignSelf:'center',
        borderColor:'#A52A2A',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    registerButton:{
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
    },
    registerButtonText:{
        color:"#A52A2A",
        fontSize:15,
        fontWeight:'bold',

    },
    cancelButton:{
        width:200,
        height:40,
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5
    }
})
