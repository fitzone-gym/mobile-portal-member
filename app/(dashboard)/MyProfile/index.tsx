import styles from '../../../styles/memberProfile.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Card, PaperProvider } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { removeUser } from '../../redux/features/userSlice';
import axios from '../../../axios';

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

interface packageDetails{
    trainer_id:string
    payment_details:string
    }

interface healthDetails{
    weight:number
    suger_level:string
    height:number
    cholesterol_level:string
    blood_presure:string
    diabetes_level:string
    injuries:string
    package:string
    }

interface trainerDetails{
    user_id:string;
    first_name:string;
    last_name:string;
    profile_picture:string;
}

export default function memberProfile(){

    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const localSearchParams = useLocalSearchParams()
    const currentUser = useAppSelector(state => state.user)
    const [profileDetails, setprofileDetails] = useState<profileDetails>();
    const [packageDetails, setpackageDetails] = useState<packageDetails>();
    const [healthDetails, setHealthDetails] = useState<healthDetails>();
    const [trainerDetails, setTrainerDetails] = useState<trainerDetails>();
    const [trainerId, setTrainerId] = useState<string>();
    // useEffect(() => {
    //     if (currentUser && currentUser.user_id) {
    //       // Assuming that 'id' is the property containing the user's ID
    //       const sendDataToBackend = async () => {
    //         try {
    //           const response = await axios.post('/memberprofile', {
    //             user_id: currentUser.user_id,
    //           });
    //           console.log(response.data);
    //         } catch (error) {
    //           console.error('Error:', error);
    //         }
    //       };
    
    //       sendDataToBackend();
    //     }
    //   }, [currentUser]);

    //   console.log("params"+localSearchParams);

      useEffect(() => {
        // console.log("user_id",currentUser.user_id);
        axios.get(`/memberprofile/profileDetails/${currentUser.user_id}`)
        .then((response) => {
            setprofileDetails(response.data.data);
            // console.log("data",response.data.data)
        })
        .catch((error) => console.error(error))
      },[]);

      useEffect(() => {
        axios.get(`/memberprofile/packageDetails/${currentUser.user_id}`)
        .then((response) => {
            setpackageDetails(response.data.data);
            console.log("package",response.data.data)
            axios.get(`/memberprofile/trainerDetails/${response.data.data.trainer_id}`)
            .then((response) => {
                setTrainerDetails(response.data.data);
                console.log("trainer",response.data.data)
            })
            .catch((error) => console.error(error))
        })
        .catch((error) => console.error(error))
      },[]);


    //   useEffect(() => {
    //     axios.get(`/memberprofile/trainerDetails/${trainerId}`)
    //     .then((response) => {
    //         setTrainerDetails(response.data.data);
    //         // console.log("trainer",response.data.data)
    //     })
    //     .catch((error) => console.error(error))
    //   },[trainerId]);

      useEffect(() => {
        axios.get(`/memberprofile/healthDetails/${currentUser.user_id}`)
        .then((response) => {
            setHealthDetails(response.data.data);
            // console.log("Health",response.data.data)
        })
        .catch((error) => console.error(error))
      },[]);
    //   console.log("package", packageDetails)

    // currentUser.id -> axios.get(/profie/:id) --> myData
    
    // const [currentUser, setCurrentUser] = useState<any>()
    
    // const getMyData = async () => {
    //     const res = axios.get(`${baseUrl}/myprofile/${user.id}`)
    //     if(res.data.success) {
    //         setCurrentUser(res.data.data)
    //     }
    // }

    // useEffect(() => {
    //     getMyData()
    // }, [])
        


    const handleSignout = () => {
        dispatch(removeUser())
        router.push('/sign-in')
    }

    return(
        <PaperProvider>
        <SafeAreaView>
            <Stack.Screen
            options={{title:'Member Profile',}}/>

            <ScrollView style={styles.fullbody}>

                <ImageBackground
                    source={
                        require('../../../assets/images/MemberProfileBackground.png')
                    }
                    resizeMode='cover'
                    style={styles.backgroundimage}>
                        <View style={styles.fullcontent}>
                            
                                <Text style={styles.text}>My Profile</Text>
                                <View style={styles.imageanddetails}>
                                    <Image
                                        style={styles.imagepicture}
                                        source={require('../../../assets/images/Punsara.jpg')}
                                        resizeMode='cover'
                                    />
                                    <View style={styles.basicdetails}>
                                        <View>
                                            <Text style={styles.labelofbasicinfo}>Name</Text>
                                            <Text style={styles.labelofbasicinfo}>Age</Text>
                                            <Text style={styles.labelofbasicinfo}>Gender</Text>
                                            <Text style={styles.labelofbasicinfo}>Mobile No</Text>
                                            <Text style={styles.labelofbasicinfo}>Email</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.basicinfo}>{profileDetails?.first_name}&nbsp;{profileDetails?.last_name}</Text>
                                            <Text style={styles.basicinfo}>{profileDetails?.age}</Text>
                                            <Text style={styles.basicinfo}>{profileDetails?.gender === 'M' ? 'Male' : 'Female'}</Text>
                                            <Text style={styles.basicinfo}>0{profileDetails?.phone_no}</Text>
                                            <Text style={styles.basicinfo}>{profileDetails?.email}</Text>
                                        </View>
                                    </View>

                                        <Button style={styles.editbutton} icon="pencil" mode="outlined" onPress={() => { router.push('/member/memberDetailUpdate')}} textColor='#E54646'>
                                            Edit Profile
                                        </Button>
                                        {/* <Button style={styles.editbutton} icon="signout" mode="outlined" onPress={handleSignout} textColor='#E54646'>
                                            Sign Out
                                        </Button> */}


                                </View>

                                <View>

                                    {/* <View >
                                            <Text style={styles.topictext}>Working progress</Text>
                                            <View style={styles.textbox}>
                                                
                                            </View>
                                    </View> */}

                                    <View style={styles.workingExandmembers}>
                                        <View style={styles.smallbox}>
                                            <Text style={styles.workingexyers}>29</Text>
                                            <Text style={styles.workingextext}>Workout Days</Text>
                                        </View>
                                        <View style={styles.smallbox}>
                                            <Text style={styles.workingexyers}>2011</Text>
                                            <Text style={styles.workingextext}>Calarious Burned</Text>
                                        </View>
                                    </View>
                                    
                                </View>

                                <View style={styles.medicheckup}>
                                    <View style={styles.smallbox}>
                                        <Text style={styles.smallboxtext}>Suger level</Text>
                                        <Text style={styles.smallboxbigNumber}>{healthDetails?.suger_level}</Text>
                                    </View>

                                    <View style={styles.smallbox}>
                                        <Text style={styles.smallboxtext}>Cholesterol level</Text>
                                        <Text style={styles.smallboxbigNumber}>{healthDetails?.cholesterol_level}</Text>
                                    </View>
                                </View>

                                <View style={styles.smallbox}>
                                        <Text style={styles.smallboxtext}>Blood preasure</Text>
                                        <Text style={styles.smallboxbigNumber}>{healthDetails?.blood_presure}</Text>
                                </View>

                                {/* <View style={styles.medicheckup}>
                                    <View style={styles.smallbox}>
                                        <Text style={styles.workingextext}>Water per day</Text>
                                        <Text style={styles.workingexyers}>3</Text>
                                        <Text style={styles.workingextext}>liters</Text>
                                    </View>

                                    <View style={styles.smallbox}>
                                        <Text style={styles.workingextext}>Calories per day</Text>
                                        <Text style={styles.workingexyers}>350</Text>
                                        <Text style={styles.workingextext}>calories</Text>
                                    </View>
                                </View> */}

                                <View >
                                        <Text style={styles.topictext}>My package</Text>
                                        <View style={styles.textbox}>
                                            <Text style={styles.packagedetails}>{packageDetails?.payment_details} package</Text>
                                            

                                            {packageDetails?.payment_details === "Monthly" ? (
                                                <View>
                                                <Text style={styles.packagedetails}>    1 Full body massage</Text>
                                                <Text style={styles.packagedetails}>    1 Foot massage </Text>
                                                </View>
                                            ) 
                                            : packageDetails?.payment_details === "6 Month" ? (
                                                <View>
                                                <Text style={styles.packagedetails}>    2 Full body massage</Text>
                                                <Text style={styles.packagedetails}>    3 Foot massage </Text>
                                                <Text style={styles.packagedetails}>    3 Steam spa </Text>
                                                </View>
                                            )
                                            :(
                                                <View>
                                                <Text style={styles.packagedetails}>    4 Full body massage</Text>
                                                <Text style={styles.packagedetails}>    5 Foot massage </Text>
                                                <Text style={styles.packagedetails}>    5 Steam spa </Text>
                                                </View>
                                            )
                                        
                                        }

                                        </View>
                                </View>

                                <View style={styles.trainerimage}>
                                    <Text style={styles.topictext}>My Trainer</Text>
                                    <TouchableOpacity onPress={() => {
                                        router.push({pathname:"/member/trainerProfile", params:{user_id:trainerDetails?.user_id}})
                                    }}>
                                    <Image
                                            style={styles.imagepicture}
                                            // source={require('../../assets/images/Trainer.jpg')}
                                            source={{ uri:`https://stylioo.blob.core.windows.net/images/${trainerDetails?.profile_picture}`}}
                                            resizeMode='cover'
                                    />
                                    </TouchableOpacity>
                                    {/* <Button style={styles.button} mode="contained" onPress={() => {
                                                                router.push('/member/trainerProfile?id=10004')
                                                            }}>
                                        View details
                                    </Button> */}
                                </View>
                                

                        </View>
                    
                    </ImageBackground>

            </ScrollView>

        </SafeAreaView>
        </PaperProvider>
    )
}