import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as firebase from 'firebase'
import { StyleSheet, Text, View } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyDf5Z-rhpEQbgthNqdP9MR1VjpB4p0GLEI",
  authDomain: "instagram-dev-a0f23.firebaseapp.com",
  projectId: "instagram-dev-a0f23",
  storageBucket: "instagram-dev-a0f23.appspot.com",
  messagingSenderId: "685052781461",
  appId: "1:685052781461:web:2d65cb7520ff24ea7e8c9c",
  measurementId: "G-TFKRB0763H"
};

if (firebase.apps.length ===0){
  firebase.initializeApp(firebaseConfig)
}
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import LandingScreen from './components/auth/Landing'

const Stack = createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name ="Landing" component={LandingScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
