import styles from "../../styles/forget-password.style";
import React from 'react';

import{ useRouter } from 'expo-router';
import{ Route } from 'expo-router/build/Route';

import{Text, View, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native';

export default function forgetPasswordOTP(){

    const router = useRouter();

    return(

        <SafeAreaView>
                    <View style={styles.MainContainer}>
                        <ImageBackground source={require('../../assets/images/forget-password.png')}

                            style={{
                                width: '100%',
                                height: 700,

                    }}>

                        </ImageBackground>

                    </View>
                    
        </SafeAreaView>

    );
}