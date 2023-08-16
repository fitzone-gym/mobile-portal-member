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

                <View style={styles.RecentChats}>
                    <View style={styles.RecentChatPic}></View>
                    <View style={styles.ChatNameAndMessage}>
                        <View style={styles.ChatNameAndUnreadMessage}>
                            <Text style={{fontSize:16, fontWeight:'500', color:'#898A8D',marginBottom:5}}>Dr. Amaya Dissanayake</Text>
                            <Text style={{color:'#E54646',fontWeight:'500'}}>No, it's fine</Text>
                        </View>
                        <View>
                            <Text style={{marginTop:13, marginLeft:50,color:'#828282'}}>8:32 PM</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.RecentChats}>
                    <View style={styles.RecentChatPic}></View>
                    <View style={styles.ChatNameAndMessage}>
                        <View style={styles.ChatNameAndUnreadMessage}>
                            <Text style={{fontSize:16, fontWeight:'500', color:'#898A8D',marginBottom:5}}>Mr. Dion de Silva</Text>
                            <Text style={{color:'#ffffff',fontWeight:'500'}}>Hey! How's going</Text>
                        </View>
                        <View>
                            <Text style={{marginTop:13, marginLeft:95,color:'#828282'}}>8:00 PM</Text>
                        </View>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
    
}
