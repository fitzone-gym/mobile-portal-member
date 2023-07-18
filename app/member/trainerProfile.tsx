import styles from '../../styles/trainerProfile.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { Stack } from 'expo-router';
import React from 'react';
import { Card, PaperProvider } from 'react-native-paper';


export default function trainerProfile(){

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
                        {/* <View style={styles.bottomcontainer}> */}
                            <Text style={styles.text}>Our trainers</Text>
                            <Image
                                style={styles.trainerimage}
                                source={require('../../assets/images/a.png')}
                            />
                        {/* </View> */}
                    
                    </ImageBackground>

            </ScrollView>

        </SafeAreaView>
        </PaperProvider>
    )
}