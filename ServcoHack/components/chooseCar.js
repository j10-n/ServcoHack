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

export default class ChooseCar extends Component {
  state = {
    car1: "Honda Civic",
    carImage:
      "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Honda-Civic-Lunar-Silver-Metallic.png"
  };

  onValueChange = (itemValue, itemIndex) => {
    this.setState({ car1: itemValue });
    if (
      this.state.carImage ===
      "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Honda-Civic-Lunar-Silver-Metallic.png"
    ) {
      this.setState({
        carImage:
          "https://www.cstatic-images.com/car-pictures/xl/cac20foc052b0101.png"
      });
    } else {
      this.setState({
        carImage:
          "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Honda-Civic-Lunar-Silver-Metallic.png"
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
        <Text>Select Your Car</Text>
        <Picker
          selectedValue={this.state.car1}
          style={{ height: 50, width: 100 }}
          onValueChange={this.onValueChange}
        >
          <Picker.Item
            label=" Honda Civic"
            value="Honda Civic"
            image="https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Honda-Civic-Lunar-Silver-Metallic.png"
          />
          <Picker.Item
            label="Ford Mustang"
            value="Ford Mustang"
            image="https://www.cstatic-images.com/car-pictures/xl/cac20foc052b0101.png"
          />
        </Picker>
        <Button style={styles.button} title="Next" />
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
