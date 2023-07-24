import styles from "../../styles/forget-password.style";

import react from "react";
import { useRouter } from "expo-router";
import {Route} from "expo-router/build/Route";

import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground } from "react-native";

export default function changePassword(){
    const router = useRouter();

    return(
            <SafeAreaView>
                <View style={styles.MainContainer}>
                    <ImageBackground source={require('../../assets/images/forget-password.png')}

                            style={{
                                width: '100%',
                                height: 700,

                        }}>


                            <View style={styles.fillLines}>                            
                                    <View style={styles.fillLine3}></View>
                                    <View style={styles.fillLine3}></View>
                                    <View style={styles.fillLine1}></View>
                            </View>

                    </ImageBackground>
                </View>

                
            </SafeAreaView>
    );
}