import styles from "../../styles/dashboard.style";

import {View, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView} from 'react-native';

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { Avatar, Button, Card, Text } from 'react-native-paper';



export default function Dashboard() {
    return (
      <PaperProvider>
        <SafeAreaView>
          <ScrollView>
          <View style={styles.MainContainer}>
            <ImageBackground source={require('../../assets/images/member-dashboard.png')}
                                style={{
                        width: '100%',
                        height: 900,
          }}>



          <View style={styles.MemberNavigationBar}>

            <View style={styles.HomeNavigation}></View>

            <View style={styles.MessageAndNotificationNavigation}>

              <View style={styles.MessageBox}></View>
              <View style={styles.NortificationBox}></View>

            </View>

          </View> 



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


          <View style={styles.WaterBox}>
              <Text style={styles.WaterTitle}>Water Per Day</Text>
              <Text style={styles.WaterLevel}>3</Text>
              <Text style={styles.WaterMeasure}>Liters</Text>
          </View>

          

          </ImageBackground>          
          </View>
          </ScrollView>
        </SafeAreaView>



      </PaperProvider>
    );
  }
  
 