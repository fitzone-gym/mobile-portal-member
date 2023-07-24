import styles from "../../styles/forget-password.style";

import React from 'react';
import { useRouter } from 'expo-router';
import { Route } from 'expo-router/build/Route';

import {SafeAreaView, View, TouchableOpacity, Text, ImageBackground, TextInput} from "react-native";


export default function forgetPassword(){
    const router = useRouter();

    const [email, onChangeEmail] = React.useState('');
    
    return(

            <SafeAreaView>


                    <View style={styles.MainContainer}>
                        <ImageBackground source={require('../../assets/images/forget-password.png')}

                            style={{
                                width: '100%',
                                height: 700,

                        }}>
                    
                            <View style={styles.fillLines}>                            
                                <View style={styles.fillLine1}></View>
                                <View style={styles.fillLine2}></View>
                                <View style={styles.fillLine3}></View>
                            </View>

                            {/* <View style={styles.forgetPasswordPic}></View> */}

                            <View style={styles.forgetPasswordText}>
                                <Text style={styles.forgetPasswordHeading}>Forget Password</Text>
                            </View>

                            <View style={styles.forgetPasswordSubText}>
                                <Text style={styles.forgetPasswordSubheading}>To reset your password, please enter the 4 digit pin sent to your email.</Text>
                            </View>

                            <View style={styles.emailEnterBox}>
                                <Text style={styles.emailHeading}>Email :</Text>
                                <TextInput
                                            style={styles.input}
                                            onChangeText={onChangeEmail}
                                            value={email}
                                            placeholder="Enter Your Email"
                                            placeholderTextColor={'#838383'}

                                />
                            </View>

                            <TouchableOpacity style={styles.ContinueButton1} onPress={()=>{router.push('/forget-password-otp')}}>
                                <Text style={styles.forgetPasswordButtonText}>Reset Password</Text>
                            </TouchableOpacity>

                            



                        </ImageBackground>
                    </View>


            </SafeAreaView>


    );

}