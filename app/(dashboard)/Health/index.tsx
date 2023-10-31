import styles from "../../../styles/appointment.style";

import {View, TouchableOpacity, SafeAreaView, ImageBackground, Text, Image, ScrollView, TextInput} from "react-native";


import * as React from "react";
import { Slot, useRouter } from "expo-router";
import{Route} from "expo-router/build/Route";
import CalendarScreen from "../../../components/CalendarScreen";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";

import getdays from "../../../utllis/getdays"
import { useAppSelector } from "../../redux/store";
import axios from "../../../axios";


export default function appointment(){

    const router = useRouter();
    const DayList = getdays(30);

    // const[reason, setreason] = useState<string>("");

    const currentUser = useAppSelector(state => state.user)

    const [selectedReason, setSelectedReason] = useState(0);
    const [resons, setResons] = useState([
        {sloT:"For basic heath check", selected: false },
        {sloT:"Consultant purpose", selected: false },
    ]);

    const [selectedSlot, setSelectedSlot] = useState(0);
    const [selectedDate, setSelectedDate] = useState('')
    const [slots, setSlots] = useState([
        {sloT:"06:00 PM - 06:30 PM", selected: false },
        {sloT:"06:30 PM - 07:00 PM", selected: false },
        {sloT:"07:00 PM - 07:30 PM", selected: false },
        {sloT:"07:30 PM - 08:00 PM", selected: false },
        {sloT:"08:00 PM - 08:30 PM", selected: false },
        {sloT:"08:30 PM - 09:00 PM", selected: false },
        {sloT:"09:00 PM - 09:30 PM", selected: false },
        {sloT:"09:30 PM - 10:00 PM", selected: false },
    ]);


    const getDays=(month: number)=>{
        let days =0;
        if(month==1){
            days=31;
        }
        else if(month==2){
            days=28;
        }
        else if(month==3){
            days=31;
        }
        else if(month==4){
            days=30;
        }
        else if(month==5){
            days=31;
        }
        else if(month==6){
            days=30;
        }
        else if(month==7){
            days=31;
        }
        else if(month==8){
            days=31;
        }
        else if(month==9){
            days=30;
        }
        else if(month==10){
            days=31;
        }
        else if(month==11){
            days=30;
        }
        else if(month==12){
            days=31;
        }
        return days;
    }

    const handleBookNow = () => {
        console.log("test");
        
        axios.post('/memberHealthCheckAppointment', {
            selectedDate: selectedDate,
            selectedTime: slots[selectedSlot].sloT,
            user_id: currentUser.user_id,
            selectedReason: resons[selectedReason].sloT
            // reason:setreason,
            
        }).then((res) => {
            if(res.data.insertedId){
                alert("Appointment Book successfully")
            }else {
                alert("Error occurred in Appointment Book")
            }
        }).catch((err) => {
            console.log(err);
            alert("Error occurred in Appointment Book dfdfd")  
        })
    }


    return (
        <SafeAreaView style={styles.appointmentSafeArea}>
            <ScrollView>

                <ImageBackground source={require('../../../assets/images/payment.png')} style={{width:'100%', height:155 }}>

                    <Text style={styles.appointmentHeading}>Health Check</Text>
                    <View style={styles.textboxcontent}>
                    <View style={styles.smallbox}>
                            <Text style={styles.smalltext1}>{new Date().getDate()} {new Intl.DateTimeFormat('en-US',{month:'long'}).format(new Date())} {new Date().getFullYear()}</Text>
                            
                            <Text style={styles.smalltext2}></Text>
                        </View>
                        <View style={styles.smallbox}>
                            <Text style={styles.smalltext1}></Text>
                            <Text style={styles.smalltext2}>Time</Text>
                        </View>
                    </View>
                </ImageBackground>


                <View style={styles.container}>

                    <Text style={styles.date}>Appointment Date</Text>
                    <View >
                        <FlatList 
                                showsHorizontalScrollIndicator={false}
                                horizontal 
                                data={DayList} 
                                renderItem={({item,index})=> {
                                return(
                                    <TouchableOpacity 
                                        onPress={() => {                                            
                                            setSelectedDate(item.key)
                                        }}
                                        style={{
                                            width:60,
                                            height:50,
                                            borderRadius:10,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            // backgroundColor: 'white',
                                            // borderColor: '#FF5A5A',
                                            borderWidth: 1,
                                            marginLeft:10,
                                            borderColor:item.key==selectedDate?'#FF5A5A':'white', backgroundColor:item.key==selectedDate? '#FF5A5A' : ''
                                            }}>
                                        <Text
                                        style={{
                                            color: 'white',
                                        }}>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                        }}/>
                    </View>

                    <Text style={styles.timeslot}>Available Slots</Text>
                    <View>
                        <FlatList
                        numColumns={2}
                        data={slots}
                        keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) =>{
                                return(
                                    <TouchableOpacity 
                                        style={[styles.TimeSlots,
                                                {borderColor:selectedSlot==index?'#FF5A5A':'white', backgroundColor:selectedSlot==index? '#FF5A5A' : ''}
                                            ]}
                                            onPress={() =>{
                                                setSelectedSlot(index);
                                            }}>
                                        <Text style={{color:selectedSlot==index? 'white' : 'white'}}>
                                            {item.sloT}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>

                    <Text style={styles.timeslot}>Appointment Reason</Text>
                    <View>
                        <FlatList
                        numColumns={2}
                        data={resons}
                        keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) =>{
                                return(
                                    <TouchableOpacity 
                                        style={[styles.TimeSlots,
                                                {borderColor:selectedReason==index?'#FF5A5A':'white', backgroundColor:selectedReason==index? '#FF5A5A' : ''}
                                            ]}
                                            onPress={() =>{
                                                setSelectedReason(index);
                                            }}>
                                        <Text style={{color:selectedReason==index? 'white' : 'white'}}>
                                            {item.sloT}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>

                    {/* <Text style={styles.subContent}>Reason</Text>
                    <TextInput style={styles.txtInput} id='reason' value={reason} onChange={(value) => setreason(value.nativeEvent.text) }/> */}


                    <TouchableOpacity style={styles.commonbtn} onPress={handleBookNow}>
                        <Text style={{color:'white', fontSize:17,}}>Book Now</Text>
                    </TouchableOpacity>

                </View>



                <Text style={styles.remainingAppointment}>Next Appointment</Text>
                <View style={styles.appointmentHistory}>

                    <View style={styles.appointmentSubDate}>
                        <Text style={styles.appointmentDateHeading}>Date</Text>
                        <Text style={styles.appointmentDate}>2022.11.02</Text>
                    </View>

                    <View style={styles.appointmentSubTime}>
                        <Text style={styles.appointmentTimeHeading}>Time</Text>
                        <Text style={styles.appointmentTime}>10:00 AM - 12:00 AM</Text>
                    </View>
                </View>

        </ScrollView>
    </SafeAreaView>
    )

};