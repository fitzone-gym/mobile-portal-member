
"use client";
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image, ImageBackground , TextInput,Button,} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import styles from '../../styles/signup.style';

import axios from 'axios';

// const RegistrationForm: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/register', { username, email, password });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error registering:', error);
//     }
//   };



// import CheckBox from '@react-native-community/checkbox';



function registration(){
    const[first_name, setfirst_name] = useState("");
    const[last_name, setlast_name] = useState("");
    const[email, setemail] = useState("");
    const[mobile_no, setmobile_no] = useState("");
    const[gender, setgender] = useState("");

    const handleSubmit = (e:React.FormEvent) => {
        console.log("register now");
        e.preventDefault();

        // send data to the backend

        axios.post("http://localhost:5400/memberRegisteration",{first_name, last_name, email, mobile_no, gender})
        .then((response)=>{
            console.log("Data submit successfully to backend", response.data);
            setfirst_name("");
            setlast_name("");
            setemail("");
            setmobile_no("");
            setgender("");
        })

        .catch((error)=>{
            console.log("Error submitting data", error);
        })
    }



    // export default function Home() {     

    //     const [isChecked, setIsChecked] = useState(false);
    //     const handleCheckboxChange = () => {
    //         setIsChecked(!isChecked);
    //     };

    // const handleRegister = () => {
    //     if (isChecked) {
    //     // Perform registration logic here
    //     } else {
    //     // Display a message or prevent registration
    //     }
    // };

    const router = useRouter()

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: '',
                }}
            />
            
            <View style={styles.container}>
                <ImageBackground source= {require('../../assets/images/register.png')}resizeMode='cover' style={styles.backgroundImage}>
                    <View style={styles.form}>
                        <Text style={styles.heading}>
                            Register Now
                        </Text>

                        <View style={styles.signinTxt}>
                            <Text style={styles.subContent}>First Name</Text>
                            <TextInput style={styles.txtInput} id='first_name' value={first_name}/>
                            <Text style={styles.subContent}>Last Name</Text>
                            <TextInput style={styles.txtInput} id='last_name' value={last_name}/>  
                            <Text style={styles.subContent}>Email</Text>
                            <TextInput style={styles.txtInput} id='email' value={email}/>    
                            <Text style={styles.subContent}>Mobile No</Text>
                            <TextInput style={styles.txtInput} id='mobile_no' value={mobile_no}/>   
                            <Text style={styles.subContent}>Gender</Text>
                            <TextInput style={styles.txtInput} id='gender'value={gender}/>
                        </View>    

                        <View style = {styles.terms}> 
                            {/* <CheckBox
                                title="I agreed to all Terms, Privacy Policy and Fees"
                                checked={isChecked}
                                onPress={handleCheckboxChange}
                                containerStyle={styles.checkboxContainer}
                                textStyle={styles.checkboxText} 
                                checkedColor='#E54646'
                            /> */}
                        </View>

                        <Button 
                            title="Register"
                            onPress={handleSubmit}
                            disabled={!isChecked} // Disable the button if checkbox is not checked
                            // buttonStyle={styles.buttonStyle}
                            // titleStyle={styles.titleStyle}
                        />
                        
                        <View style={styles.underTxt}>
                            <Text style={styles.RegisterToSignIn}>Already have an account?</Text>
                            <TouchableOpacity
                                    onPress={()=>{
                                        router.push('../sign-up')
                                    }}
                                >
                                    <Text style={styles.pwtxt}>Sign in</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
    }
