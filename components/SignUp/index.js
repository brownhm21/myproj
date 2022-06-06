import React, { Component } from 'react';
import { View, TextInput, Button, TouchableOpacity, Pressable, Text, ImageBackground, Image, StatusBar } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email : '',
      password : '',
      confirmPw : '',
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true
    };
  } 
  
  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;
    var ConfirmPw = this.state.confirmPw;
    var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
  
    if ((Email.length==0) || (Password.length==0) || (ConfirmPw.length==0)){
      alert("champ obligatoire est manquant !!!");
    }else if (!(checkEmail).test(Email)){
      alert("email invalide!!!");
    }
    // Password validationsnpm
    else if (Password.length<8){
      alert("Minimum 08 characters !!!");
    }else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(Password))){
      alert("Utiliser un 01 special character!!!");
    }else if (((/[ ]/).test(Password))){
      alert("Don't include space in password!!!");
    }else if(Password !== ConfirmPw){
      alert("Password doesnot match!!!");
    }
    
    
    else{
      var InsertAPIURL = "http://192.168.1.144/api/SignIn.php";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        Email: Email,
        Password: Password
      };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
      this.props.navigation.navigate("SignInScreen"); //Navigate to next screen if authentications are valid
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    })
    }
  }
  
  updateSecureTextEntry(){
    this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry
    });
  }

  updateConfirmSecureTextEntry(){
    this.setState({
        ...this.state,
        confirmSecureTextEntry: !this.state.confirmSecureTextEntry
    });
}

  render() {
    return (
      <View style={styles.viewStyle}>
        <ImageBackground source={require('../../assets/pic.jpg')} style={styles.background}>

        <View style={styles.container}>
        <Image source = {require("../../assets/lo-2.png")} style={styles.stretch}/>
        <Text style={styles.texto}>Smart Market</Text>
     <Text style={styles.textoh}>{'\n'}Create And Manage Your Market Easly</Text>
      </View>




      <View style={styles.content}>
        <View style={styles.action}>
        <TextInput
                placeholder="Entrer votre Email"
                placeholderTextColor="#ffffff"
                style={styles.textInput}
                onChangeText={email=>this.setState({email})}
                />
                
                </View>
                <View style={styles.action}>

            <TextInput
                placeholder="Entrer votre Password"
                placeholderTextColor="#ffffff"
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={styles.textInput}
                onChangeText={password=>this.setState({password})}
                />
                <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}    
                  >
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
                <View style={styles.action}>
            <TextInput
                placeholder="Confirm votre Mot de Pass"
                placeholderTextColor="#ffffff"
                style={styles.textInput}
                onChangeText={confirmPw=>this.setState({confirmPw})}
                secureTextEntry={this.state.confirmSecureTextEntry ? true : false}
                /> 
                <TouchableOpacity
                  onPress={this.updateConfirmSecureTextEntry.bind(this)}    
                  >
                  {this.state.confirmSecureTextEntry ?
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


                <View style={styles.loginButtonSection}>
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      this.InsertRecord()
                    }}
                    >
                      <Text 
                        style={styles.text}
                      >S'inscrire</Text>
                    </Pressable>
                  </View>
                  </View>
                  </ImageBackground>     
      </View>
    );
  }
}
