import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, Button, ImageBackground, Image, StatusBar, StyleSheet, AsyncStorage } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useCount } from '../../core/cart';




export default function Home({navigation}){

  

  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [pic, setPic] = useState('');
  const [id, setId] = useState(0);
  const [qty, setQty] = useState(0); 
  const [text, setText] = useState('Not yet scanned');
  const [product,setProduct] = useState(null);
  //const cart = useCount(state => state.cart);
  //const addItem = useCount(state => state.addItem);
  const [shoppingBag, setShoppingBag] = useState([]);
  const [shoppingBig, setShoppingBig] = useState([]);
  const [cartarrays,setCartarrays] = useState([]);
  //let cartarray=[];



  

  const findProduct = async (text) => {
    // Build formData object.
    
    console.log(name);
    let formData = new FormData();
  
    formData.append('FindProduct', text);
    
    const response = await fetch('http://192.168.1.144/api/Search.php', {
    method: "POST",
    body: formData,
    });
    
    const data = await response.json();
    //console.log(data);
    setProduct(data);
    //addItem(data);

    if(data&&data.length>0){
      setId(data[0].id)
      setName(data[0].prodname)
      setCategory(data[0].category)
      setPrice(data[0].price)
      setQty(data[0].qty)
      setPic(data[0].pic)
      //console.log('fresh bag', shoppingBag)
      cartarrays.push(data)
      
      //ShoppingBag.push(cartarray)
      
      
    }
    
    
     //cartarray.push(ShoppingBag)
      //console.log('new cart:>>', cartarray)

      
      //setShoppingBag(cartarray);
      //setShoppingBag(uniqueData);
    //setShoppingBig(setShoppingBag)


    
    

    
    
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
        <Text>Demande d'autorisation de caméra</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Pas d'accès à la caméra</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }


  

  const saveData = async(cartarrays) => {
    console.log('2nd cart:>>', cartarrays);

    try {
        await AsyncStorage.setItem('cart', JSON.stringify(cartarrays)).then(() =>{
          alert('Saved successfully.');console.log('saved cart');
        });
        
        //console.log('saved cart'))
    } catch (error) {
        console.log(error)
    }
};



  // Return the View
  return (


    <ImageBackground source={require('../../assets/pic1.jpg')} style={styles.background}>
    <View style={styles.container}>
      
  


       <View style={styles.containerr}>
        <Image source = {require("../../assets/lo-2.png")} style={styles.stretch}/>
       
        <Text style={styles.texto}>{'\n'}Smart Market</Text>
     <Text style={styles.textoh}>{'\n'}Create And Manage Your Market Easly</Text>
    
      </View>


       



      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 500, width: 300 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() =>{ setScanned(false)}} color='tomato' />}

      
      
      <TouchableOpacity ><Text>{'\n'}</Text></TouchableOpacity>
      <Button title={'Ajouter au panier'} onPress={() => {
        //addItem(shoppingBag); 
        
        saveData(cartarrays) ;}} color='green' />

      

      <View style={styles.shadowProp}>
      <Text style={styles.shadowPropp}>Name: {name}{'\n'}category: {category}{'\n'}Price: {price}Dh{'\n'}qty: {qty}</Text>

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
                      >Passer à le panier</Text>
                    </Pressable>
                  </View>

                  
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#163b37',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
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
 marginTop: -70,

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
  marginBottom:-50,

},
shadowPropp: {
  fontSize: 25,
  margin: 20,
  color: 'white',
   marginTop: 10,
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
    height: 70,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});