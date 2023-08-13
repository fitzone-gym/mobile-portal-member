import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    messageView:{
        backgroundColor:'#121212',
        height: '100%',
    },

    MemberNavigationBar:{
        width: 350,
        height:60,
        marginLeft:13,
        marginRight:13,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },

    HomeNavigation:{
        width:60,
        backgroundColor:'red',
        height:60,
    },
    MessageAndNotificationNavigation:{
        width:120,
        height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },

    MessageBox:{
        width:60,
        height:60,
        backgroundColor:'green',
    },

    NortificationBox:{
        width:60,
        height:60,
        backgroundColor:'blue',
    },


    Heading:{
        color:'#ffffff',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:13,
        marginTop:20,
    },

    OnlineUsers:{
        width:'93%',
        height:100,
        marginLeft:13,
        marginTop:20,
        backgroundColor:'#ffffff',
    },

    activeUser:{},

    activeUserPic:{},

    activeUserName:{},
});

export default styles;