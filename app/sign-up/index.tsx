import styles from '../../styles/home.style';

import { View, Text, Image, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';

import { useRouter } from 'expo-router';

export default function Home() {

    const router = useRouter() 

    return (
        <SafeAreaView>
            
            <ScrollView>

                <TouchableOpacity style={styles.buttonDashboard} onPress={()=>{router.push('/dashboard')}}>
                    <Text>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgetPasswordButton} onPress={()=>{router.push('/forget-password')}}>
                    <Text>Forget password</Text>
                </TouchableOpacity>
            </ScrollView>
            
        </SafeAreaView>
    )
}