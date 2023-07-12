import styles from '../../styles/home.style';

import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

import { Stack } from 'expo-router';

export default function Home() {

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'Member',
                }}
            />
            
            <ScrollView>
                <View style={styles.container} >
                    <Text style={styles.heading}>Member</Text>
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
            </ScrollView>
            
        </SafeAreaView>
    )
}