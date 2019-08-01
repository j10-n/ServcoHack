import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CarbonData from "./components/carbonData";
import Jah from "./components/test";
import ChooseCar from "./components/chooseCar";
import ChooseCarServco from "./components/chooseCar2";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChooseCar /> */}
      <ChooseCarServco />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
