import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ScheduleDay from "./components/scheduleDay";
import Schedule from "./components/schedule";
import Home from "./components/Home";
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Schedule_Calendar: Schedule,
    Schedule_Day: ScheduleDay
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);
