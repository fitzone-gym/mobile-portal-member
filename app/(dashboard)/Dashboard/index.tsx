import styles from "../../../styles/dashboard.style";

import {View, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView} from 'react-native';

import * as React from 'react';
import { useEffect,useState } from "react";
import {Stack, useLocalSearchParams } from "expo-router";
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { useRouter } from 'expo-router';
import { Route } from 'expo-router/build/Route';

import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Image } from "react-native";
import { useAppSelector } from "../../redux/store";
import axios from "../../../axios";

type DashboardType = {
  calories_per_day: number;
  steps_per_day: number;
  water_per_day: number;
}



export default function Dashboard() {
  const router = useRouter();
  const localSearchParams = useLocalSearchParams();
  const [dashboardDetails, setdashboardDetails] = useState<DashboardType>();

//? not use this function , for get data using fetch function
//   useEffect(() => {
//     axios
//         .get(`/memberDashboard/${localSearchParams.user_id}`)
//         .then((response) =>{
//             setdashboardDetails(response.data.data);
//             console.log(response.data.data)
//         })
//         .catch((error) => console.error(error))
// }, []);

  const currentUser = useAppSelector(state => state.user)

  const fetchDietPlan = () => {
    axios.get(`/memberDashboard/${currentUser.user_id}`)
    .then((Response) =>{
      // console.log('data send to the backend successfully', Response.data);
      setdashboardDetails(Response.data.data);

      
    })
    .catch((error) => {
      console.log('error sending data to the backend', error);
  
    });
  }

  useEffect(() => {
    fetchDietPlan()
  },[])

  // console.log(currentUser);
  


    return (
      <PaperProvider>
        <SafeAreaView>
          <ScrollView>
          <View style={styles.MainContainer}>
            <ImageBackground source={require('../../../assets/images/member-dashboard.png')}
                                style={{
                        width: '100%',
                        height: "100%",
          }}>



          {/* <View style={styles.MemberNavigationBar}>

            <View style={styles.HomeNavigation}></View>

            <View style={styles.MessageAndNotificationNavigation}>

              <View style={styles.MessageBox}></View>
              <View style={styles.NortificationBox}></View>

            </View>

          </View>  */}



          <View style={styles.HeadMemberProfileBar}>

              <Image
              style={styles.MemberProfilePic}
              resizeMode="cover"
              source={{
                uri: 'https://stylioo.blob.core.windows.net/images/Punsara.jpg'
              }}
              />
            <View style={styles.WelcomeNameBar}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.name}>{currentUser.first_name}&nbsp; {currentUser.last_name}</Text>
            </View>

          </View>



          <Text style={styles.Mortivationaltext}>You can better today by archiving your exercise goals</Text>


          <View style={styles.specialAnnouncementAndDateBox}>
            
            <View style={styles.specialAnnouncements}>
                    {/* <Image style={{resizeMode: 'stretch',height: 100,width: 200,}} source={require('../../../assets/images/special-announcement.png')}/> */}

                    <Text style={styles.special_event_date}>29th Aug 2023</Text>
                    <Text style={styles.special_event_heading}>New Zumba Class</Text>
                    <Text style={styles.special_event_body}>Starting 29 th July on ward. Zumba class for all age members. From begin to end. Conducting by highly qualified zumba masters. </Text>
              
            </View>
            
            <View style={styles.DateBox}>
              <Text style={styles.Date}>{new Date().getDate()}</Text>
              <Text style={styles.Month}>{new Intl.DateTimeFormat('en-US',{month:'long'}).format(new Date())}</Text>
              <Text style={styles.Year}>{new Date().getFullYear()}</Text>
            </View>
          </View>



          <Text style={styles.WorkingProgressTitle}>Working Progress</Text>

          <View style={styles.workoutProgress}></View>

          <View style={styles.caloriesAndMortivationBox}>

            <View style={styles.caloriesBurnOutToday}>
              <Text style={styles.caloriesCount}>2000</Text>
              <Text style={styles.caloriesCountTitle}>Total Calories burned</Text>
            </View>

            <Text style={styles.mortivational_text}>Work Hard{'\n'}Believe in{'\n'}Yourself{'\n'}You've{'\n'}Got this</Text>
          </View>

          <View style={styles.caloriesAndMortivationBox}>

            <View style={styles.caloriesPerDayToDay}>
              <Text style={styles.caloriesPerDay}>Calories Per Day</Text>
              <Text style={styles.caloriesCount}>{dashboardDetails?.calories_per_day}</Text>
              <Text style={styles.calories}>Calories</Text>
            </View>

            <View style={styles.workOutDays}>
              <Text style={styles.caloriesPerDay}>Workout days</Text>
              <Text style={styles.caloriesCount}>29</Text>
              <Text style={styles.calories}>Completed</Text>
            </View>
          </View>

          <View style={styles.caloriesAndMortivationBox}>

            <View style={styles.StepsPerToday}>
              <Text style={styles.caloriesPerDay}>Steps Per Day</Text>
              <Text style={styles.caloriesCount}>{dashboardDetails?.steps_per_day}</Text>
              <Text style={styles.calories}>Steps</Text>
            </View>

            <View style={styles.waterPerDay}>
              <Text style={styles.caloriesPerDay}>Water Per Day</Text>
              <Text style={styles.caloriesCount}>{dashboardDetails?.water_per_day}</Text>
              <Text style={styles.calories}>Liter</Text>
            </View>
          </View>


          {/* <View style={styles.WaterBox}>
              <Text style={styles.WaterTitle}>Water Per Day</Text>
              <Text style={styles.WaterLevel}>3</Text>
              <Text style={styles.WaterMeasure}>Liters</Text>
          </View> */}

          <View style={{flexDirection:'row', gap:20}}>
            <TouchableOpacity onPress={()=>{router.push('/appointment')}}><Text>appointment</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{router.push('/TimeSlots')}}><Text>TimeSlots</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{router.push('/payment')}}><Text>Payment</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{router.push('/message')}}><Text>Message</Text></TouchableOpacity>
            
          </View>
          

          </ImageBackground>          
          </View>
          </ScrollView>
        </SafeAreaView>



      </PaperProvider>
    );
  }
  
 