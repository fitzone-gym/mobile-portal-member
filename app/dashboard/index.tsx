import styles from "../../styles/dashboard.style";

import {View, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView} from 'react-native';

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { useRouter } from 'expo-router';
import { Route } from 'expo-router/build/Route';

import { Avatar, Button, Card, Text } from 'react-native-paper';



export default function Dashboard() {
  const router = useRouter();
    return (
      <PaperProvider>
        <SafeAreaView>
          <ScrollView>
          <View style={styles.MainContainer}>
            <ImageBackground source={require('../../assets/images/member-dashboard.png')}
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

            <View style={styles.MemberProfilePic}></View>
            <View style={styles.WelcomeNameBar}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.name}>Anuradha Perera</Text>
            </View>

          </View>



          <Text style={styles.Mortivationaltext}>You can better today by archiving your exercise goals</Text>


          <View style={styles.specialAnnouncementAndDateBox}>
            <View style={styles.specialAnnouncements}>
              
            </View>
            <View style={styles.DateBox}>
              <Text style={styles.Date}>29</Text>
              <Text style={styles.Month}>July</Text>
              <Text style={styles.Year}>2023</Text>
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
              <Text style={styles.caloriesCount}>2000</Text>
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
              <Text style={styles.caloriesCount}>3000</Text>
              <Text style={styles.calories}>Steps</Text>
            </View>

            <View style={styles.waterPerDay}>
              <Text style={styles.caloriesPerDay}>Water Per Day</Text>
              <Text style={styles.caloriesCount}>3</Text>
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
  
 