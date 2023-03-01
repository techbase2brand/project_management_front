// import { StatusBar } from 'expo-status-bar';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import Logo from "./components/Logo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
      {/* <Stack.Screen name="Logo"  component={Logo} options={{ headerShown: false }} /> */}

        {/* <Stack.Screen name="Login"  component={LoginPage} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Dashboard"  component={Dashboard} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:'100%',
    // height:'100%',
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
