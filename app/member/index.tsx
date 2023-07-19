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

                <TouchableOpacity style={styles.buttonDashboard} onPress={()=>{router.push('/dashboard')}}>
                    <Text>Press Here</Text>
                </TouchableOpacity>

                <View>
                    <Text>side bar</Text>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}