import styles from '../styles/home.style';

import { View, Text, TouchableOpacity, SafeAreaView, ScrollView,Image, ImageBackground } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'fit zone',
                }}
            />

            <ScrollView >
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/images/sign-in.png')}
                    
                    style={{
                        width: '100%',
                        height: 700,
                    }}/>

                    <View style={styles.SignInBox}>

                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}