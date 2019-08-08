import React, { Component } from "react";
import { Text, View, Image, StyleSheet, FlatList, Linking } from "react-native";
import { Header, Button, Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default class CarbonData extends Component {
  state = {
    url:
      "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/8373897860e6a795bb1879dc16c761ea.png"
  };

  static navigationOptions = {
    title: "Your Car Details",
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
      <Card title="2019 Toyota Prius" style={styles.container}>
        {/* <ScrollView> */}
        <Image
          source={{
            uri: this.state.url
          }}
          style={{
            width: 310,
            height: 200
          }}
          resizeMode="contain"
        />
        <FlatList
          data={[
            { key: "MPG: 48" },
            { key: "Avg Yearly Carbon Output: 2.5 metric tons" },
            { key: "Engine Type: Hybrid" },
            { key: "Total Seats: 5" },
            { key: "Drive Type: Front Wheel Drive" },
            { key: "Cylinders: Inline 4" },
            { key: "Transmission: Continuously variable-speed automatic" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />

        <Button
          style={styles.button}
          buttonStyle={{
            backgroundColor: "#18228c"
          }}
          title="Test Drive"
          onPress={() => {
            Linking.openURL(
              "http://welcomehomebucket.s3-website-us-west-2.amazonaws.com/"
            );
          }}
        />
        <Button
          style={styles.button}
          buttonStyle={{
            backgroundColor: "#18228c"
          }}
          disabled={true}
          title="Maintenance History"
        />

        {/* </ScrollView> */}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  fontSize: {
    fontSize: 30
  },
  fontSize2: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    alignItems: "center",
    fontSize: 15,
    paddingBottom: 5
  },
  button: {
    marginTop: 20
  }
});
