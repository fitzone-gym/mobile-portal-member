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


  const paymentSubmit = async () => {
    // try{
    //   await axios.post('/payments/intent', {
    //     amount: ,
    //   })
    // }
  }

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
          

        </View>
      </ImageBackground>

      <View>
        <Button style={styles.startedbutton}  mode="contained" onPress={paymentSubmit} textColor='#FFFFFF'>
            <Text>PAY</Text>
        </Button>
      </View>

    </ScrollView>
  </SafeAreaView>
  )
}
