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
import { Header } from "react-native-elements";

export default class ChooseCar extends Component {
  state = { car1: "" };
  render() {
    return (
      <View>
        <Text style={{ fontSize: 40 }}>Carbon Compare</Text>
        <Text>Select Your Car</Text>
        <Picker
          selectedValue={this.state.car1}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ car1: itemValue })
          }
        >
          <Picker.Item label=" Honda Civic" value="Honda Civic" />
          <Picker.Item label="Ford Mustang" value="Ford Mustang" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  container3: {
    justifyContent: "space-between"
    // padding: 10,
  },
  fontSize: {
    fontSize: 100
  }
});
