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
        width:200,
        height:200,
        backgroundColor:'#FF6666',
        top:'10%',
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
        width:300
    },

    forgetPasswordSubheading:{
        color:'#9A9A9A',
        fontSize:16,
    },

    emailEnterBox:{
        top:'22%',
        left:'9%',
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
        width: '80%',
        marginTop: 10,
      },

      ContinueButton1:{
        top:'28%',
        width:'80%',
        height:45,
        left:'9%',
        backgroundColor: '#E54646',
        padding: 10,
        borderRadius:20,
      },
      forgetPasswordButtonText:{
        color:'#ffffff',

        fontSize:20,
        paddingLeft:'35%',
        paddingRight:'25%',

      },
      otpBox:{
        top:'21%',
        marginLeft: 30,
        marginRight: 30,
      },

      otpDoneButton:{
        top:'29%',
        width:'30%',
        height:45,
        left:'35%',
        backgroundColor: '#E54646',
        padding: 10,
        borderRadius:20,},

        doneButtonText:{
            color:'#ffffff',

            fontSize:20,
            paddingLeft:'27%',
            paddingRight:'27%',

        },
})

export default styles
