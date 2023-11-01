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
// import CheckBox from "@react-native-community/checkbox";
// import baseUrl from "../../axios";

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
  const [checked, setChecked] = React.useState('first')


  const {initPaymentSheet, presentPaymentSheet} = useStripe()
  
  const[trainerDetails, setTrainerDetails] = useState<TrainerType>();
  
  useEffect(() => {
      axios
          .get(`/ourTrainers/${localSearchParams.user_id}`)
          .then((response) =>{
              setTrainerDetails(response.data.data);
              console.log(response.data.data)
          })
          .catch((error) => console.error(error))
  }, []);


  // const paymentSubmit = async () => {
  //   try{
  //     await axios.post('/payments/intent', {
  //       amount: 18000,
  //     }).then((response) => {
  //       console.log(response.data)

  //     });
  //   }catch(err) {
  //     console.error(err);
  //   }
  // };

  const paymentSubmit = async () => {
    try {

      const response = await axios.post("/payments/intent", {
        amount: 20000,
      })

      if(response.status !== 200) {
        alert("Something whet wrong!")
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
    <ScrollView style={styles.back}>
    <StripeProvider publishableKey="pk_test_51O5WG1FwODkYBCTLS7DXgpnRUSuBJElwVG9dH5zztOxyHuA5D1is4LZFRBT5JwVG43lOkxM4Z6dc24LBJ5GpAVNL007gvYvTm3">
      <ImageBackground
        source={require("../../assets/images/HireTrainerBackground.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.content}>
          <View>
            <Text style={styles.pageHeading}>Hire trainer</Text>
          </View>
          

        </View>
      </ImageBackground>



      <View>
        <Button style={styles.startedbutton}  mode="contained" onPress={paymentSubmit} textColor='#FFFFFF'>
            <Text>PAY</Text>
        </Button>
      </View>
      </StripeProvider>
    </ScrollView>

  </SafeAreaView>
  )
}
