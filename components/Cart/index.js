import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert, AsyncStorage  } from 'react-native';


export default function Cart (){
	const [cart, setCart] = useState([]);


	console.log('check out screen / modal');
	
	useEffect(() => {
		const getData = async() => {
		try{


	   let res = await AsyncStorage.getItem('cart')      
	   setCart(JSON.parse(res))
	   console.log('welcome cart:>> ', res)
	   } catch(err) {
		console.log(err)
	   }
	   }

	   getData()
		



	}, [] );
	


	


	return(
		<View>

			<Text>NABNOUB</Text>
			






		</View>








	);







}