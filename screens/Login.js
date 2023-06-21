import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const loginWithApi = () => {
    const credentials = {
      username: username,
      password: password,
      methodName: 'Login',
    };

    axios.post('https://globaltraining.iclick.best/Api/Controller/login.php', credentials)
      .then(response => {
        // Handle successful login response
        if (response.data.success) {
          console.log('Success login');
          navigation.navigate("Dash");
          // handleLogin();
        } else {
          console.log('Failed');
        }
      })
      .catch(error => {
        // Handle login error
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerImgContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.bannerImg}
          resizeMode="contain"
          alt="Global training logo"
        />
      </View>
      <Text style={styles.logoCaption}>Matching Trainers To Classes</Text>
      <View style={styles.loginCaption}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.loginsubText}>login to continue using the app</Text>
      </View>
     
        <View style={styles.loginCard}>
          <TextInput
            style={styles.loginInput}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
          <TextInput
            style={[styles.loginInput, styles.mt5]}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
          <View style={styles.textLinks}>
            <TouchableOpacity>
              {/* <Text style={styles.subText}>create account</Text> */}
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.subText}>forget password?</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.secGetStarted}>
            <Button style={styles.logBtn} title="Login"  /> */}
            {/* <Button style={styles.logBtn} title="Login" onPress={loginWithApi} /> */}
           
          {/* </View> */}
          <View style={styles.loginCaption2}>
            <Text style={styles.loginText2} onPress={loginWithApi}>Login</Text>
         
         </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:80,
    height:'100%',
    backgroundColor:'#fff'
  },
  bannerImgContainer: {
    marginTop: 1,
    alignItems: 'center',
  },
  bannerImg: {
    width: 140,
    height: 140,
  },
  loginCaption: {
    marginTop: 10,
    marginBottom: 30,
  },
  loginText: {
    color: '#2962F6',
    fontFamily: 'sans-serif',
    fontWeight: '600',
    fontSize: 30,
    textAlign:'center',
    marginTop:40
  },
  loginText2: {
    justifyContent:'center',
    color: '#FFF',
    padding:8,
    fontSize: 15,
    textAlign:'center',
    borderRadius: 20,
    backgroundColor:'#2962F6',
    width:'100%'
  },
  subText: {
    fontSize: 12,
    color: '#BCB2B2',
  },
  loginsubText:{
    fontSize: 12,
    color: '#BCB2B2',
    textAlign:'center'
  },
 
  loginCard: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  loginInput: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    color: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  mt5: {
    marginTop: 5,
  },
  textLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  secGetStarted: {
    marginTop: 20,
    borderRadius:20,
    textAlign:'center',
    color: '#fff',
    backgroundColor: '#0060c0',
    width: '50%',
    
  },
  
  logoCaption:{
    textAlign:'center',
  },
  loginCaption2:{
    marginTop: 20,
    width:'100%',
    textAlign:'center',
    justifyContent:'center'
  },
  
});

export default LoginScreen;
