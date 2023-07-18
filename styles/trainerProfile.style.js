import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    fullbody:{

    },
    
    topcontainerimage: {
        width: '100%',
        minHeight: 700,
        
    },

    topicons:{
        marginTop:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        // height:100,
    },

    sidebaricon:{
        marginLeft:20,
    },

    bellicon:{
        marginRight:20,
    },

    bottomcontainer:{
        
    },

    text:{
        marginLeft:20,
        color: 'white',
        fontSize: 32,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'left',
      },

      trainerimage:{
        width: 110,
        height: 200,
        marginLeft:22,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
      },

})

export default styles