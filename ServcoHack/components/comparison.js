import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Linking,
  Picker,
  Dimensions
} from "react-native";
import { Header, Button } from "react-native-elements";

export default class Comparison extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: "#333"
  },
  box2: {
    backgroundColor: "green"
  }
});
