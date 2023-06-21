import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Avatar, Card, Button } from 'react-native-elements';
const Header = () => {
  const user = {
    loggeduser: 'Sam',
    userPhoto: 'https://cdn.vuetifyjs.com/images/john.jpg',
  };

  useEffect(() => {
    // Perform any necessary logic on component mount
    // if (localStorage.getItem('loggedUser') !== null) {
    //   const userDetails = JSON.parse(localStorage.getItem('loggedUser'));
    //   user.loggeduser = userDetails.displayName;
    //   user.userPhoto = userDetails.photoURL;
    // }
    loadUserDetails();
  }, []);
  const loadUserDetails = async () => {
    try {
      const userDetails = await AsyncStorage.getItem('loggedUser');
      if (userDetails) {
        const parsedUserDetails = JSON.parse(userDetails);
        setLoggedUser(parsedUserDetails);
      }
    } catch (error) {
      console.error('Error loading user details:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.row}>
          <View style={styles.profileIcon}>
            {/* <Image source='https://thumbs.dreamstime.com/b/training-future-employees-office-work-report-minimalist-style-flat-isometric-raster-training-future-employees-office-work-161796855.jpg'
               style={styles.userAvatar} /> */}
              <Avatar
              rounded
              size="small"
              containerStyle={styles.bellCircle}
              overlayContainerStyle={styles.bellIcon}
              icon={{ name: 'angle-right', type: 'font-awesome', color: 'black' }}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Hi, Ashik</Text>
            <Text style={styles.welcomeMessage}>Welcome to global training</Text>
          </View>
          
          <View style={styles.bellIconContainer}>
            <Avatar
              rounded
              size="small"
              containerStyle={styles.bellCircle}
              overlayContainerStyle={styles.bellIcon}
              icon={{ name: 'angle-right', type: 'font-awesome', color: 'black' }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop:40,
    backgroundColor:'#fff'
    // paddingTop:80,
    // height:'100%',
  },
  appBar: {
    elevation: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  profileIcon: {
    paddingRight: 0,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 16,
  },
  userName: {
    fontFamily: 'sans-serif',
    fontWeight: '400',
    fontSize: 13,
  },
  welcomeMessage: {
    color: 'rgba(0, 0, 0, 0.41)',
    fontSize: 12,
  },
  bellIconContainer: {
    marginLeft: 'auto',
  },
  bellCircle: {
    backgroundColor: '#e3e5e4',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
