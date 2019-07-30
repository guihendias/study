import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./components/Home/HomeScreen";
import SearchTabNavigator from "./components/Search/SearchTabNavigator";

const App = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    SearchTabNavigator: { screen: SearchTabNavigator }
  },
  {
    initialRouteName: "SearchTabNavigator"
  }
);

export default createAppContainer(App);
