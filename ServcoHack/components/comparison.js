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
        <View style={[styles.box, styles.box2]}>
          <Image
            source={{
              uri:
                "https://www.cstatic-images.com/car-pictures/xl/cac20foc052b0101.png"
            }}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          <Text>Ford Mustang</Text>
        </View>
        <View style={[styles.box]}>
          <Image
            source={{
              uri:
                "https://static.tcimg.net/vehicles/primary/faa5c82227423d86/2019-Toyota-Prius-white-full_color-driver_side_front_quarter.png"
            }}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          <Text>Toyota Prius</Text>
        </View>
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
    height: 300,
    backgroundColor: "#333",
    alignItems: "center"
  },
  box2: {
    backgroundColor: "green",
    alignItems: "center"
  }
});
