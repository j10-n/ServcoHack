import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ScheduleDay from "./components/scheduleDay";
import Schedule from "./components/schedule";
import Home from "./components/Home";
import ChooseCar from "./components/chooseCar";
import ChooseCarServco from "./components/chooseCar2";
import CarbonData from "./components/carbonData";
import Comparison from "./components/comparison";
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "HOME", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
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
    Home: Home,
    Schedule_Calendar: Schedule,
    Schedule_Day: ScheduleDay,
    ChooseCar: ChooseCar,
    ChooseCar2: ChooseCarServco,
    CarbonData: CarbonData,
    Comparison: Comparison
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);
