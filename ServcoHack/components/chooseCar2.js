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

export default class ChooseCar extends Component {
  state = { car: "" };
  render() {
    return (
      <View style={styles.container4}>
        <Text>Compare It To</Text>
        <Picker
          selectedValue={this.state.car2}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ car2: itemValue })
          }
        >
          <Picker.Item label=" Toyota Prius" value="Toyota Prius" />
          <Picker.Item label="Toyota Corolla" value="Toyota Corolla" />
        </Picker>
      </View>
    );
  }
}
