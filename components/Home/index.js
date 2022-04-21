import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, Button, ImageBackground, Image, StatusBar, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';




export default function Home({navigation}){

  

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [qty, setQty] = useState(0); 
  const [text, setText] = useState('Not yet scanned');
  const [product,setProduct] = useState(null);


  const findProduct = async (text) => {
    // Build formData object.
    let formData = new FormData();
    formData.append('FindProduct', text);
    
    const response = await fetch('http://192.168.1.144/api/Search.php', {
    method: "POST",
    body: formData,
    });
    
    const data = await response.json();
    console.log(data);
    setProduct(data);

    if(data&&data.length>0){
      setName(data[0].prodname)
      setCategory(data[0].category)
      setPrice(data[0].price)
      setQty(data[0].qty)
      
    }

    }
  

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
setScanned(true);
setText(data);
findProduct(data);
};

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>



       <View style={styles.containerr}>
        <Image source = {require("../../assets/lo-2.png")} style={styles.stretch}/>
       
        <Text style={styles.texto}>{'\n'}Smart Market</Text>
     <Text style={styles.textoh}>{'\n'}Create And Manage Your Market Easly</Text>
    
      </View>


       



      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 300, width: 200 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
      <Button title={'Add to Cart'} onPress={() => setScanned(false)} color='green' />
      

      <View style={styles.shadowProp}>
      <Text style={styles.shadowPropp}>Name: {name}{'\n'}category: {category}{'\n'}Price: {price}${'\n'}qty: {qty}</Text>

      </View>
      
    

      <View style={styles.loginButtonSection}>
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      navigation.navigate("Cart");
                    }}
                    >
                      <Text 
                        style={styles.text}
                      >Proceed to checkout</Text>
                    </Pressable>
                  </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#163b37',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    color: 'white',
  },

  containerr: {
      
    
    justifyContent: 'center',
    alignItems: 'center',

},
stretch: {
 width:100,
 height:100,
 marginTop: -100,

},

texto: {
flexDirection: 'row',
fontSize: 20,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'justify',
  marginTop: -20,

 
 
},
loginButtonSection: {
  width: '100%',
  // height: '30%',
  //marginTop: 30,
  justifyContent: 'center',
  alignItems: 'center'
},
loginButton: {
  backgroundColor: '#45b6ba',
  color: 'white',
  height: 35,
  justifyContent: 'center', //up dwn
  alignItems: 'center',  //r & l
  width: '70%',
  borderRadius: 100,
  marginBottom:-20,

},
shadowPropp: {
  fontSize: 25,
  margin: 20,
  color: 'white',
   marginTop: 2,
   justifyContent: 'center',
   alignItems: 'center'

  

},
text: {
  fontSize: 18,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
  textTransform: 'uppercase'
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
  marginBottom: 20,
 
},
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});