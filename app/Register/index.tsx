
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image, ImageBackground , TextInput,Button,} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import styles from '../../styles/signup.style';
// import CheckBox from '@react-native-community/checkbox';


export default function Home() {     

const [isChecked, setIsChecked] = useState(false);
const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
};

const handleRegister = () => {
    if (isChecked) {
    // Perform registration logic here
    } else {
    // Display a message or prevent registration
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
            <ImageBackground source= {require('../../assets/images/register.png')}resizeMode='cover' style={styles.backgroundImage}>
                <View style={styles.form}>
                    <Text style={styles.heading}>
                        Register Now
                    </Text>

                    <View style={styles.signinTxt}>
                        <Text style={styles.subContent}>First Name</Text>
                        <TextInput style={styles.txtInput}  />
                        <Text style={styles.subContent}>Last Name</Text>
                        <TextInput style={styles.txtInput}/>  
                        <Text style={styles.subContent}>Email</Text>
                        <TextInput style={styles.txtInput}/>    
                        <Text style={styles.subContent}>Mobile No</Text>
                        <TextInput style={styles.txtInput}/>   
                        <Text style={styles.subContent}>Age</Text>
                        <TextInput style={styles.txtInput}/>
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
                        onPress={handleRegister}
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