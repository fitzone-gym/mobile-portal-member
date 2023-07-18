import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        
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

    HeadMemberProfileBar:{
        width: 350,
        height: 70,
        backgroundColor: '#222222',
        opacity:0.7,
        borderRadius:50,
        marginTop:10,
        marginLeft:13,
        flexDirection:'row',
        alignItems:'center'
    },

    MemberProfilePic:{
        width:55,
        height:55,
        backgroundColor:'white',
        justifyContent: 'center',
        marginLeft:13,
        borderRadius:50,
        borderWidth:2,
        borderColor:'#E54646',
    },

    WelcomeNameBar:{
        width:200,
        height:40,
        marginLeft:5,
    },

    welcome:{
        color:'#E54646',
        fontSize:15,
    },

    name:{
        color:'white',
        fontSize:20,
    },

    Mortivationaltext:{
        width:250,
        height:159,
        color:'white',
        marginTop:20,
        fontWeight:'bold',
        fontSize:30,
        marginLeft:16,

    },

    specialAnnouncementAndDateBox:{
        width:350,
        height:150,
        marginLeft:13,
        flexDirection:'row',
        justifyContent: 'space-between',
    },

    specialAnnouncements:{
        width:250,
        height:150,
        backgroundColor:'#222222',
        opacity:0.7,
        borderRadius:20

    },
    DateBox:{        
        width:90,
        height:150,
        backgroundColor:'#222222',
        opacity:0.7,
        borderRadius:20,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        alignItems: 'center',
    },

    Date:{
        color:'white',
        fontSize:60,
        fontWeight:'bold',
    },

    Month:{
        color:'#E54646',
        fontSize:35,
        marginBottom:5,
    
    },

    Year:{     
        color:'#ffffff',
    fontSize:10,
    },

    WorkingProgressTitle:{
        width:250,
        height:25,
        color:'#E54646',
        fontSize:20,
        fontWeight:'500',
        marginTop:20,
        marginLeft:13
    },

    workoutProgress:{
        width:350,
        height:200,
        backgroundColor:'#222222',
        opacity:0.7,
        marginLeft:13,
        marginTop:5,
        borderRadius:15,
    },

    WaterBox:{       
        width:120,
        height:150,
        backgroundColor:'#222222',
        opacity:0.7,
        borderRadius:20,
        paddingTop:20,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        alignItems: 'center',
        marginLeft:13,
        marginTop:20,
    },

    WaterTitle:{
        color:'#9C9B9B',
        fontSize:16,

    },

    WaterLevel:{
        color:'#ffffff',
        fontSize:70,
        fontWeight:'bold',


    },

    WaterMeasure:{
        color:'#E54646',
    },



 
    

})

export default styles