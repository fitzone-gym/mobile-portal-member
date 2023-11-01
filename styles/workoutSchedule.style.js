import { StyleSheet } from 'react-native'

const styles = StyleSheet .create({ 

    fullbody:{

    },

    topcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 189,
        width:'100%',
    },

    topcontainerimage: {
        width: '100%',
        height: '100%',
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

    medicheckup:{
        flexDirection: 'row',
      },

      smallbox:{
        flex:1,
        opacity:0.8,
        minHeight:130,
        backgroundColor:'#222222',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems:'center',
        padding:10,
        margin:5,
        marginTop:10,
      },

      smallboxtext:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        fontSize:14,
        alignItems: 'center',
      },

      Date:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    },

      smallboxbigNumber:{
        color:'#E54646',
        fontWeight: 'bold',
        fontSize:45,
      },

      bottomcontainer:{
        flexDirection:'column',
        backgroundColor: '#1E1E1E',
        minHeight: 550,
        padding:10,
    },

    workoutTitle:{
      flexDirection:'row',
      margin:5,
    },

    itemTitle:{
      flex:2,
      color:'#838383',
      fontWeight: 'bold',
      fontSize:15,
      paddingLeft:20,
    },

    setcountTitle:{
      flex:1,
      color:'#838383',
      fontWeight: 'bold',
      fontSize:15,
      paddingLeft:20,
    },

    repcountTitle:{
      flex:1,
      color:'#838383',
      fontWeight: 'bold',
      fontSize:15,
      paddingLeft:20,
    },


    workouts:{
        flexDirection:'column',

    },

    item:{
        flex:2,
        color:'white',
        fontWeight: 'bold',
        fontSize:24,
        padding:5,
      },

      setcount:{
        flex:1,
        color:'#E54646',
        fontWeight: 'bold',
        fontSize:20,
        padding:5,
      },

      repcount:{
        flex:1,
        color:'white',
        fontWeight: 'bold',
        fontSize:20,
        padding:5,
      },

      textbox:{
        flexDirection:'row',
        opacity:0.8,
        minHeight:90,
        backgroundColor:'#222222',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding:20,
        marginTop:10,
      },

})

export default styles