import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
// import Unorderedlist from "react-native-unordered-list";
import styles from "../../styles/hireTrainer.style";
import { Button } from "react-native-paper";

import axios from "axios";
import baseUrl from "../../baseUrl";

type TrainerType = {
    id:string
    first_name:string
    last_name:string
    profile_picture:string
    working_experience:number
    qualification:string
    age:number
    dob:string
    phone_no:number
    email:string
    gender:string
}

export default function trainerProfile(){

  const router = useRouter()
  const localSearchParams = useLocalSearchParams()
  
  const[trainerDetails, setTrainerDetails] = useState<TrainerType>();
  
  useEffect(() => {
      axios
          .get(`${baseUrl}/ourTrainers/${localSearchParams.id}`)
          .then((response) =>{
              setTrainerDetails(response.data.data);
              console.log(response.data.data)
          })
          .catch((error) => console.error(error))
  }, []);
  return(
  <SafeAreaView style={styles.container}>
    <Stack.Screen
      options={{
        title: "",
      }}
    />
    <ScrollView style={styles.back}>
      <ImageBackground
        source={require("../../assets/images/HireTrainerBackground.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.content}>
          <View>
            <Text style={styles.pageHeading}>Hire trainer</Text>
          </View>
          <View style={styles.profile}>
            <View>
              <Image
                // source={{ uri:`../../assets/images/Trainers/${trainerDetails?.profile_picture}`}}
                source={{ uri:`https://stylioo.blob.core.windows.net/images/${trainerDetails?.profile_picture}`}}
                style={styles.trainerImage}
              />
            </View>
            <View style={styles.trainerDetails}>
            <View style={styles.basicdetails}>
            <View>
                <Text style={styles.labelofbasicinfo}>Name</Text>
                <Text style={styles.labelofbasicinfo}>Age</Text>
                <Text style={styles.labelofbasicinfo}>Gender</Text>
                <Text style={styles.labelofbasicinfo}>Mobile No</Text>
                <Text style={styles.labelofbasicinfo}>Email</Text>
            </View>
            <View>
              <Text style={styles.basicinfo}>{trainerDetails?.first_name}&nbsp;{trainerDetails?.last_name}</Text>
              <Text style={styles.basicinfo}>{trainerDetails?.age}</Text>
              <Text style={styles.basicinfo}>{trainerDetails?.gender === 'M' ? 'Male' : 'Female'}</Text>
              <Text style={styles.basicinfo}>0{trainerDetails?.phone_no}</Text>
              <Text style={styles.basicinfo}>{trainerDetails?.email}</Text>
            </View>
        </View>
              
            </View>
          </View>
        </View>

        <View style={styles.trainerPackage}>
          {/* single shedule */}
          <View style={styles.packages}>
            <View>
              <Text style={styles.packageHeading}>
                1 Month package
                <Text style={styles.packagePrice}>&nbsp;&nbsp;18 000 LKR</Text>
              </Text>
            </View>
            <View style={styles.detailsList}>
              <Text>
                <Text style={styles.detail}>
                  1 Yoga pass<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  1 Full body massage<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  1 Foot massage<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Kitchen<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Washing room<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
              </Text>
            </View>
          </View>

          {/* single shedule */}
          <View style={styles.packages}>
            <View>
              <Text style={styles.packageHeading}>
                6 Month plan
                <Text style={styles.packagePrice}>&nbsp;&nbsp;64 000 LKR</Text>
              </Text>
            </View>
            <View style={styles.detailsList}>
              <Text>
                <Text style={styles.detail}>
                  2 Yoga pass<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  2 Full body massage<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  3 foot massage<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  3 steam spa<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Kitchen<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Washing room<Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
              </Text>
            </View>
          </View>

          {/* single shedule */}
          <View style={styles.packages}>
            <View>
              <Text style={styles.packageHeading}>
                Annual paln
                <Text style={styles.packagePrice}>&nbsp;&nbsp;95 000 LKR</Text>
              </Text>
            </View>
            <View style={styles.detailsList}>
              <Text>
                <Text style={styles.detail}>
                  4 Yoga pass <Text style={{ color: "#E54646" }}> | </Text>
                </Text>
                <Text style={styles.detail}>
                  4 Full body massage <Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  5 foot massage <Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  5 steam spa <Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Pool Pass <Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>
                  Kitchen <Text style={{ color: "#E54646" }}> | </Text>{" "}
                </Text>
                <Text style={styles.detail}>Washing room </Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View>
        {/* <TouchableOpacity
          variant="contained"
          color="error"
          style={styles.hireBtn}
        >
          <Text style={styles.hireBtnText}>Hire Now</Text>
        </TouchableOpacity> */}

        <Button style={styles.startedbutton}  mode="contained" onPress={() => {router.push('/member') }} textColor='#FFFFFF'>
            Hire Now
        </Button>
      </View>

    </ScrollView>
  </SafeAreaView>
  )
}
