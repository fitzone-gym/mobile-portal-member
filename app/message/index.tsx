import styles from "../../styles/message.style";
import * as React from "react";
import {View, Text, SafeAreaView, ScrollView, Image} from "react-native";
import { useRouter } from "expo-router";
import {Route} from "expo-router/build/Route";

export default function Message(){
    const router = useRouter();
    return(
        <SafeAreaView>
            <ScrollView style={styles.messageView}>

                <View style={styles.MemberNavigationBar}>
                    <View style={styles.HomeNavigation}></View>
                    <View style={styles.MessageAndNotificationNavigation}>
                        <View style={styles.MessageBox}></View>
                        <View style={styles.NortificationBox}></View>
                    </View>
                </View>

                <Text style={styles.Heading}>Message</Text>

                <View style={styles.OnlineUsers}>
                    <View style={styles.activeUser}>
                        <View style={styles.activeUserPic}></View>
                        <Text style={styles.activeUserName}>Mr.Dion</Text>
                    </View>
                    <View style={styles.activeUser}>
                    <View style={styles.activeUserPic}></View>
                        <Text style={styles.activeUserName}>Dr.Sandamali</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
    
}
