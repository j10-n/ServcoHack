import React, { Component } from "react";
import { Text, View, Image, StyleSheet, FlatList, Linking } from "react-native";
import { Header } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default class CarbonData extends Component {
  state = {
    url:
      "https://static.tcimg.net/vehicles/primary/faa5c82227423d86/2019-Toyota-Prius-white-full_color-driver_side_front_quarter.png"
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{ text: "HOME", style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />
          <Text style={styles.fontSize2}>2019 Toyota Prius</Text>
          <Image
            source={{
              uri: this.state.url
            }}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
          <FlatList
            data={[
              { key: "MPG:48" },
              { key: "Avg Yearly Carbon Output:2.98 metric tons" },
              { key: "Engine Type:Hybrid" },
              { key: "Total Seats:5" },
              { key: "Drive Type: Front Wheel Drive" },
              { key: "Cylinders: Inline 4" },
              { key: "Transmission:Continuously variable-speed automatic" }
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
          <Text
            style={{ color: "blue" }}
            onPress={() =>
              Linking.openURL(
                "http://welcomehomebucket.s3-website-us-west-2.amazonaws.com/"
              )
            }
          >
            Test Drive
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  fontSize: {
    fontSize: 30
  },
  fontSize2: {
    fontSize: 25
  },
  item: {
    alignItems: "center",
    padding: 10,
    fontSize: 18,
    height: 44,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  }
});
