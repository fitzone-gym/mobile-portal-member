import styles from "../../styles/appointment.style";

import {View, TouchableOpacity, SafeAreaView, ImageBackground, Text, Image, ScrollView} from "react-native";


import * as React from "react";
import { useRouter } from "expo-router";
import{Route} from "expo-router/build/Route";

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


                <View style={styles.calenderViewTimeSlots}>
                    <View style={styles.UpTimeSlot}>
                        <Text style={styles.TimePeriod}>8.00 AM - 10.00 AM</Text>
                    </View>
                    <View style={styles.TimeSlotBooked}>
                        <Text style={styles.TimePeriod}>10.00 AM - 12.00 AM</Text>
                        <Text style={styles.TimePeriodBooked}>Booked</Text>
                    </View>
                    <View style={styles.TimeSlot}>
                        <Text style={styles.TimePeriod}>1.00 PM - 3.00 PM</Text>
                    </View>
                    <View style={styles.TimeSlot}>
                        <Text style={styles.TimePeriod}>3.00 PM - 5.00 PM</Text>
                    </View>
                    <View style={styles.TimeSlot}>
                        <Text style={styles.TimePeriod}>6.00 PM - 8.00 PM</Text>
                    </View>
                    <View style={styles.DownTimeSlot}>
                        <Text style={styles.TimePeriod}>8.00 PM - 10.00 PM</Text>
                    </View>

                </View>



        </ScrollView>
    </SafeAreaView>
    )

};