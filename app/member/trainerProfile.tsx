import styles from '../../styles/trainerProfile.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Button, Card, PaperProvider} from 'react-native-paper';


export default function trainerProfile(){

    const router = useRouter()

    return(
        <PaperProvider>
        <SafeAreaView>
            <Stack.Screen
            options={{title:'Trainer Profile',}}/>

            <ScrollView style={styles.fullbody}>



                <ImageBackground
                    source={
                        require('../../assets/images/TrainerProfileBackground.png')
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
                                <Text style={styles.text}>Trainer Profile</Text>
                                <View style={styles.imageanddetails}>
                                    <Image
                                        style={styles.trainerimage}
                                        source={require('../../assets/images/Trainers/Kithsandu.jpg')}
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
                                            <Text style={styles.basicinfo}>Kithsandu Rathnayake</Text>
                                            <Text style={styles.basicinfo}>29</Text>
                                            <Text style={styles.basicinfo}>Male</Text>
                                            <Text style={styles.basicinfo}>0717591952</Text>
                                            <Text style={styles.basicinfo}>krathnayake@gmail.com</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.workingExandmembers}>
                                    <View style={styles.Workexperience}>
                                        <Text style={styles.workingextext}>Working Experience</Text>
                                        <Text style={styles.workingexyers}>8</Text>
                                        <Text style={styles.workingextext}>Years</Text>
                                    </View>
                                    <View style={styles.members}>
                                        
                                    </View>
                                </View>

                                <View style={styles.lowercontent}>
                                    <View >
                                            <Text style={styles.topictext}>Qualification</Text>
                                            <View style={styles.newtextbox}>
                                                <Text style={styles.textboxtext}>NVQ 6</Text>
                                                <Text style={styles.textboxtext}>Physical and gymnasium diploma in open university of sri lanka</Text>
                                                <Text style={styles.textboxtext}>International physiotherapy diploma in KAU health university</Text>
                                                <Text style={styles.textboxtext}>Valid and Qualified personal trainer from health ministry</Text>
                                                <Text style={styles.textboxtext}>8 years nutrition experience</Text>
                                                
                                            </View>
                                    </View>

                                    <View >
                                            <Text style={styles.topictext}>Member Rating</Text>
                                            <View style={styles.newtextbox}>
                                            
                                            </View>
                                    </View>

                                    <View >
                                            <Text style={styles.topictext}>Member Reviews</Text>

                                            <Card  style={styles.newtextbox}>
                                                <Card.Content>
                                                <Text style={styles.textboxtexttitle}>Kumara Dharmasiri</Text>
                                                <Text style={styles.textboxtext}>Wow, I can't thank my gym trainer enough for the incredible progress I've made! Their expertise,
                                                                        motivation, and personalized workout plans have truly transformed my fitness journey.
                                                                        I feel stronger, healthier, and more confident than ever before.  Highly recommend this amazing
                                                                        gym trainer to anyone looking to achieve their fitness goals and beyond!</Text>
                                                </Card.Content>
                                            </Card>

                                            <Card  style={styles.newtextbox}>
                                                <Card.Content>
                                                <Text style={styles.textboxtexttitle}>Kamal Siriwardhena</Text>
                                                <Text style={styles.textboxtext}>My gym trainer is an absolute rockstar! They bring such positive energy and passion to every session,
                                                                        making workouts fun and enjoyable. I've seen remarkable improvements in my strength and
                                                                        endurance, all thanks to their guidance and encouragement. They always go the extra mile to 
                                                                        ensure I'm using proper form and technique, preventing injuries and maximizing results. 
                                                                        I'm so grateful to have such an inspiring and dedicated trainer by my side on this fitness journey!"</Text>
                                                </Card.Content>
                                            </Card>

                                            <Card  style={styles.newtextbox}>
                                                <Card.Content>
                                                <Text style={styles.textboxtexttitle}>Sahan Deshan</Text>
                                                <Text style={styles.textboxtext}>Training with my gym trainer has been a game-changer! Their vast knowledge of fitness and nutrition has completely transformed my lifestyle. Not only have I seen remarkable improvements in my physical strength and endurance, but I've also developed a better understanding of how to fuel my body for optimal performance. They constantly challenge and push me beyond my limits, helping me achieve goals I never thought possible. If you're serious about achieving real results and making lasting changes, I highly recommend working with this exceptional gym trainer!</Text>
                                                </Card.Content>
                                            </Card>
                                    </View>


                                    <Button style={styles.startedbutton}  mode="contained" onPress={() => {router.push('/member/hireTrainer') }} textColor='#FFFFFF'>
                                        Get Started
                                    </Button>


                                    {/* <TouchableOpacity style={styles.getstartedbutton} 
                                    onPress={() => {
                                        router.push('/member')
                                    }}>
                                    <Text style={styles.getstartedbuttonText}>Get Started</Text>
                                        
                                    </TouchableOpacity> */}
                                    
                                </View>

                                


                        </View>
                    
                    </ImageBackground>

            </ScrollView>

        </SafeAreaView>
        </PaperProvider>
    )
}