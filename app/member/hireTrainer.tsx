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
import { Button, RadioButton } from "react-native-paper";
import { CheckBox } from '@rneui/themed';

import {StripeProvider, useStripe} from "@stripe/stripe-react-native";

import axios from "../../axios";
import { useAppSelector } from "../redux/store";
// import CheckBox from "@react-native-community/checkbox";
// import baseUrl from "../../axios";

type TrainerType = {
    user_id:string
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
type CurrentMemberType = {
  user_id:string
  first_name:string
  last_name:string
  trainer_id:string
}

export default function trainerProfile(){
  const router = useRouter()
  const localSearchParams = useLocalSearchParams()
  const [checked, setChecked] = React.useState("Monthly")

  const {initPaymentSheet, presentPaymentSheet} = useStripe()
  const currentUser = useAppSelector(state => state.user)
  
  const[trainerDetails, setTrainerDetails] = useState<TrainerType>();
  const[currentUserDetails, setCurrentUserDetails] = useState<CurrentMemberType>();
  
  useEffect(() => {
      axios
          .get(`/ourTrainers/${localSearchParams.user_id}`)
          .then((response) =>{
              setTrainerDetails(response.data.data);
              // console.log("Current User Deatails",response.data.data)
          })
          .catch((error) => console.error(error))
  }, []);

useEffect(() => {
  console.log("user_id",currentUser.user_id);
  axios.get(`/ourTrainers/currentUserDetails/${currentUser.user_id}`)
  .then((response) => {
    setCurrentUserDetails(response.data.data);
      console.log("Current User Details Member",response.data.data)
  })
  .catch((error) => console.error(error))
},[]);

  const amount = checked === "Monthly" ? 1800000 : checked === "6 Month" ? 6400000 : checked === "Annual" ? 9500000 : null;


  const paymentSubmit = async () => {
    try {

      const response = await axios.post("/payments/intent", {
        amount: amount,
      })

      if(response.status !== 200) {
        alert("Something whent wrong!")
        return
      }

      console.log(response.data);
      

      const initResponse = await initPaymentSheet({
        merchantDisplayName: "Fit Zone",
        paymentIntentClientSecret: response.data.paymentIntent,
      })

      if(initResponse.error){
        console.log(initResponse.error);
        alert("Something whet wrong!")
        return
      }


     const presenetResponse =  await presentPaymentSheet()
     if(presenetResponse.error){
      console.log(presenetResponse.error);
      alert("Something whet wrong!")
      return
     }


     console.log(presenetResponse);
     
     //pass the data to the backend

      const apiresponse = await axios.post("/payments", {
        user_id: currentUser.user_id,
        trainer_id: localSearchParams.user_id,
        package_details: checked,
        amount:amount,
      });
      console.log(apiresponse.data);

      if(apiresponse.data.success){
        alert("Payment successful")
        router.push('(dashboard)/Dashboard')
      }
      
      // Handle the response from the backend if needed
    

    }catch(err){
      console.log(err);
      
    }
  }




  return(
  <SafeAreaView style={styles.container}>
    <Stack.Screen
      options={{
        title: "",
      }}
    />
    <StripeProvider publishableKey="pk_test_51O5WG1FwODkYBCTLS7DXgpnRUSuBJElwVG9dH5zztOxyHuA5D1is4LZFRBT5JwVG43lOkxM4Z6dc24LBJ5GpAVNL007gvYvTm3">
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
            <View style={styles.radiobutton}>
              <RadioButton
                value="Monthly"
                status={ checked === "Monthly" ? 'checked' : 'unchecked' }
                onPress={() => setChecked("Monthly")}
              />
            </View>
            
            <View style={styles.packageswithradiobutton}>
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
                </Text>
                <Text>
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

          </View>
          

          
          






          {/* single shedule */}
          <View style={styles.packages}>
            <View style={styles.radiobutton}>
              <RadioButton
                value="6 Month"
                status={ checked === "6 Month" ? 'checked' : 'unchecked' }
                onPress={() => setChecked("6 Month")}
              />
            </View>
            <View style={styles.packageswithradiobutton}>
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
                </Text>
                <Text>
                  <Text style={styles.detail}>
                    3 foot massage<Text style={{ color: "#E54646" }}> | </Text>{" "}
                  </Text>
                  <Text style={styles.detail}>
                    3 steam spa<Text style={{ color: "#E54646" }}> | </Text>{" "}
                  </Text>
                </Text>
                <Text>
                  <Text style={styles.detail}>
                    Kitchen<Text style={{ color: "#E54646" }}> | </Text>{" "}
                  </Text>
                  <Text style={styles.detail}>
                    Washing room<Text style={{ color: "#E54646" }}> | </Text>{" "}
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          {/* single shedule */}
          <View style={styles.packages}>
            <View style={styles.radiobutton}>
              <RadioButton
                value="Annual"
                status={ checked === "Annual" ? 'checked' : 'unchecked' }
                onPress={() => setChecked("Annual")}
              />
            </View>
            <View style={styles.packageswithradiobutton}>
              <View>
                <Text style={styles.packageHeading}>
                  Annual plan
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
                </Text>
                <Text>
                  <Text style={styles.detail}>
                    5 foot massage <Text style={{ color: "#E54646" }}> | </Text>{" "}
                  </Text>
                  <Text style={styles.detail}>
                    5 steam spa <Text style={{ color: "#E54646" }}> | </Text>{" "}
                  </Text>
                </Text>
                <Text>
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

        </View>
      </ImageBackground>

      {/* <View>
        <Button style={styles.startedbutton}  mode="contained" onPress={() => {router.push({pathname:'/member/memberpay', params:{user_id:trainerDetails?.user_id,package:checked}}) }} textColor='#FFFFFF'>
            Hire Now
        </Button>
      </View> */}

      { currentUserDetails === null ? (
        <View>
        <Button style={styles.startedbutton}  mode="contained" onPress={paymentSubmit} textColor='#FFFFFF'>
          <Text>Hire Now</Text>
        </Button>
        </View>
      ) : (
        <View>
        <Button style={styles.startedbuttonhired}  mode="contained"  textColor='#FFFFFF'>
          <Text>Hired</Text>
        </Button>
        </View>
        
      )
      }

      {/* <Button style={styles.startedbutton}  mode="contained" onPress={paymentSubmit} textColor='#FFFFFF'>
            <Text>Hire Now</Text>
      </Button> */}

    </ScrollView>
      </StripeProvider>
  </SafeAreaView>
  )
}
