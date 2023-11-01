import styles from '../../../styles/home.style';

import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import { Stack, useRouter } from 'expo-router';
import React, {useEffect, useState} from 'react';

import axios from "../../../axios";

import baseUrl from '../../../axios';

interface Trainer{
    user_id:string;
    first_name:string;
    last_name:string;
    profile_picture:string;
}


export default function Home() {

    const [trainerDetails, setTrainerDetails] = useState<Trainer[]>([]);

    useEffect(() => {
        axios
            .get("/ourTrainers")
            .then((response) => {
                setTrainerDetails(response.data.data);
                // console.log(response.data);
                console.log(trainerDetails)
            })
            .catch((error) => console.error(error));
    }, []);

    const router = useRouter()

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'Our Trainers',
                }}
            />
            
            <ScrollView style={styles.fullbody}>
                <View
                style={styles.topcontainer}
                >
                    
                    <ImageBackground
                    source={
                        require('../../../assets/images/unsplash_U2q73PfHFpM.png')
                    }
                    resizeMode='cover'
                    style={styles.topcontainerimage}>

                        <Text style={styles.text}>Our trainers</Text>
                    
                    </ImageBackground>              
                </View>

                <View
                style={styles.bottomcontainer}>

                   {trainerDetails.map((trainer) => (

                        <TouchableOpacity
                        style={styles.trainercards}
                        onPress={()=>{
                            router.push({
                                pathname:"member/trainerProfile", 
                                params:{user_id:trainer.user_id}
                                })
                            }} 
                            key={trainer.user_id}>
                            <Image
                                style={styles.trainerimage}
                                // source={{ uri:`../../assets/images/Trainers/${trainer.profile_picture}`}}
                                source={{ uri:`https://stylioo.blob.core.windows.net/images/${trainer.profile_picture}`}}
                            />
                            <Text
                                style={styles.trainercardname}
                            >{trainer.first_name}&nbsp;{trainer.last_name}</Text>
                            {/* <Text
                                style={styles.trainercardtext}
                            >9 Members</Text> */}
                        </TouchableOpacity>

                        )
                   )}

                    </View>
                
            </ScrollView>
            
        </SafeAreaView>
    )
}