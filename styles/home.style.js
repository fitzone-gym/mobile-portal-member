import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    fullbody:{
        backgroundColor: '#1E1E1E',
    },

    containerHome:{
        minHeight: '100%',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 500,
        width:'100%',
    },

    topcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 160,
        width:'100%',
    },

    topcontainerimage: {
        width: '100%',
        height: '100%',
    },

    cardContent:{
        flexDirection: 'row',
      },

    topicons:{
        flex: 1,
        marginTop:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    sidebaricon:{
        marginLeft:20,
    },

    bellicon:{
        marginRight:20,
    },

    text:{
        marginLeft:20,
        marginBottom:10,
        color: 'white',
        fontSize: 32,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'left',
      },

    bottomcontainer:{
        flexDirection:'row',
        backgroundColor: '#1E1E1E',
        flexWrap: 'wrap',
        minHeight: 550,
    },

    trainercards:{
        backgroundColor:'#222222',
        height:158,
        width: 170,
        margin: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    trainerimage:{
        width:80,
        height:80,
        borderColor: 'red',
        borderWidth: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignSelf: 'center',
        marginTop:15,

    },

    trainercardname:{
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    trainercardtext:{
        color: '#FFFFFF',
        fontSize: 10,
        lineHeight: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },


    heading: {
        fontSize: 20,
        color: 'white'
    },
    btn: {
        width: 300,
        height: 100,
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