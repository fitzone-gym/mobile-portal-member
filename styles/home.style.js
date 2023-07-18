import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
    
    },

    SignUpContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:100,
        backgroundColor: 'black',
    
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
        width:380,
        height:300,
        backgroundColor: '#222222',
        position:'absolute',
        borderRadius:10,

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
    SignInBoxHeading3InnerText:{
        color:'#E54646',
        fontSize:15,

    },

    SignInButton:{
        color:"#E54646"
    },

    buttonDashboard:{},




    







})

export default styles