import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    PaymentSafeArea:{
       backgroundColor:'#121212',
       height:'100%'
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

    paymentHeading:{
        color:'#ffffff',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:13,
        marginTop:20,
    },



    PayementRecords:{
        backgroundColor:'#222222',
        width:'93%',
        height:130 , 
        marginTop:10, 
        marginLeft:13, 
        borderRadius:20,
        opacity:0.7,
    },

    payementLine1:{
        flexDirection:'row',
        marginBottom:8,
    },

    WorkOutPlan:{
        color:'#14BA6D',
        marginLeft:13,
        marginTop:15,
        fontSize:16,
        fontWeight:'bold',
    },

    paid:{
        color:'#14BA6D',
        marginLeft:87,
        marginTop:17,
        fontSize:12,
        fontWeight:'bold',
    },

    payementLine2:{
        flexDirection:'row',
        gap:34,
    },

    paymentMaidDateHeading:{
        color:'#ffffff',
        marginLeft:13,
        marginTop:15,
        fontSize:15,
        fontWeight:'bold',

    },

    paymentMaidDate:{
        color:'#ffffff',
        marginLeft:13,
        marginTop:5,
        fontSize:15,

    },

    paymentExpireDateHeading:{
        color:'#ffffff',
        marginLeft:13,
        marginTop:15,
        fontSize:15,
        fontWeight:'bold',
    },
    
    paymentExpireDate:{
        color:'#E54646',
        marginLeft:13,
        marginTop:5,
        fontSize:15,
    },




});

export default styles;