import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    fullbody:{
        backgroundColor: '#1E1E1E',
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
        minHeight: 360,
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

      extrasmallbox:{
        flex:1,
        opacity:0.8,
        minHeight:30,
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
        flexDirection:'row',

      },

      Extrasmalltext:{
        fontSize:10,
        color:'#E54646',
        fontWeight: 'bold',
      },
      Extrasmalltextvalue:{
        fontSize:10,
        color:'#FFFFFF',
        fontWeight: 'bold',
      },

      lowercontent:{
        // flexDirection:'column',
        // alignItems: 'center',
        margin:20,
      },

      topictext:{
        color:'#E54646',
        fontWeight: 'bold',
        fontSize:20,
        paddingTop:10,
      },

      textbox:{
        opacity:0.8,
        minHeight:134,
        backgroundColor:'#222222',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding:20,
        marginTop:10,
      },

      textboxcontent:{
        flexDirection:'row',
        alignItems: 'center',

      },

      workingextext:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        fontSize:14,
      },
      workingexyers:{
        color:'#E54646',
        fontWeight: 'bold',
        fontSize:50,
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

      smallboxbigNumber:{
        color:'#E54646',
        fontWeight: 'bold',
        fontSize:45,
      },

      getstartedbutton:{
          margin:20,
          width: 330,
          height: 50,
          backgroundColor: '#E54646',
          borderRadius: 10,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },

      getstartedbuttonText:{
        fontWeight: 'bold',
        fontSize:15,
        color: 'white',

      },

      textboxtext:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        marginLeft:10,
        fontSize:14,
      },

})

export default styles
