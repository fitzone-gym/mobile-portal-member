import styles from "../../styles/appointment.style";

import {View, TouchableOpacity, SafeAreaView, ImageBackground, Text, Image} from "react-native";

import * as React from "react";
import { useRouter } from "expo-router";
import{Route} from "expo-router/build/Route";

export default function appointment(){
    const router = useRouter();
    return (
        <SafeAreaView>
            <View style={styles.upperImageBox}>
                <ImageBackground source={require('../../assets/images/appointment.png')}
                            style={{
                                width:'100%',
                                height:150,
                            }} >


                </ImageBackground>
            </View>
        </SafeAreaView>
    )

};