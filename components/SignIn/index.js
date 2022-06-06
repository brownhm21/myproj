import React, { Component } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, Button, ImageBackground, Image, StatusBar} from 'react-native';

import styles from './style';
import Feather from 'react-native-vector-icons/Feather';



export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

 

  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email.length==0) || (Password.length==0)){
      alert("champ obligatoire est manquant !!!");
    }else{
      var APIURL = "http://192.168.1.144/api/login.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
            
      var Data ={
        Email: Email,
        Password: Password
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        alert(Response[0].Message)
        if (Response[0].Message == "Success") {
          console.log("true")
          this.props.navigation.navigate("Home");
        }
        console.log(Data);
      })
      .catch((error)=>{
        console.error("ERREUR" + error);
      })
    }
    
    
  }

  updateSecureTextEntry(){
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <ImageBackground source={require('../../assets/Login.jpg')} style={styles.background}>
       
       
        <View style={styles.container}>
        <Image source = {require("../../assets/lo-2.png")} style={styles.stretch}/>
        
        <Text style={styles.texto}>{'\n'}Smart Market</Text>
     <Text style={styles.textoh}>{'\n'}Create And Manage Your Market Easly</Text>
      </View>

       
      <View style={styles.content}>
          <View style={styles.action}>
            <TextInput
              placeholder="Entrer votre email"
              placeholderTextColor="#ffffff"
              style={styles.textInput}
              onChangeText={email=>this.setState({email})}
              />
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Entrer votre mot de pass"
              placeholderTextColor="#ffffff"
              style={styles.textInput}
              secureTextEntry={this.state.secureTextEntry ? true : false}
              onChangeText={password=>this.setState({password})}
              />
                <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}>
                  {this.state.secureTextEntry ?
                  <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                  />
                :  
                  <Feather
                  name="eye"
                  color="black"
                  size={20}
                  />
                }
                </TouchableOpacity>  
          </View>


                {/* Button */}

                <View style={styles.loginButtonSection}>    
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      this.InsertRecord()
                    }}
                    >
                      <Text style={styles.text}>S'identifier</Text>
                  </Pressable>
                </View>

                <View style={styles.loginButtonSection}>
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      this.props.navigation.navigate("SignUp");
                    }}
                    >
                      <Text 
                        style={styles.text}
                      >Créer un compte</Text>
                    </Pressable>
                  </View>
                  </View>
                  </ImageBackground>
      </View>
    );
  }
}