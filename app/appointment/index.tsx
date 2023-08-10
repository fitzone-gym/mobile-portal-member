import styles from "../../styles/appointment.style";

import {View, TouchableOpacity, SafeAreaView, ImageBackground, Text, Image} from "react-native";

import * as React from "react";
import { useRouter } from "expo-router";
import{Route} from "expo-router/build/Route";

export default function appointment(){
    const router = useRouter();
    return (
        <SafeAreaView>

                <ImageBackground source={require('../../assets/images/appointment.png')} style={{width:'100%', height:155 }}>
                    <View style={styles.MemberNavigationBar}>

                        <View style={styles.HomeNavigation}></View>

                        <View style={styles.MessageAndNotificationNavigation}>

                        <View style={styles.MessageBox}></View>
                        <View style={styles.NortificationBox}></View>

                        </View>

                    </View> 

                    <Text style={styles.appointmentHeading}>Appointment</Text>
                    </ImageBackground>


            <View style={styles.calenderView}><Text>ji</Text></View>
        </SafeAreaView>
    )

};