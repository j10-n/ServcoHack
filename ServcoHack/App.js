import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import Jah from "./components/test";
import Home from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
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
