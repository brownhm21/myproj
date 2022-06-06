import {
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
  } from "@expo/vector-icons";
  import React, { useEffect, useState } from "react";
  import {
	Alert,
	AsyncStorage,
	FlatList,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
  } from "react-native";
  
  const ListItem = ({ item, setCart, cart }) => {
	
	const add = () => {
	  setCart(
		cart.map((obj) =>
		  obj.id === item.id
			? {
				...obj,
				qty:
				  cart[cart.findIndex((miniobj) => miniobj.id === obj.id)].qty +
				  1,
			  }
			: obj
		)
	  );
	};
	const subtract = () => {
	  setCart(
		cart.map((obj) =>
		  obj.id === item.id
			? {
				...obj,
				qty:
				  cart[cart.findIndex((miniobj) => miniobj.id === obj.id)].qty-1,
			  }
			: obj
		)
	  );
	};
	
	const deleteItem = () => {
		Alert.alert("Are You Sure Want To Delete Item ", "Select Below Options", [
		  { text: "Cancel", onPress: () => 0, style: "cancel" },
		  {
			text: "OK",
			onPress: () =>
			  // Filter Data and updating data
			  setCart(cart.filter((currentItem) => currentItem != item)),
		  },
		]);
	  };
	return (
		
	  <View style={styles.item}>
		<View style={styles.avatarcon}>
		<Image source={{uri: item.pic}}  style ={styles.avatar}/>
		</View>
		<View style={styles.txt}>
		  <Text style={styles.texto}>{item.prodname}</Text>
		  <Text style={styles.text}>{item.category}</Text>
		  <Text style={styles.text}>{item.price} DH</Text>
		</View>
  
		<View style={styles.qty}>
		  <TouchableOpacity
			title="Subtract"
			onPress={subtract}
			style={{ borderWidth: 1, borderColor: "#cccccc" }}
		  >
			<MaterialIcons name="remove" size={25} color="#163b37" />
		  </TouchableOpacity>
		  <Text
			style={{
			  borderTopWidth: 1,
			  borderBottomWidth: 1,
			  borderColor: "#cccccc",
			  paddingHorizontal: 7,
			  paddingTop: 3,
			  color: "#163b37",
			  fontSize: 13,
			}}
		  >
			{item.qty}
		  </Text>
		  <TouchableOpacity
			title="Add"
			onPress={add}
			style={{ borderWidth: 1, borderColor: "#cccccc" }}
		  >
			<MaterialIcons name="add" size={25} color="#163b37" />
		  </TouchableOpacity>
		</View>
		<View style={styles.qtyy}>
		  <TouchableOpacity onPress={deleteItem}>
			<Ionicons name="md-trash" size={25} color="#ee4d2d" />
		  </TouchableOpacity>
		</View>
	  </View>
	  
	  
	);
  };
  
  export default function Cart() {
	const [cart, setCart] = useState([]);
  
	console.log("check out screen ");
	useEffect(() => {
	  const getData = async () => {
		try {
		  let res = await AsyncStorage.getItem("cart");
		  setCart([].concat(...JSON.parse(res)));
		  console.log("Cart", [].concat(...JSON.parse(res)));
		} catch (err) {
		  console.log(err);
		}
	  };
  
	  getData();
	}, []);
  
	
  
	let totalQuantity = 0;
	let totalPrice = 0;


		for (let index = 0; index < cart.length; index++) {
    
	totalQuantity +=cart[index].qty;
	totalPrice +=cart[index].qty* cart[index].price;



}


	  
  
	itemsSeparator = () => {
	  return <View style={styles.separator} />;
	};
  
	return (
	  <View>
		  <View>
		<SafeAreaView>
		<FlatList
keyExtractor={(item, index) => "item-"+ index}
data={[...new Map(cart.map(item =>
[item['id'], item])).values()]}
renderItem={({ item, index }) => (
<ListItem
item={item}
setCart={(newCart) => setCart(newCart)}
cart={cart}
/>
)}
ItemSeparatorComponent={itemsSeparator}
/>
		  
		</SafeAreaView>
		</View>
		<View style={{backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#163b37', paddingVertical: 10}}>
<View style={{flexDirection: 'row'}}>
    <View style={[styles.centerElement, {width: 80}]}>
        <View style={[styles.centerElement, {width: 32, height: 32 ,marginLeft: 10,}]}>
            <MaterialCommunityIcons name="ticket" size={30} color="#f0ac12" />
        </View>
    </View>
    
</View>
<View style={{flexDirection: 'row'}}>
    <View style={[styles.centerElement, {width: 60}]}>
        <TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} >
            <Ionicons  size={25}  />
        </TouchableOpacity>
    </View>
    
    <View style={{flexDirection: 'column', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center', marginLeft:170}}>
    <View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
            <Text style={{color: '#8f8f8f'}}>Quantité totale: </Text>
            <Text>{totalQuantity}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
            <Text style={{color: '#8f8f8f'}}>Total: </Text>
            <Text>{totalPrice} DH</Text>
        </View>
        
    </View>
</View>

<View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center'}}>
    <TouchableOpacity style={[styles.centerElement, {backgroundColor: '#0faf9a', width: 100, height: 25, borderRadius: 5, alignItems: 'center'}]} onPress={() => console.log('test')}>
        <Text style={{color: '#ffffff', alignItems: 'center'}}>Payer</Text>
    </TouchableOpacity>
</View>
</View>

		
	  </View>
	  
	  
	);
  }
  const styles = StyleSheet.create({
	separator: {
	  height: 1,
	  width: "100%",
	  backgroundColor: "#CCC",
	},
	item: {
	  flex: 1,
	  flexDirection: "row",
	  justifyContent: "space-between",
	  alignItems: "center",
	  padding: 8,
	  borderRadius: 8,
	},
	avatarcon: {
	  backgroundColor: "#D9D9D8",
	  borderRadius: 100,
	  height: 89,
	  width: 89,
	  justifyContent: "center",
	  alignItems: "center",
	},
	avatar: {
	  height: 55,
	  width: 55,
	},
	text: {
	  fontSize: 16,
	  fontWeight: "600",
	  marginLeft: 50,
	},
	texto: {
	  fontSize: 25,
	  fontWeight: "600",
	  marginLeft: 50,
	},
	qty: {
	  borderWidth: 1,
	  flexDirection: "row",
	  marginLeft: -30,
	},
	qtyy: {
	  flexDirection: "row",
	  marginLeft: -40,
	},
	txt: {
	  flexDirection: "column",
	  marginLeft: -80,
	},
  });
  