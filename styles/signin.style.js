import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
    container: {
        minHeight: '100%',       
    }, 
    backgroundImage:{
        flex: 1,
        justifyContent:'space-between',
        height: '110%',
        width: '100%',
    },
    upper:{
        flex: 1,
        alignItems: 'center',
        // backgroundColor:'red',
    },    
    top: {
        marginTop: 20,
        marginLeft:5,
    },
    logo:{
        width:100,
        height:100,
    },    
    upperdiv:{
        // backgroundColor:'black',
        width:'70%'
    },
    upperTxt:{
        fontSize:30,
        textAlign:'center',
        fontWeight:600,
        color:'white'
    },
    bottom:{
        alignItems: 'center',
        backgroundColor: '#222222',
        opacity: 0.7,
        margin:30,
        padding:0,
        borderRadius:17,
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E54646',
        marginTop:10
    },
    signinTxt:{
        justifyContent: 'center',
        padding:20,
        width:"100%",
    },
    subContent: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign:'left',
        color:'white'
    },
    txtInput:{
        fontSize: 14,
        color: 'white',
        padding:3,
        borderBottomWidth: 1, 
        borderColor: '#E54646',
        marginBottom:30
    },
    pwtxt:{
        color: '#E54646',
        fontSize: 16,
        textAlign: 'right',
    },

    btn: {
        width: 250, 
        height: 50,
        marginTop:30,
        marginBottom: 15,
        backgroundColor: '#E54646',   
        borderRadius: 30,
        alignItems:'center',
        justifyContent: 'center',
    },
    btnTxt:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',

    },

    searchIcon: {
        padding: 10,
    },
})

export default styles;