import styles from '../styles/home.style';

import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
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
            
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/images/get-started.png')}
                    resizeMode='cover'
                    style={styles.GetStarted}/>


                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            router.push('/member')
                        }}
                    >
                        <Text>Click</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}