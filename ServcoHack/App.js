import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import Jah from "./components/test";
import Home from "./components/Home";
<link
  rel="stylesheet"
  type="text/css"
  href="https://cloud.typography.com/7643474/6034812/css/fonts.css"
/>;

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
