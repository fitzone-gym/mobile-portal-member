import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    MainContainer:{
        flex:1,
        minHeight:'100%',
    },

    fillLines:{
        flexDirection:'row',
        paddingTop:'10%',
        paddingLeft:'8%',
        paddingRight:'10%',
        gap:10,
    },

    fillLine1:{
        width:100,
        height:5,
        backgroundColor:'#E54646',
        borderRadius:10,
    },
    fillLine2:{
        width:100,
        height:5,
        backgroundColor:'#9A9A9A',
        borderRadius:10,
    },
    fillLine3:{
        width:100,
        height:5,
        backgroundColor:'#9A9A9A',
        borderRadius:10,
    },
    forgetPasswordPic:{
        width:50,
        height:50,
        backgroundColor:'#FF6666',
        top:'5%',
        left:'24%',
        borderRadius:100
    },
    forgetPasswordText:{

        top:'15%',
        left:'9%',

    },
    forgetPasswordHeading:{
        color:'#E54646',
        fontSize:25,
    },

    forgetPasswordSubText:{
        top:'16%',
        left:'9%',
        width:320
    },

    forgetPasswordSubheading:{
        color:'#9A9A9A',
        fontSize:16,
    },

    emailEnterBox:{
        top:'22%',
        left:'9%',
    },

    emailEnterBox2:{
        top:'26%',
        left:'9%',
        marginBottom:'7%',
    },

    emailHeading:{
        color:'#ffffff',
    },

    input: {
        height: 40,
        borderColor:'#ffffff',
        borderRadius:5,
        borderWidth: 1,
        borderColor:'#E54646',
        padding: 10,
        width: '83%',
        marginTop: 10,
        color:'#ffffff',
      },

      ContinueButton1:{
        top:'28%',
        width:'83%',
        height:45,
        left:'9%',
        backgroundColor: '#E54646',
        padding: 10,
        borderRadius:10,
      },
      forgetPasswordButtonText:{
        color:'#ffffff',

        fontSize:20,
        paddingLeft:'27%',
        paddingRight:'25%',

      },
      otpBox:{
        top:'21%',
        marginLeft: 30,
        marginRight: 30,
      },

      otpDoneButton:{
        top:'28%',
        width:'83%',
        height:45,
        left:'9%',
        backgroundColor: '#E54646',
        padding: 10,
        borderRadius:10,
    },

        doneButtonText:{
            color:'#ffffff',

            fontSize:20,
            paddingLeft:'36%',
            paddingRight:'25%',

        },

        otp:{
            color:'#ffffff',
        },
})

export default styles
