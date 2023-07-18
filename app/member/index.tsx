import styles from '../../styles/home.style';

import { View, Text, Image, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';

import { Stack, useRouter } from 'expo-router';

export default function Home() {

    const router = useRouter() 

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'Member',
                }}
            />
            
            <ScrollView>
                <View style={styles.SignUpContainer} >
                    <Image
                    source={{
                        uri: 'https://stylioo.blob.core.windows.net/images/logo.png'
                    }}
                    // resizeMode='contain'
                    style={{
                        width: '100%',
                        height: 300,
                    }}
                />              
                </View>
                <TouchableOpacity style={styles.buttonDashboard} onPress={()=>{router.push('/dashboard')}}>
                    <Text>Press Here</Text>
                </TouchableOpacity>

                <View>
                    <Text>jhbfsojhcbsofbohsbohbsajfbjoshbfbahfbndjvbahbdvlajbhvvhbdcva</Text>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}