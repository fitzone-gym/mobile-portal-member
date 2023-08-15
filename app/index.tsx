import React from 'react';
import styles from '../styles/home.style';

import { View,  TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

import { Avatar, Button, Card, Text } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';
import { ThemeProp } from 'react-native-paper/lib/typescript/src/types';
import { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const LeftContent = (props: JSX.IntrinsicAttributes & ViewProps & React.RefAttributes<View> & { icon: IconSource; size?: number | undefined; color?: string | undefined; style?: StyleProp<ViewStyle>; theme?: ThemeProp | undefined; }) => <Avatar.Icon {...props} icon="folder" />


export default function Home() {
    const router = useRouter()
    return (
        <PaperProvider>
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: 'Home',
                }}
            />
            
            <ScrollView>
                <View
                style={styles.container}
                >
                    <Text
                        style={styles.heading}
                    >Home</Text>
                    {/* <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            router.push('/member')
                        }}
                    >
                        <Text>Click</Text>
                    </TouchableOpacity> */}

                    <Button mode="contained" onPress={() => {
                            router.push('/member')
                        }}>
    Our trainers
  </Button>


                    <Button mode="contained" onPress={() => {
                            router.push('/member/memberProfile')
                        }}>
    memberProfile
  </Button>
  {/* <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card> */}

  <Button mode="contained" onPress={() => {router.push('/member/workoutSchedule')}}>workoutSchedule</Button>
  {/* <Button  mode="contained" onPress={() => {
                            router.push('/member/ourTrainers')
                        }}>
    ourTrainers
  </Button> */}

  <Button  mode="contained" onPress={() => {
                            router.push('/member/memberDietPlan')
                        }}>
    Diet Plan
  </Button>
  
                </View>
            </ScrollView>
            
        </SafeAreaView>
        </PaperProvider>
    )
}

