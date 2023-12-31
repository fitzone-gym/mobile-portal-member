import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image, ImageBackground , TextInput,Button, Alert,} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import styles from '../../styles/memberDetailsUpdate.style';


import axios from '../../axios';
import { useAppSelector } from '../redux/store';
// import CheckBox from '@react-native-community/checkbox';

interface profileDetails{
    first_name:string
      last_name:string
      profile_picture:string
      age:number
      dob:string
      phone_no:number
      email:string
      gender:string
    }

//chat gpt function
const Registration:React.FC = () =>{
    const[first_name, setfirst_name] = useState<string>("");
    const[last_name, setlast_name] = useState<string>("");
    const[email, setemail] = useState<any>("");
    const[mobile_no, setmobile_no] = useState<string>("");
    const[gender, setgender] = useState<string>("");

    const handleSubmit = async () =>{

        // perform validation
        // if(!first_name  !last_name  !email  !mobile_no  !gender){
        //     Alert.alert('validation Error', 'please fill in all fields.');
        //     return;
        // }

        // further validation can be added, like email format or password complexity checks
        try{
            const response = await axios.patch("/memberUpdate",{
                user_id: currentUser.user_id,
                first_name: first_name, 
                last_name: last_name, 
                email: email, 
                mobile_no: mobile_no});
            
            if(response.status === 201){
                Alert.alert('Update Successful', 'You have been registered successfully!');
                router.push('(dashboard)/Dashboard')
            }
            else{
                Alert.alert('Update Failed', 'An error occurred during Update.');
            }
        }
        catch(error){
            Alert.alert('Error', 'An error occurred during Update.');
            console.error('Error Update',error);
        }
    };

    const currentUser = useAppSelector(state => state.user)
    const [profileDetails, setprofileDetails] = useState<profileDetails>();




    const router = useRouter()

    useEffect(() => {
        // console.log("user_id",currentUser.user_id);
        axios.get(`/memberprofile/profileDetails/${currentUser.user_id}`)
        .then((response) => {
            // setprofileDetails(response.data.data);
            setfirst_name(response.data.data.first_name);
            setlast_name(response.data.data.last_name);
            setemail(response.data.data.email);
            setmobile_no(response.data.data.phone_no);
            setgender(response.data.data.first_name);
            console.log("Update data",response.data.data)
        })
        .catch((error) => console.error(error))
      },[]);

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: '',
                }}
            />
            
            <View style={styles.container}>
                <ImageBackground source= {require('../../assets/images/UpdateDetails.png')}resizeMode='cover' style={styles.backgroundImage}>
                    <View style={styles.form}>
                        <Text style={styles.heading}>
                            Update Member Details
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

                            <Button title='Update Details' onPress={handleSubmit} color="#E54646"
                            style={styles.updatebutton} textStyle={styles.titleStyle}></Button>
                            
                            {/* <View style={{flexDirection:'row'}}>
                                <Text style={styles.RegisterToSignIn}>Already have an account?</Text>
                                <TouchableOpacity onPress={()=>{router.push('/sign-up')}}><Text style={styles.pwtxt}>Sign in</Text></TouchableOpacity>
                            </View> */}

                        </View>
                        
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
};

export default Registration

