import styles from '../../styles/trainerProfile.style';

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
                                        source={require('../../assets/images/Trainer.jpg')}
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
                                            <View style={styles.textbox}>
                                                
                                            </View>
                                    </View>

                                    <View >
                                            <Text style={styles.topictext}>Member Rating</Text>
                                            <View style={styles.textbox}>
                                                
                                            </View>
                                    </View>

                                    <View >
                                            <Text style={styles.topictext}>Trainning Packages</Text>
                                            <View style={styles.textbox}>
                                            
                                            </View>
                                            <View style={styles.textbox}>
                                                
                                            </View>
                                            <View style={styles.textbox}>
                                                
                                            </View>
                                    </View>


                                    <TouchableOpacity style={styles.getstartedbutton} 
                                    onPress={() => {
                                        router.push('/member')
                                    }}>
                                    <Text style={styles.getstartedbuttonText}>Get Started</Text>
                                        
                                    </TouchableOpacity>
                                    
                                </View>

                                


                        </View>
                    
                    </ImageBackground>

            </ScrollView>

        </SafeAreaView>
        </PaperProvider>
    )
}