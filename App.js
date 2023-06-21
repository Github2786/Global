import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createStackNavigator();

import Header from './screens/Header';
import LoginScreen from './screens/Login';
import DashboardScreen from './screens/Dashboard';


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',padding:0 }}>
      <DashboardScreen/>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',padding:0  }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',padding:0  }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',padding:0  }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#4378ef',
      }}
    >
      <Tab.Screen
      
        name="Feed"
        component={Feed}
        options={{
          header: () => <Header />,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
      
        name="Notifications"
        component={Notifications}
        options={{
          header: () => <Header />,
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          header: () => <Header />,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => <Header />,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
       
    </Tab.Navigator>
  );
}

export default function App() {
  const isLoggedIn = false; 
  return (
    <NavigationContainer>
    {isLoggedIn ? (
      <Stack.Navigator>
      <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }} 
          />
      </Stack.Navigator>
        ) : (
      <MyTabs />
      )}
    </NavigationContainer>
  );
}
