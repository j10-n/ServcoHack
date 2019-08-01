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
import { Header, Button, ThemeConsumer } from "react-native-elements";

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

  static navigationOptions = {
    title: "Select Your Car",
    headerStyle: {
      backgroundColor: "#18228c"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 200 }}
          source={{ uri: this.state.carImage }}
          resizeMode="contain"
        />
        {/* <Text style={styles.container}>Carbon Compare</Text> */}
        {/* <Text>Select Your Car</Text> */}

        <View
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Picker
            selectedValue={this.state.car1}
            style={{ height: 50, width: 200 }}
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
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            style={styles.button}
            buttonStyle={{
              backgroundColor: "#18228c"
            }}
            title="Select Next Car"
            onPress={() => {
              this.props.navigation.navigate("ChooseCar2");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    alignItems: "center",
    justifyContent: "center"
  },
  container3: {
    justifyContent: "space-between"
    // padding: 10,
  },
  fontSize: {
    fontSize: 100
  },
  button: {
    top: 220
  },
  picker: {}
});
