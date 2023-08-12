import styles from "../../styles/appointment.style";

import {View, TouchableOpacity, SafeAreaView, ImageBackground, Text, Image, ScrollView} from "react-native";


import * as React from "react";
import { useRouter } from "expo-router";
import{Route} from "expo-router/build/Route";
import CalendarScreen from "../../components/CalendarScreen";


export default function appointment(){


    const router = useRouter();
    return (
        <SafeAreaView style={styles.appointmentSafeArea}>
            <ScrollView>

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


                <View style={styles.calenderView}>
                    <CalendarScreen/>

                </View>

                <Text style={styles.specialEventHeading}>Special Events</Text>
                <View style={styles.specialEvents}></View>

                <Text style={styles.specialAnnouncementsHeadings}>Special Announcements</Text>
                <View style={styles.specialAnnouncements}></View>

        </ScrollView>
    </SafeAreaView>
    )

};