import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        minHeight: '100%',

    
    },


    heading: {
        fontSize: 20,
        color: 'white'
    },
    btn: {
        width: 100,
        height: 20,
        marginTop: 50,
        backgroundColor: '#1d5a9f',
        color: 'white',
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    SignInBox:{
        
        width:340,
        height:300,
        backgroundColor: '#222222',
        position:'absolute',
        borderRadius:20,
        marginBottom:50,
        top:'50%',
        left:'5%',
        opacity:0.7,

    },

    SignInMain:{
        display: 'flex',

    },

    SignInBoxHeading1:{

        padding:20,
        fontSize:30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',


    },
    SignInBoxHeading2:{
        textAlign: 'center',
        padding:10,
        color:'#838383',
        fontSize:16,

    },

    SignInBoxHeading3:{
        textAlign: 'center',
        padding:5,
        color:'#838383',
        fontSize:13,

    },
    registerLink:{
        marginTop:4,
        color:'#E54646',
        fontSize:15,

    },

    SignInButton:{
        color:"#E54646"
    },

    buttonDashboard:{},

    forgetPasswordButton:{
        
    },

    registrationBar:{
        flexDirection: 'row',
        justifyContent:'center',
        marginTop:20,
    },




    







})

export default styles