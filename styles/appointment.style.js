import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    appointmentSafeArea:{
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

    appointmentHeading:{
        color:'#ffffff',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:13,
        marginTop:20,
    },

    calenderView:{

        width:"93%",
        height:350,
        marginLeft:13,
        marginTop:0,
        borderRadius:20,

    },

    specialEvents:{
        backgroundColor:'#222222',
        width:'93%',
        height:155 , 
        marginTop:10, 
        marginLeft:13, 
        borderRadius:20
    },

    specialEventHeading:{
        color:'#FF5A5A',
        marginLeft:13,
        marginTop:40,
        fontSize:15,
        fontWeight:'bold',
    },

    specialAnnouncements:{
        backgroundColor:'#222222',
        width:'93%',
        height:155 , 
        marginTop:15, 
        marginLeft:13, 
        borderRadius:20
    },

    specialAnnouncementsHeadings:{
        color:'#FF5A5A',
        marginLeft:13,
        marginTop:20,
        fontSize:15,
        fontWeight:'bold',
    },

    calenderViewTimeSlots:{
        backgroundColor:'#222222',
        width:"93%",
        height:450,
        marginLeft:13,
        marginTop:20,
        borderRadius:20,
    },

    UpTimeSlot:{

        width:"100%",
        height:75,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomWidth:1,
        borderBottomColor:'#FF5A5A',

    },

    DownTimeSlot:{
        width:"100%",
        height:75,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,

    },

    TimeSlot:{
        width:"100%",
        height:75,
        borderBottomWidth:1,
        borderBottomColor:'#FF5A5A',
    },

    TimePeriod:{
        color:'#ffffff',
        marginLeft:13,
        marginTop:30,
        fontSize:15,
        fontWeight:'bold',
    },

    TimeSlotBooked:{
        width:"100%",
        height:75,
        backgroundColor:'#FF5A5A',
        flexDirection:'row',
        gap:130,
    },

    TimePeriodBooked:{

        color:'black',
        opacity:0.3,
        marginTop:30,
        fontSize:15,
        fontWeight:'bold',
    },

    special_event_date:{ 
        color:'#747474',
        fontSize:15,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:10,
    },

    special_event_heading:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        marginTop:10,
        color:'#FF5A5A',

    },

    special_event_body:{
        color:'#ffffff',
        fontSize:13,
        // marginLeft:15,
        marginTop:10,
        textAlign:'center',
    },

    container:{
        flex:1,
        backgroundColor:'#9C9797',
    },

    timeslot:{
        fontSize:20,
        fontWeight:'700',
        alignSelf: 'center',
        marginTop:10,
    },

    TimeSlots:{
        width: '45%',
        height:40,
        borderRadius:10,
        borderWidth:0.5,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    commonbtn:{
        width:'90%',
        height:45,
        
    },

    date:{},



});

export default styles;