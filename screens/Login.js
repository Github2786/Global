'use strict';
import React, { Component,navigation } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import axios from 'axios';

// import { createStackNavigator, createAppContainer } from "react-navigation";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      emailError:''
    };
    const { navigation } = this.props;
    
  }

  login = () => {
    const { userEmail, userPassword } = this.state;
    // this.props.navigation.navigate('DashboardScreen');
    this.props.navigation.navigate('Feed');
    // const navigateToDashboard = () => {
    //   navigation.navigate('DashboardScreen');
    // };
    const credentials = {
      username: userEmail,
      password: userPassword,
      methodName: 'Login',
    };
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log("u " + userEmail);
   if(!userEmail)
   {
     this.setState({ emailError: 'Please enter Email address' });
     console.log('error')
   }else{
    axios.post('https://globaltraining.iclick.best/Api/Controller/login.php', credentials)
      .then(response => {
        // Handle successful login response
        if (response.data.success) {
          console.log('Success login');
          navigation.navigate('DashboardScreen');
          //navigateToDashboard();
          // navigation.navigate("DashboardScreen");
          // this.props.navigation.navigate('DashboardScreen');
          // navigation.navigate('DashboardScreen');
          // handleLogin();
        } else {
          console.log('Failed');
        }
      })
      .catch(error => {
        // Handle login error
        console.error(error);
      });
    }
    Keyboard.dismiss();
  };

  render() {
    const { emailError } = this.state;
    const { navigate } = this.props.navigation;
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
            onChangeText={(userEmail) => this.setState({ userEmail })}
            placeholder="Username"
          />
          <TextInput
            style={[styles.loginInput, styles.mt5]}
            onChangeText={(userPassword) => this.setState({ userPassword })}
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

          <View style={styles.loginCaption2}>
            <TouchableOpacity onPress={this.login} style={styles.loginButton}>
              <Text style={styles.loginText2}>Login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigate('Dashboard')} style={styles.loginCaption2}>
               <Text style={styles.btnText}>Login</Text>
           </TouchableOpacity> */}

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    height: '100%',
    backgroundColor: '#fff',
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
    textAlign: 'center',
    marginTop: 40,
  },
  loginText2: {
    justifyContent: 'center',
    color: '#FFF',
    padding: 8,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: '#2962F6',
    width: '100%',
  },
  subText: {
    fontSize: 12,
    color: '#BCB2B2',
  },
  loginsubText: {
    fontSize: 12,
    color: '#BCB2B2',
    textAlign: 'center',
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
    borderRadius: 20,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#0060c0',
    width: '50%',
  },
  logoCaption: {
    textAlign: 'center',
  },
  loginCaption2: {
    marginTop: 20,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
