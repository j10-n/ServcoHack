import React, { Component } from "react";
import { Header, Button, Card, Icon, Image, Text } from "react-native-elements";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "HOME", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <Text h3>Servco Ohana</Text>
        <Text title="welcomeuser">Welcome Jen!</Text>

        <Card title="2019 Toyota PRIUS XLE HYBRID">
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate("CarbonData");
            }}
          >
            <Image
              source={{
                uri:
                  "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/8373897860e6a795bb1879dc16c761ea.png"
              }}
              style={{ width: 330, height: 230, resizeMode: "contain" }}
            />
          </TouchableHighlight>
          <Text style={{ marginBottom: 10 }}>
            Click on your car to view more details...
          </Text>
          <Text>Warranty Expiration Date:</Text>
          <Text>Maintenance Due Date:</Text>

          <Button
            type="solid"
            style={{ marginTop: 40 }}
            title="Schedule"
            onPress={() => {
              this.props.navigation.navigate("Schedule_Calendar");
            }}
          />
          <Button type="solid" style={{ marginTop: 10 }} title="Car Payment" />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#3CB371"
  }
});
