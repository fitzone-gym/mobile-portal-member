// import styles from '../../styles/ourTrainers.style';

// import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList, Dimensions } from 'react-native';

// import { Stack, useRouter } from 'expo-router';
// import React from 'react';

// export default function OurTrainers() {
//     const router = useRouter()
//     const DATA = [
//         { name: 'Kamal', memberCount:9, image: require('../../assets/images/Trainers/Kamal.png'), id: '1',},
//         { name: 'Lakmal', memberCount:7, image: require('../../assets/images/Trainers/Lakmal.png'), id: '2',},
//         { name: 'Maduka', memberCount:5, image: require('../../assets/images/Trainers/Maduka.png'), id: '3',},
//         { name: 'Nadheeka', memberCount:7, image: require('../../assets/images/Trainers/Nadheeka.png'), id: '4',},
//     ]

//     type ItemProps = {name: string, memberCount: number, image: any  };


//     const Item = ({name, memberCount, image}: ItemProps) =>(
//         <View style={styles.cardContent}>
//             <TouchableOpacity
//                         style={styles.trainercards}
//                         onPress={()=>{
//                             router.push('member/trainerProfile')}}>
//                             <Image
//                                 style={styles.trainerimage}
//                                 source={image}
//                             />
//                             <Text
//                                 style={styles.trainercardname}
//                             >{name}</Text>
//                             <Text
//                                 style={styles.trainercardtext}
//                             >{memberCount}</Text>
//                         </TouchableOpacity>
//         </View>
//     )

//     return (
//         <SafeAreaView>
//             <Stack.Screen
//                 options={{
//                     title: 'Member',
//                 }}
//             />
            


//             <View >
//                 <FlatList 
//                     data={DATA}
//                     renderItem={({item}) =><Item name={item.name} memberCount={item.memberCount} image={item.image} />}
//                     keyExtractor={item => item.id}
//                 />
//             </View>
            

            
//         </SafeAreaView>
//     )
// }