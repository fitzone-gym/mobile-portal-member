import React from 'react';
import { Drawer } from 'expo-router/drawer';

import { FontAwesome5 } from '@expo/vector-icons';

import { useRouter } from 'expo-router';

export default function Layout() {

    const router = useRouter()

    return (
        <Drawer screenOptions={{
            drawerStyle: {
                paddingTop: 50,
                backgroundColor: '#b54646',
            },
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            headerStyle: {
                backgroundColor: 'rgba(0,0,0,0)',
            },
        }}>
            <Drawer.Screen
                name="Dashboard"
                options={{
                    drawerLabel: 'Dashboard',
                    title: 'Dashboard',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="home" style={{ width: 25 }} size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="Trainers"
                options={{
                    drawerLabel: 'Trainers',
                    title: 'Trainers',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="users" style={{ width: 25 }} size={size} color={color} />)
                }}
            />
            <Drawer.Screen
                name="Appointment"
                options={{
                    drawerLabel: 'Appointment',
                    title: 'Appointment',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="calendar-alt" style={{ width: 25 }} size={size} color={color} />)
                }}
            />
            <Drawer.Screen
                name="Schedule"
                options={{
                    drawerLabel: 'Schedule',
                    title: 'Schedule',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="file-alt" style={{ width: 25 }} size={size} color={color} />)
                }}
            />
            <Drawer.Screen
                name="DietPlan"
                options={{
                    drawerLabel: 'Diet Plan',
                    title: 'Diet Plan',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="heartbeat" style={{ width: 25 }} size={size} color={color} />)
                }}
            />
            <Drawer.Screen
                name="Payment"
                options={{
                    drawerLabel: 'Payment',
                    title: 'Payment',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="dollar-sign" style={{ width: 25 }} size={size} color={color} />)
                }}
            />

            <Drawer.Screen
                name="Health"
                options={{
                    drawerLabel: 'Health',
                    title: 'Health',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="heart" style={{ width: 25 }} size={size} color={color} />)
                }}
            />

            <Drawer.Screen
                name="MyProfile"
                options={{
                    drawerLabel: 'My Profile',
                    title: 'My Profile',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="user" style={{ width: 25 }} size={size} color={color} />)
                }}
            />
        </Drawer >
    )
}

// function isLoggedIn(): any {
//         throw new Error('Function not implemented.');
//     }
// function appRouter(): any {
//     throw new Error('Function not implemented.');
// }

