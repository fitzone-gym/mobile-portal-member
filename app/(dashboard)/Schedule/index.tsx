import styles from '../../../styles/workoutSchedule.style';

import {ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View, Image, Text} from 'react-native'
import { Stack, useRouter } from 'expo-router';
import React, {useEffect, useState} from 'react';
import { Button, Card, PaperProvider } from 'react-native-paper';

import axios from "../../../axios";

// import baseUrl from '../../../axios';
import moment from 'moment';

interface WorkoutSchedule{
    exercise_id:number;
    name:string;
    sets:number;
    reps:number;
}

export default function workoutSchedule(){

    const [workoutSchedule, setworkoutSchedule] = useState<WorkoutSchedule[]>([]);

    useEffect(() => {
        axios
            .get('/workoutSchedule')
            .then((response) => {
                setworkoutSchedule(response.data.data);
                console.log(response.data.data)
            })
            .catch((error) => console.error(error));
    }, []);



    const router = useRouter

    const [currentTimeWithMoment, setcurrentTimeWithMoment] = useState('')

    useEffect(() => {

        const interval = setInterval(() => {
            let timeMoment =moment().utcOffset('+05:30').format('hh:mm')            
            setcurrentTimeWithMoment(timeMoment);
        }, 1000);

        return () => clearInterval(interval);

    } , []);

    return(
        <PaperProvider>
            <SafeAreaView>
                <Stack.Screen
                options={{title:'Workout Schedule'}}/>
                <ScrollView>
                    <View style={styles.fullbody}>
                        <View style={styles.topcontainer}>
                            <ImageBackground
                            source={
                                require('../../../assets/images/workoutshedulebackground.png')
                            }
                            resizeMode='cover'
                            style={styles.topcontainerimage}>

                                <Text style={styles.text}>Workout schedule</Text>
                                <View style={styles.medicheckup}>
                                    {/* <View style={styles.smallbox}>
                                        <Text style={styles.smallboxtext}>Today burn calories</Text>
                                        <Text style={styles.smallboxbigNumber}>2500</Text>
                                    </View> */}

                                    <View style={styles.smallbox}>
                                        {/* <Text style={styles.smallboxtext}>Clock</Text> */}
                                        {/* date view */}
                                        <Text style={styles.Date}>{new Date().getDate()} {new Intl.DateTimeFormat('en-US',{month:'long'}).format(new Date())} {new Date().getFullYear()}</Text>
                                        {/* <Text style={styles.Month}>{new Intl.DateTimeFormat('en-US',{month:'long'}).format(new Date())}</Text> */}
                                        {/* <Text style={styles.Year}>{new Date().getFullYear()}</Text> */}

                                        <Text style={styles.smallboxbigNumber}>{currentTimeWithMoment}</Text>
                                    </View>
                                </View>
                            
                            </ImageBackground>

                        </View>

                        <View style={styles.bottomcontainer}>

                            <View style={styles.workoutTitle}>
                                <Text style={styles.itemTitle}>Exercise</Text>
                                <Text style={styles.setcountTitle}>Sets</Text>
                                <Text style={styles.repcountTitle}>Reps</Text>
                            </View>

                            <View style={styles.workouts}>
                                    {workoutSchedule.map((workout) =>(

                                        <View style={styles.textbox}>
                                        <Text style={styles.item}>{workout.name}</Text>
                                        <Text style={styles.setcount}>{workout.sets} set</Text>
                                        <Text style={styles.repcount}>{workout.reps} reps</Text>
                                            
                                        </View>

                                    ))}
                                    

                            </View>

                        </View>

                    </View>
                    
                </ScrollView>

            </SafeAreaView>
        </PaperProvider>
    )
}