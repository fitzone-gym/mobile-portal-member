import styles from '../../styles/memberProfile.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Button, Card, PaperProvider } from 'react-native-paper';


export default function memberProfile(){

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
                            
                                <Text style={styles.text}>My Profile</Text>
                                <View style={styles.imageanddetails}>
                                    <Image
                                        style={styles.imagepicture}
                                        source={require('../../assets/images/Punsara.jpg')}
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
                                            <Text style={styles.basicinfo}>Punsara Deshan</Text>
                                            <Text style={styles.basicinfo}>25</Text>
                                            <Text style={styles.basicinfo}>Male</Text>
                                            <Text style={styles.basicinfo}>0717591952</Text>
                                            <Text style={styles.basicinfo}>punsaradeshana@gmail.com</Text>
                                        </View>
                                    </View>

                                        <Button style={styles.editbutton} icon="pencil" mode="outlined" onPress={() => { router.push('/member/memberDetailUpdate')}} textColor='#E54646'>
                                            Edit Profile
                                        </Button>


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
                                            <Text style={styles.packagedetails}>Premium annual package</Text>
                                            <Text style={styles.packagedetails}>    3 Full body messages remaining</Text>
                                            <Text style={styles.packagedetails}>    3 foot messages remaining</Text>
                                            <Text style={styles.packagedetails}>    4 steam spa remaining</Text>

                                        </View>
                                </View>

                                <View style={styles.trainerimage}>
                                    <Text style={styles.topictext}>My Trainer</Text>
                                    <TouchableOpacity onPress={() => {
                                        router.push('/member/trainerProfile?id=10005')
                                    }}>
                                    <Image
                                            style={styles.imagepicture}
                                            // source={require('../../assets/images/Trainer.jpg')}
                                            source={{ uri:"https://stylioo.blob.core.windows.net/images/Devin.jpg"}}
                                            resizeMode='cover'
                                    />
                                    </TouchableOpacity>
                                    <Button style={styles.button} mode="contained" onPress={() => {
                                                                router.push('/member/trainerProfile?id=10005')
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