import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Card, Button } from 'react-native-elements';
import LoginScreen from './screens/Login';
import DashboardScreen from './screens/Dashboard';
import Header from './screens/Header';
import { View } from 'react-native';

import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
firebase.initializeApp();
const Stack = createStackNavigator();


const App = () => {
  const isLoggedIn = true; // Set this value based on the user's login state
  // useEffect(() => {
  //   // Request permission to receive push notifications (optional)
  //   messaging().requestPermission();

  //   // Get the FCM token
  //   messaging()
  //     .getToken()
  //     .then(token => {
  //       console.log('FCM Token:', token);
  //     });

  //   // Handle FCM token refresh
  //   const unsubscribe = messaging().onTokenRefresh(token => {
  //     console.log('FCM Token (refreshed):', token);
  //   });

  //   // Clean up the event listeners when the component unmounts
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={{ header: () => <Header />}} // Hide the header for the Dashboard screen
          />
        ) : (
        
          <>
            
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{   }} // Hide the header for the Login screen
            />
          </>
          
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
