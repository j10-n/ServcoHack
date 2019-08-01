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

  static navigationOptions = {
    title: "Select Servco Vehicle",
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
          source={{ uri: this.state.carImage }}
          style={{ width: 250, height: 200 }}
          resizeMode="contain"
        />
        {/* <Text style={{ fontSize: 40 }}>Carbon Compare</Text>
        <Text>Select A Servco Model</Text> */}

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
            title="View Results"
            buttonStyle={{
              backgroundColor: "#18228c"
            }}
            onPress={() => {
              this.props.navigation.navigate("Comparison");
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
    top: 220
  }
});
