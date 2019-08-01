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

export default class ChooseCarServco extends Component {
  state = {
    car1: "Toyota Prius",
    carImage:
      "https://static.tcimg.net/vehicles/primary/faa5c82227423d86/2019-Toyota-Prius-white-full_color-driver_side_front_quarter.png"
  };

  onValueChange = (itemValue, itemIndex) => {
    this.setState({ car1: itemValue });
    if (
      this.state.carImage ===
      "https://static.tcimg.net/vehicles/primary/faa5c82227423d86/2019-Toyota-Prius-white-full_color-driver_side_front_quarter.png"
    ) {
      this.setState({
        carImage:
          "https://www.lexus.com/cm-img/gallery/2019/UX/Lexus-UX-200-frontpassenger34-gallery-thumbnail-624x437-LEX-UXG-MY19-0008-02.png"
      });
    } else {
      this.setState({
        carImage:
          "https://static.tcimg.net/vehicles/primary/faa5c82227423d86/2019-Toyota-Prius-white-full_color-driver_side_front_quarter.png"
      });
    }
  };

  render() {
    return (
      <View>
        <Image
          source={{ uri: this.state.carImage }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 40 }}>Carbon Compare</Text>
        <Text>Select A Servco Model</Text>
        <Picker
          selectedValue={this.state.car1}
          style={{ height: 50, width: 100 }}
          onValueChange={this.onValueChange}
        >
          <Picker.Item
            label=" Toyoto Prius"
            value="Toyota Prius"
            image="https://static.tcimg.net/vehicles/primary/faa5c82227423d86/2019-Toyota-Prius-white-full_color-driver_side_front_quarter.png"
          />
          <Picker.Item
            label="Lexus UX Hybrid"
            value="Lexus UX Hybrid"
            image="https://www.cstatic-images.com/car-pictures/xl/cac20foc052b0101.png"
          />
        </Picker>
        <Button
          style={styles.button}
          title="See Results"
          onPress={() => {
            this.props.navigation.navigate("Comparison");
          }}
        />
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
  },
  button: {
    position: "absolute",
    bottom: 0
  }
});
