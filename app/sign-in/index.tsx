import styles from '../../styles/signin.style';
import { View, Text,TextInput, Image, SafeAreaView,ImageBackground,TouchableOpacity,Button} from 'react-native';
import { Stack , useRouter} from 'expo-router';
import React,{useState} from 'react';
import axios from 'axios';
import baseUrl from '../../axios';
// import Icon from 'react-native-paper/lib/typescript/src/components/Icon';

const LoginScreen: React.FC =() => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");


    const handleLogin = async () =>{
        //simulating a simple login logic
        if(email === '' || password === ''){
            setError("Invalid Username or Password");
            alert("Invalid Username or Password")
        }
        else{
            setError("");
            
            router.push('(dashboard)/Dashboard')
            try {
                const response = await axios.post(`${baseUrl}/auth/login`, {
                    email: email,
                    password: password
                })
                
                console.log(response.data);
                

                    if(response.data.success){
                       const currentUser = response.data.data;
                       console.log(currentUser);  
                       // if cookie is set else add JWT token sessoin, local storage 
                       // add to the session
                       // state application state
                       //define the route                       
                    }
            }catch(err){
                console.log(err);  
            }
        }
    };


    const router = useRouter()

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: '',
                }}
            />
                <View style={styles.container}>
                    <ImageBackground source= {require('../../assets/images/login-new.png')}resizeMode='cover' style={styles.backgroundImage}>
                        <View style={styles.upper}>
                            <View style={styles.top}>
                                <Image style= {styles.logo}source={require('../../assets/images/logo.png')}/>
                            </View>
                            <View style={styles.upperdiv}>
                                    <Text style={styles.upperTxt}>
                                        Exercise smartly and be physically active
                                    </Text>
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.heading}>
                                Sign In
                            </Text>
                            <View style={styles.signinTxt}>
                                <Text style={styles.subContent}>Email</Text>

                                <TextInput style={styles.txtInput} value={email} onChangeText={setEmail}/>
                                <Text style={styles.subContent}>Password</Text>
                                <TextInput style={styles.txtInput} value={password} onChangeText={setPassword} autoCorrect={false} secureTextEntry={true}  />
                                <TouchableOpacity
                                    onPress={()=>{
                                        router.push('../forget-password')
                                    }}
                                >
                                    <Text style={styles.pwtxt}>Forget Password ?</Text>
                                </TouchableOpacity>
                            </View> 

                            {error ? <Text>{error}</Text> : null}  
                                                 
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={handleLogin}
                            >
                                <Text style={styles.btnTxt}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
        </SafeAreaView>
    )
    
};

// router.push('../dashboard')
export default LoginScreen;

