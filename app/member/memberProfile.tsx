import styles from '../../styles/memberProfile.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Button, Card, PaperProvider } from 'react-native-paper';


export default function trainerProfile(){

    const router = useRouter()

    return(
        <PaperProvider>
        <SafeAreaView>
            <Stack.Screen
            options={{title:'Member Profile',}}/>

            <ScrollView style={styles.fullbody}>

                <ImageBackground
                    source={
                        require('../../assets/images/MemberProfileBackground.png')
                    }
                    resizeMode='cover'
                    style={styles.backgroundimage}>
                        <View style={styles.fullcontent}>
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
                                <Text style={styles.text}>My Profile</Text>
                                <View style={styles.imageanddetails}>
                                    <Image
                                        style={styles.imagepicture}
                                        source={require('../../assets/images/Member.jpg')}
                                        resizeMode='cover'
                                    />
                                    <View style={styles.basicdetails}>
                                        <View>
                                            <Text style={styles.labelofbasicinfo}>Name</Text>
                                            <Text style={styles.labelofbasicinfo}>Age</Text>
                                            <Text style={styles.labelofbasicinfo}>Gender</Text>
                                            <Text style={styles.labelofbasicinfo}>Mobile No</Text>
                                            <Text style={styles.labelofbasicinfo}>Email</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.basicinfo}>Anuradha Perera</Text>
                                            <Text style={styles.basicinfo}>29</Text>
                                            <Text style={styles.basicinfo}>Male</Text>
                                            <Text style={styles.basicinfo}>Mobile No</Text>
                                            <Text style={styles.basicinfo}>anuradhaperera@gmail.com</Text>
                                        </View>
                                    </View>
                                </View>

                                <View>

                                    <View >
                                            <Text style={styles.topictext}>Working progress</Text>
                                            <View style={styles.textbox}>
                                                
                                            </View>
                                    </View>

                                    <View style={styles.workingExandmembers}>
                                        <View style={styles.smallbox}>
                                            <Text style={styles.workingexyers}>29</Text>
                                            <Text style={styles.workingextext}>Workout Days</Text>
                                        </View>
                                        <View style={styles.smallbox}>
                                            <Text style={styles.workingexyers}>2011</Text>
                                            <Text style={styles.workingextext}>Calarious Burned</Text>
                                        </View>
                                    </View>
                                    
                                </View>

                                <View style={styles.medicheckup}>
                                    <View style={styles.smallbox}>
                                        <Text style={styles.smallboxtext}>Suger level</Text>
                                        <Text style={styles.smallboxbigNumber}>220</Text>
                                    </View>

                                    <View style={styles.smallbox}>
                                        <Text style={styles.smallboxtext}>Cholesterol level</Text>
                                        <Text style={styles.smallboxbigNumber}>120</Text>
                                    </View>
                                </View>

                                <View style={styles.smallbox}>
                                        <Text style={styles.smallboxtext}>Blood preasure</Text>
                                        <Text style={styles.smallboxbigNumber}>110</Text>
                                </View>

                                <View style={styles.medicheckup}>
                                    <View style={styles.smallbox}>
                                        <Text style={styles.workingextext}>Water per day</Text>
                                        <Text style={styles.workingexyers}>3</Text>
                                        <Text style={styles.workingextext}>liters</Text>
                                    </View>

                                    <View style={styles.smallbox}>
                                        <Text style={styles.workingextext}>Calories per day</Text>
                                        <Text style={styles.workingexyers}>350</Text>
                                        <Text style={styles.workingextext}>calories</Text>
                                    </View>
                                </View>

                                <View >
                                        <Text style={styles.topictext}>My package</Text>
                                        <View style={styles.textbox}>
                                            <Text style={styles.packagedetails}>premium annual package</Text>
                                        </View>
                                </View>

                                <View style={styles.trainerimage}>
                                    <Text style={styles.topictext}>My Trainer</Text>
                                    <TouchableOpacity onPress={() => {
                                        router.push('/member/trainerProfile')
                                    }}>
                                    <Image
                                            style={styles.imagepicture}
                                            source={require('../../assets/images/Trainer.jpg')}
                                            resizeMode='cover'
                                    />
                                    </TouchableOpacity>
                                    <Button style={styles.button} mode="contained" onPress={() => {
                                                                router.push('/member/trainerProfile')
                                                            }}>
                                        View details
                                    </Button>
                                </View>
                                

                        </View>
                    
                    </ImageBackground>

            </ScrollView>

        </SafeAreaView>
        </PaperProvider>
    )
}