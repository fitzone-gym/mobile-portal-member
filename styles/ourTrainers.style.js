import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    fullbody:{
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        padding: 10,
      },
      gridItem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150, // Set the desired height for each grid item
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        margin: 5,
      },

      cardContent:{
        flexDirection: 'row',
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

})

export default styles