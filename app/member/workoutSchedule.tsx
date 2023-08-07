import styles from '../../styles/workoutSchedule.style';

import {ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View, Image, Text} from 'react-native'
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Button, Card, PaperProvider } from 'react-native-paper';

export default function workoutSchedule(){
    const router = useRouter

    return(
        <PaperProvider>
            <SafeAreaView>
                <Stack.Screen
                options={{title:'Trainer Profile'}}/>
                <ScrollView>
                    <View style={styles.fullbody}>
                        <View style={styles.topcontainer}>
                            <ImageBackground
                            source={
                                require('../../assets/images/workoutshedulebackground.png')
                            }
                            resizeMode='cover'
                            style={styles.topcontainerimage}>
                                <View style={styles.topicons}>
                                    <TouchableOpacity>
                                        <Image
                                            style={styles.sidebaricon}
                                            source={require('../../assets/images/Sidebarimage.png')}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            style={styles.bellicon}
                                            source={require('../../assets/images/bell.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.text}>Workout schedule</Text>
                                <View style={styles.medicheckup}>
                                    <View style={styles.smallbox}>
                                        <Text style={styles.smallboxtext}>Today burn calories</Text>
                                        <Text style={styles.smallboxbigNumber}>220</Text>
                                    </View>

                                    <View style={styles.smallbox}>
                                        <Text style={styles.smallboxtext}>Clock</Text>
                                        <Text style={styles.smallboxbigNumber}>01 : 30</Text>
                                    </View>
                                </View>
                            
                            </ImageBackground>

                        </View>

                        <View style={styles.bottomcontainer}>

                            <View style={styles.workouts}>
                                    
                                    <View style={styles.textbox}>
                                    <Text style={styles.item}>Scot</Text>
                                    <Text style={styles.setcount}>1 set</Text>
                                    <Text style={styles.repcount}>12 reps</Text>
                                        
                                    </View>

                                    <View style={styles.textbox}>
                                    <Text style={styles.item}>Leg press</Text>
                                    <Text style={styles.setcount}>2 set</Text>
                                    <Text style={styles.repcount}>10 reps</Text>
                                        
                                    </View>

                                    <View style={styles.textbox}>
                                    <Text style={styles.item}>Leg calf</Text>
                                    <Text style={styles.setcount}>1 set</Text>
                                    <Text style={styles.repcount}>12 reps</Text>
                                        
                                    </View>
                            </View>

                        </View>

                    </View>
                    
                </ScrollView>

            </SafeAreaView>
        </PaperProvider>
    )
}