import styles from '../../styles/ourTrainers.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import { Stack, useRouter } from 'expo-router';
import React from 'react';

export default function Home() {
    const router = useRouter()
    const DATA = [
        { name: 'Kamal', id: '1',},
        { name: 'Nimal', id: '2',},
        { name: 'saman', id: '3',},
        { name: 'sunil', id: '4',},
    ]

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'Member',
                }}
            />
            
            <ScrollView style={styles.fullbody}>
                
            </ScrollView>
            
        </SafeAreaView>
    )
}}