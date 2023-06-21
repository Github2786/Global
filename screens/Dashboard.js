import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import { Avatar, Card } from 'react-native-elements';

const DashboardScreen = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [user, setUser] = useState({
    loggeduser: 'Sam',
    userPhoto: 'https://cdn.vuetifyjs.com/images/john.jpg',
  });

  const [listData, setListData] = useState([]);

  useEffect(() => {
    // Simulating the retrieval of user details from local storage
    loadUserDetails();
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://globaltraining.iclick.best/Api/Controller/GetCourse.php')
      .then(response => response.json())
      .then(data => {
        setListData(data.data);
      })
      .catch(error => {
        console.log("res " + error);
      });
  };

  const loadUserDetails = async () => {
    try {
      const userDetails = await AsyncStorage.getItem('loggedUser');
      if (userDetails) {
        const parsedUserDetails = JSON.parse(userDetails);
        setLoggedUser(parsedUserDetails);
      }
    } catch (error) {
      // console.error('Error loading user details:', error);
    }
  };

  return (
    <View style={styles.container}>
       <View style={styles.featuredCourseContainer}>
        <Text style={styles.featuredCourseHeader}>Upcoming Course</Text>
        
        {listData.length > 0 && (
          <View>
            <Card containerStyle={styles.cardContainer}>
              <Card.Image
                source={{ uri: 'https://globaltraining.iclick.best/Api/Controller/uploads/' + listData[0].Course_image }}
                style={styles.cardImage}
                resizeMode="cover"
              />
            </Card>
            <View style={styles.courseSection}>
              <Text style={styles.cardTitle}>{listData[0].Title}</Text>
            </View>
          </View>
        )}
      </View>

      {/* Recent Course Loop */}
      <View style={styles.recentCourseContainer}>
        <Text style={styles.recentCourseHeader}>Other Courses</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent} overScrollMode="always">
          {listData.slice(1).map((course, index) => (
            <View style={styles.courseLoopContainer} key={index}>
              <View style={styles.profileIcon}>
                <Avatar source={{ uri: 'https://globaltraining.iclick.best/Api/Controller/uploads/' + course.Course_image }} rounded />
              </View>
              <View style={[styles.userInfo, { flex: 1 }]}>
                <Text style={styles.courseTitle}>{course.Title}</Text>
                <Text style={styles.courseCaption}>{course.Caption}</Text>
              </View>
              <View style={styles.bellIconContainer}>
                <Avatar
                  rounded
                  size="small"
                  overlayContainerStyle={styles.bellIcon}
                  icon={{ name: 'angle-right', type: 'font-awesome', color: 'black' }}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 16,
    backgroundColor: '#fff',
  },
  featuredCourseContainer: {
    marginBottom: 10,
    borderRadius: 20,
  },
  featuredCourseHeader: {
    fontSize: 13,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    borderRadius: 10,
    padding: 0,
    marginBottom: 10,
    borderRadius: 20,
  },
  cardImage: {
    aspectRatio: 16 / 9,
    borderRadius: 20,
    padding: 0,
  },
  courseSection: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardTitle: {
    fontSize: 13,
  },
  recentCourseContainer: {
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1, // Added flex property
  },
  recentCourseHeader: {
    paddingLeft: 2,
    fontSize: 13,
    fontWeight: 'bold',
  },
  courseLoopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: '#cac7c74f',
    borderRadius: 10,
    padding: 6,
  },
  profileIcon: {
    marginRight: -4,
  },
  userInfo: {
    marginLeft: 16,
  },
  courseTitle: {
    fontSize: 10,
  },
  courseCaption: {
    fontSize: 9,
  },
  bellIconContainer: {
    marginLeft: 'auto',
  },
  bellIcon: {
    backgroundColor: 'transparent',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default DashboardScreen;
