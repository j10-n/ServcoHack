import React, { Component } from "react";
import { Header, Button, Card, Icon, Image, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Home",
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
        <Text style={styles.text} h3>
          SERVCO OHANA
        </Text>
        <Text title="welcomeuser">Welcome Jen!</Text>

        <Card title="2019 Toyota PRIUS XLE HYBRID">
          <Image
            source={{
              uri:
                "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/8373897860e6a795bb1879dc16c761ea.png"
            }}
            style={{ width: 330, height: 230, resizeMode: "contain" }}
          />
          <Text style={{ marginBottom: 10 }}>
            Click on your car to view more details...
          </Text>
          <Text>Warranty Expiration Date:</Text>
          <Text>Maintenance Due Date:</Text>

          <Button
            style={styles.button}
            type="solid"
            buttonStyle={{
              backgroundColor: "#18228c"
            }}
            title="Schedule"
            onPress={() => {
              this.props.navigation.navigate("Schedule_Calendar");
            }}
          />
          <Button
            type="solid"
            disabled={true}
            style={{ marginTop: 10 }}
            title="Car Payment"
          />
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
  text: {
    margin: 10
  },
  button: {
    marginTop: 40
  },
  header: {
    backgroundColor: "red"
  }
});
