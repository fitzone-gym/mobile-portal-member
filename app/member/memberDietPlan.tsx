import styles from '../../styles/memberDietPlan.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Button, Card, PaperProvider } from 'react-native-paper';

export default function memberDietPlan(){

    const router = useRouter()

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
                        require('../../assets/images/DietPlanbackground.png')
                    }
                    resizeMode='cover'
                    style={styles.topcontainerimage}>

                        <Text style={styles.text}>Diet Plan</Text>

                        <View style={styles.textboxcontent}>
                        <View style={styles.extrasmallbox}>
                            <Text style={styles.Extrasmalltext}>Weight :</Text>
                            <Text style={styles.Extrasmalltextvalue}> 85 Kg</Text>
                        </View>
                        <View style={styles.extrasmallbox}>
                            <Text style={styles.Extrasmalltext}>BMI :</Text>
                            <Text style={styles.Extrasmalltextvalue}> 22</Text>
                        </View>
                        <View style={styles.extrasmallbox}>
                            <Text style={styles.Extrasmalltext}>BMR :</Text>
                            <Text style={styles.Extrasmalltextvalue}></Text>
                        </View>
                    </View>

                        

                        <View style={styles.textboxcontent}>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingexyers}>290</Text>
                            <Text style={styles.workingextext}>Calories per day</Text>
                        </View>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingexyers}>3000</Text>
                            <Text style={styles.workingextext}>Steps per day</Text>
                        </View>
                    </View>
                    
                    </ImageBackground>              
                </View>

                <View style={styles.lowercontent}>

                    <View style={styles.textboxcontent}>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingextext}>Proteins</Text>
                            <Text style={styles.workingexyers}>50</Text>
                            <Text style={styles.workingextext}>grams per day</Text>
                        </View>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingextext}>Suger</Text>
                            <Text style={styles.workingexyers}>20</Text>
                            <Text style={styles.workingextext}>grams per day</Text>
                        </View>
                    </View>

                    <View style={styles.textboxcontent}>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingextext}>Carbohydrate</Text>
                            <Text style={styles.workingexyers}>330</Text>
                            <Text style={styles.workingextext}>grams per day</Text>
                        </View>
                        <View style={styles.smallbox}>
                            <Text style={styles.workingextext}>Water</Text>
                            <Text style={styles.workingexyers}>3.7</Text>
                            <Text style={styles.workingextext}>liters per day</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.topictext}>Breakfast</Text>
                        <View style={styles.textbox}>
                            <Text style={styles.textboxtext}>Scrambled eggs with spinach and tomatoes</Text>
                            <Text style={styles.textboxtext}>Whole-grain toast</Text>
                            <Text style={styles.textboxtext}>Greek yogurt with berries</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.topictext}>Lunch</Text>
                        <View style={styles.textbox}>
                            <Text style={styles.textboxtext}>Grilled chicken breast</Text>
                            <Text style={styles.textboxtext}>Quinoa salad with mixed vegetables (bell peppers, cucumbers, carrots)</Text>
                            <Text style={styles.textboxtext}>Mixed greens with olive oil and balsamic vinegar dressing</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.topictext}>Dinner</Text>
                        <View style={styles.textbox}>
                            <Text style={styles.textboxtext}>Baked salmon</Text>
                            <Text style={styles.textboxtext}>Steamed broccoli</Text>
                            <Text style={styles.textboxtext}>Sweet potato</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.topictext}>Supplements</Text>
                        <View style={styles.textbox}>
                            <Text style={styles.textboxtext}>MonsterPower high protine supplement - 10g per day</Text>
                            <Text style={styles.textboxtext}>C4 5g per every work out days -  30 min before start workout</Text>
                            <Text style={styles.textboxtext}>Whey Protein</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
        </PaperProvider>
    )
}