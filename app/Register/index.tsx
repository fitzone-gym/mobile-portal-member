

import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image, ImageBackground , TextInput,Button, Alert,} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import styles from '../../styles/signup.style';



import axios from 'axios';
import baseUrl from '../../baseUrl';
// import CheckBox from '@react-native-community/checkbox';

//chat gpt function
const Registration:React.FC = () =>{
    const[first_name, setfirst_name] = useState<string>("");
    const[last_name, setlast_name] = useState<string>("");
    const[email, setemail] = useState<any>("");
    const[mobile_no, setmobile_no] = useState<string>("");
    const[password, setpassword] = useState<string>("");



    const handleSubmit = async () =>{

        // all inputs validation
        // if(!first_name || !last_name || !email || !mobile_no || !password){
        //     Alert.alert('validation Error', 'please fill in all fields.');
        //     return;
        // }

        // // first name validation
        // if(!isValidFirstName(first_name)){
        //     setError("Invalid first name");
        //     return;
        // }

        // // last name validation
        // if(!isValidLastName(last_name)){
        //     setError("Invalid last name");
        //     return;
        // }
        // // email validation
        // if(!isValidEmail(email)){
        //     setError("Invalid email");
        //     return;
        // }

        // //password validation
        // if(password.length<8){
        //     setError('Password must be at least 8 characters');
        //     return;
        // }


        
        // further validation can be added, like email format or password complexity checks
        try{
            console.log(password);
            await axios.post(`${baseUrl}/auth/register`,{
                first_name:first_name, 
                last_name:last_name, 
                email:email, 
                mobile_no:mobile_no, 
                password:password,
            }).then((response) =>{
                console.log(response.data)
                // router.push("/sign-up")
            });
            

            // if(response.status === 201){
            //     Alert.alert('Registration Successful', 'You have been registered successfully!');
            // }
            // else{
            //     Alert.alert('Registration Failed', 'An error occurred during registration.');
            // }
        }

        
        catch(error){
            Alert.alert('Error', 'An error occurred during registration.');
            console.error('Error registration',error);
        }
        console.log("Registration Success");
    };

    const isValidEmail=(email:string):boolean =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
    };

    const isValidFirstName=(first_name:string):boolean =>{
        return /^[A-Za-z]+$/.test(first_name);
    };

    const isValidLastName=(last_name:string):boolean =>{
        return /^[A-Za-z]+$/.test(last_name);
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
                <ImageBackground source= {require('../../assets/images/register.png')}resizeMode='cover' style={styles.backgroundImage}>
                    <View style={styles.form}>
                        <Text style={styles.heading}>
                            Register Now
                        </Text>

                        <View style={styles.signinTxt}>
                            <Text style={styles.subContent}>First Name</Text>
                            <TextInput style={styles.txtInput} id='first_name' value={first_name} onChange={(value) => setfirst_name(value.nativeEvent.text) }/>
                            <Text style={styles.subContent}>Last Name</Text>
                            <TextInput style={styles.txtInput} id='last_name' value={last_name} onChange={(value) => setlast_name(value.nativeEvent.text)}/>  
                            <Text style={styles.subContent}>Email</Text>
                            <TextInput style={styles.txtInput} id='email' value={email} onChange={(value => setemail(value.nativeEvent.text))}/>    
                            <Text style={styles.subContent}>Mobile No</Text>
                            <TextInput style={styles.txtInput} id='mobile_no' value={mobile_no} onChange={(value => setmobile_no(value.nativeEvent.text))}/>   
                            <Text style={styles.subContent}>Password</Text>
                            <TextInput style={styles.txtInput} id='gender'value={password} onChange={(value => setpassword(value.nativeEvent.text))}/>
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

                        {/* <Button 
                            title="Register"
                            onPress={handleSubmit}
                            disabled={!isChecked} // Disable the button if checkbox is not checked
                            // buttonStyle={styles.buttonStyle}
                            // titleStyle={styles.titleStyle}
                        /> */}
                        
                        <View style={styles.underTxt}>

                            <TouchableOpacity onPress={handleSubmit} style={styles.button}><Text style={styles.titleStyle}>Registration</Text></TouchableOpacity>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.RegisterToSignIn}>Already have an account?</Text>
                                <TouchableOpacity onPress={()=>{router.push('/sign-in')}}><Text style={styles.pwtxt}>Sign in</Text></TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
};

export default Registration




function setError(arg0: string) {
    throw new Error('Function not implemented.');
}
// old written function
// function registration(){
//     const[first_name, setfirst_name] = useState("");
//     const[last_name, setlast_name] = useState("");
//     const[email, setemail] = useState("");
//     const[mobile_no, setmobile_no] = useState("");
//     const[gender, setgender] = useState("");

//     const handleSubmit = (e:React.FormEvent) => {
//         console.log("register now");
//         e.preventDefault();

//         // send data to the backend

//         axios.post("http://localhost:5400/memberRegisteration",{first_name, last_name, email, mobile_no, gender})
//         .then((response)=>{
//             console.log("Data submit successfully to backend", response.data);
//             setfirst_name("");
//             setlast_name("");
//             setemail("");
//             setmobile_no("");
//             setgender("");
//         })

//         .catch((error)=>{
//             console.log("Error submitting data", error);
//         })
//     }






    //check box 

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

