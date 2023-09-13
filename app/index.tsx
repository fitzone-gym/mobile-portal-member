import React, { useEffect } from 'react';
import styles from '../styles/home.style';

import { View, Text, TouchableOpacity, SafeAreaView, ScrollView,Image, ImageBackground, Button} from 'react-native';
import {Provider} from 'react-redux';
import { Route } from 'expo-router/build/Route';
import store, { pstore, useAppDispatch } from './redux/store';
import { Redirect, Stack, useRouter } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';

export default function Home() {

    const router = useRouter()
    return (

        <Provider store={store}>
        <PersistGate loading={null} persistor={pstore}>
                <PaperProvider>
                <SafeAreaView>

                        {/* <Redirect href="(dashboard)/Dashboard"/> */}

                        <View style={styles.containerHome}>
                            <ImageBackground source={require('../assets/images/sign-in.png')}
                            
                            style={{
                                width: '100%',
                                height: 800,
                            }}/>

                            <View style={styles.SignInBox}>
                                <View style={styles.SignInMain}>
                                    <Text style={styles.SignInBoxHeading1}>Increase your target to be healthier to continue exercising </Text>
                                    <Text style={styles.SignInBoxHeading2}>This application can improve yourself to have exercise smartly and be physically active</Text>
                                    
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <TouchableOpacity style={styles.button} onPress={()=> {router.push('/sign-in')}}>
                                        <Text style={styles.titleStyle}>Get Started</Text>
                                    </TouchableOpacity>
                                    </View>

                                    <View style={styles.registrationBar}>
                                        <Text style={styles.SignInBoxHeading3}>You don't have an account?</Text> 
                                        <TouchableOpacity  onPress={()=>{router.push('/Register')}}><Text style={styles.registerLink}>Register</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    

                </SafeAreaView>
                </PaperProvider>
                </PersistGate>

</Provider>

    )
}

