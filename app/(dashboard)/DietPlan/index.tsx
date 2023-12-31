import styles from '../../../styles/memberDietPlan.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { Button, Card, PaperProvider } from 'react-native-paper';
import { useAppSelector } from '../../redux/store';
import axios from '../../../axios';

type dietPlanType ={
    calories_per_day:number;
    steps_per_day:number;
    water_per_day:number;
    // protein_gram:number;
    // mineral_gram:number;
    // carbohydrate_gram:number;
    // fat_gram:number;
    // protein_gram:number;
    // mineral_gram:number;
    // carbohydrate_gram:number;
    // fat_gram:number;
    // protein_gram:number;
    // mineral_gram:number;
    // carbohydrate_gram:number;
    // fat_gram:number;
    // protein_suppliment:string;
    // weight_gainer:string;
    // creatine:string;
    // preworkout:string;
    // glutamin:string;

    // height:number;
    // weight:number;
};

export default function memberDietPlan(){

    const router = useRouter()
    const localSearchParams = useLocalSearchParams();
    const[dietPlanDetails, setdietPlanDetails] = useState<any>();

    const currentUser = useAppSelector(state => state.user)

    const fetchDietPlan = () => {
        console.log("diet plan member id front end",currentUser.user_id);
      axios.get(`/memberDietPlan/${currentUser.user_id}`)
      .then((Response) =>{
        console.log('data send to the backend successfully', Response.data);
        setdietPlanDetails(Response.data.data);
  
        
      })
      .catch((error) => {
        console.log('error sending data to the backend', error);
    
      });
    }
  
    useEffect(() => {
      fetchDietPlan()
    },[])
  
    console.log(currentUser);
    

    return(
        <PaperProvider>
        <SafeAreaView>
            <Stack.Screen
            options={{title:'Member Diet Plan',}}/>

            <ScrollView style={styles.fullbody}>

            <View
                style={styles.topcontainer}
                >
                    
                    <ImageBackground
                    source={
                        require('../../../assets/images/DietPlanbackground.png')
                    }
                    resizeMode='cover'
                    style={styles.topcontainerimage}>

                        <Text style={styles.text}>Diet Plan</Text>

                        <View style={styles.textboxcontent}>
                        <View style={styles.extrasmallbox}>
                            <Text style={styles.Extrasmalltext}>Weight :</Text>
                            <Text style={styles.Extrasmalltextvalue}> {dietPlanDetails?.weight} 60 Kg</Text>
                        </View>
                        <View style={styles.extrasmallbox}>
                            <Text style={styles.Extrasmalltext}>Height :</Text>
                            <Text style={styles.Extrasmalltextvalue}> 152 cm</Text>
                        </View>
                        <View style={styles.extrasmallbox}>
                            <Text style={styles.Extrasmalltext}>BMI :</Text>
                            <Text style={styles.Extrasmalltextvalue}>  26</Text>
                        </View>
                    </View>

                        

                    {/* <View style={styles.textboxcontent}>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingexyers}>{dietPlanDetails?.calories_per_day}</Text>
                            <Text style={styles.upworkingextext}>Calories per day</Text>
                        </View>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingexyers}>{dietPlanDetails?.steps_per_day}</Text>
                            <Text style={styles.upworkingextext}>Steps per day</Text>
                        </View>
                    </View> */}
                    
                    </ImageBackground>              
                </View>

                <View style={styles.lowercontent}>

                    <View style={styles.textboxcontent}>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingextext}>Protein Foods</Text>
                            <Text style={styles.subworkingextext}>sea food</Text>
                            <Text style={styles.subworkingextext}>meat</Text>
                            <Text style={styles.subworkingextext}>egg</Text>
                            <Text style={styles.subworkingextext}>beans</Text>
                            <Text style={styles.subworkingextext}>lentils</Text>
                            <Text style={styles.subworkingextext}>nuts</Text>
                            <Text style={styles.subworkingextext}>seeds</Text>


                        </View>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingextext}>Mineral Foods</Text>
                            <Text style={styles.subworkingextext}>cereals</Text>
                            <Text style={styles.subworkingextext}>dairy</Text>
                            <Text style={styles.subworkingextext}>fruits</Text>
                            <Text style={styles.subworkingextext}>vegetables</Text>
                            <Text style={styles.subworkingextext}>bread</Text>
                            <Text style={styles.subworkingextext}>tofu</Text>
                        </View>
                    </View>

                    <View style={styles.textboxcontent}>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingextext}>Carbohydrate Foods</Text>
                            <Text style={styles.subworkingextext}>popcorn</Text>
                            <Text style={styles.subworkingextext}>cookies</Text>
                            <Text style={styles.subworkingextext}>soft drinks</Text>
                            <Text style={styles.subworkingextext}>pasta</Text>
                            <Text style={styles.subworkingextext}>white rice</Text>
                            <Text style={styles.subworkingextext}>baked products</Text>
                            <Text style={styles.subworkingextext}>oats</Text>

                            
                        </View>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingextext}>Fat Foods</Text>

                            <Text style={styles.subworkingextext}>Almonds</Text>
                            <Text style={styles.subworkingextext}>Avacado</Text>
                            <Text style={styles.subworkingextext}>Cashews</Text>
                            <Text style={styles.subworkingextext}>Cheese</Text>
                            <Text style={styles.subworkingextext}>Avacado</Text>
                            <Text style={styles.subworkingextext}>Peanut Butter</Text>
                            <Text style={styles.subworkingextext}>chicken breast</Text>
                            

                        </View>
                    </View>

                    {/* <View style={styles.textboxcontent}>

                        <View style={styles.smallbox}>
                            <Text style={styles.workingextext}>Water</Text>
                            <Text style={styles.workingexyers}>{dietPlanDetails?.water_per_day}</Text>
                            <Text style={styles.workingextext}>liters per day</Text>
                        </View>
                    </View> */}

                    {
                        dietPlanDetails?.breakfast &&
                        
                        <View >
                        <Text style={styles.topictext}>Breakfast</Text>
                        <View style={styles.textbox}>
                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Protein</Text>
                                <Text style={styles.textgrams1}>{dietPlanDetails?.breakfast.protein_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.breakfast.protein_gram)*4} Calories</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Mineral</Text>
                                <Text style={styles.textgrams2}>{dietPlanDetails?.mineral_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.breakfast.breakfast.mineral_gram)*4} Calories</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Carbohydrate</Text>
                                <Text style={styles.textgrams}>{dietPlanDetails?.breakfast.carbohydrate_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.breakfast.carbohydrate_gram)*4} Calories</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Fat</Text>
                                <Text style={styles.textgrams3}>{dietPlanDetails?.breakfast.fat_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.breakfast.fat_gram)*9} Calories</Text>
                            </View>

                        </View>
                    </View>
                    }

{
                        dietPlanDetails?.lunch &&
                        
                        <View >
                        <Text style={styles.topictext}>Lunch</Text>
                        <View style={styles.textbox}>
                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Protein</Text>
                                <Text style={styles.textgrams1}>{dietPlanDetails?.lunch.protein_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.lunch.protein_gram)*4} Calories</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Mineral</Text>
                                <Text style={styles.textgrams2}>{dietPlanDetails?.lunch.mineral_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.lunch.mineral_gram)*4} Calories</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Carbohydrate</Text>
                                <Text style={styles.textgrams}>{dietPlanDetails?.lunch.carbohydrate_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.lunch.carbohydrate_gram)*4} Calories</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Fat</Text>
                                <Text style={styles.textgrams3}>{dietPlanDetails?.lunch.fat_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.lunch.fat_gram)*4} Calories</Text>
                            </View>

                        </View>
                    </View>
                    }
{
                        dietPlanDetails?.lunch &&
                    <View >
                        <Text style={styles.topictext}>Dinner</Text>
                        <View style={styles.textbox}>
                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Protein</Text>
                                <Text style={styles.textgrams1}>{dietPlanDetails?.dinner.protein_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.dinner.protein_gram)*4} Calories</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Mineral</Text>
                                <Text style={styles.textgrams2}>{dietPlanDetails?.dinner.mineral_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.dinner.mineral_gram)*4} Calories</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Carbohydrate</Text>
                                <Text style={styles.textgrams}>{dietPlanDetails?.dinner.carbohydrate_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.dinner.carbohydrate_gram)*4} Calories</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Fat</Text>
                                <Text style={styles.textgrams3}>{dietPlanDetails?.dinner.fat_gram}g</Text>
                                <Text style={styles.textcalories}>{(dietPlanDetails?.dinner.fat_gram)*4} Calories</Text>
                            </View>

                        </View>
                    </View>
}

                    <View >
                        <Text style={styles.topictext}>Supplements</Text>
                        <View style={styles.textbox}>
                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Protine suppliment</Text>
                                <Text style={styles.textgrams}>{dietPlanDetails?.protein_suppliment}</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Weight_gainer</Text>
                                <Text style={styles.textgrams}>{dietPlanDetails?.weight_gainer}</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Creatine</Text>
                                <Text style={styles.textgrams}>{dietPlanDetails?.creatine}</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Pre workout</Text>
                                <Text style={styles.textgrams}>{dietPlanDetails?.preworkout}</Text>
                            </View>

                            <View style={styles.subtextbox}>
                                <Text style={styles.textboxtext}>Glutamin</Text>
                                <Text style={styles.textgrams}>{dietPlanDetails?.glutamin}</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
        </PaperProvider>
    )
}