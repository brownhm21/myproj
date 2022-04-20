import { StyleSheet } from 'react-native'
//import { fonts } from './fonts';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
      
    },
    container: {
          
          marginTop: -50,
          justifyContent: 'center',
          alignItems: 'center',
      
     },
     stretch: {
       width:100,
       height:90,
    },
    texto: {
      //flex: 1,
      flexDirection: 'row',
      fontSize: 20,
        lineHeight: 10,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        //fontFamily: fonts.Dunkin,
        //fontFamily: 'Inter_900Black',
       
       
    },
    textoh: {
      fontSize: 10,
      fontWeight: 'bold',
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        marginTop: -10,
       
    }, 
    textInput:{
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        marginBottom: 50,
        height: 40,
        fontSize: 20,
        flex: 1,
        color: 'white',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 150,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    action: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',

      //marginTop: 10,
     paddingBottom: 5,
      
      
  },
  content: {

    width:'90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    margin:20,
    

  },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textTransform: 'uppercase'
      },
      loginButtonSection: {
        width: '100%',
        // height: '30%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
     },
     background: {
      flex: 1,
      resizeMode: 'cover', 
      justifyContent: 'center',


     },
     loginButton: {
       backgroundColor: '#163b37',
       color: 'white',
       height: 35,
       justifyContent: 'center', //up dwn
       alignItems: 'center',  //r & l
       width: '70%',
       borderRadius: 100,

     }
    
})

export default styles;
