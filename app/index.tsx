import styles from '../styles/home.style';

import { View, Text, TouchableOpacity, SafeAreaView, ScrollView,Image, ImageBackground, Button} from 'react-native';
import { useRouter } from 'expo-router';
import { Route } from 'expo-router/build/Route';

export default function Home() {
    const router = useRouter()
    return (
        <SafeAreaView>

                <View style={styles.container}>
                    <ImageBackground source={require('../assets/images/sign-in.png')}
                    
                    style={{
                        width: '100%',
                        height: 700,
                    }}/>

                    <View style={styles.SignInBox}>
                        <View style={styles.SignInMain}>
                            <Text style={styles.SignInBoxHeading1}>Increase your target to be healthier to continue exercising </Text>
                            <Text style={styles.SignInBoxHeading2}>This application can improve yourself to have exercise smartly and be physically active</Text>
                            <Button title="Get Started" color="#E54646" onPress={()=> {router.push('/sign-up')}}></Button>
                            <View style={styles.registrationBar}>
                                <Text style={styles.SignInBoxHeading3}>You don't have an account?</Text> 
                                <TouchableOpacity  onPress={()=>{router.push('/Register')}}><Text style={styles.registerLink}>Register</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            

        </SafeAreaView>
    )
}