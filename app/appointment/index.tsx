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



                    <Text style={styles.appointmentHeading}>Appointment</Text>
                </ImageBackground>


                <View style={styles.calenderView}>
                    <CalendarScreen/>

                </View>

                <Text style={styles.specialEventHeading}>Special Events</Text>
                <View style={styles.specialEvents}>
                    <Text style={styles.special_event_date}>29th Aug 2023</Text>
                    <Text style={styles.special_event_heading}>New Zumba Class</Text>
                    <Text style={styles.special_event_body}>Starting 29 th July on ward. Zumba class for all age members. From begin to end. Conducting by highly qualified zumba masters. </Text>
                </View>

                {/* <Text style={styles.specialAnnouncementsHeadings}>Special Announcements</Text> */}

                <View style={styles.specialAnnouncements}>
                <Text style={styles.special_event_date}>25th Aug 2023</Text>
                    <Text style={styles.special_event_heading}>Band Cardio Session</Text>
                    <Text style={styles.special_event_body}>Starting 27 th July on ward. Zumba class for all age members. From begin to end. Conducting by highly qualified zumba masters.  </Text>                    
                </View>

        </ScrollView>
    </SafeAreaView>
    )

};