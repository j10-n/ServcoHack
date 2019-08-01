import React, { Component } from "react";
import { Text, View, Image, StyleSheet, FlatList, Linking } from "react-native";

export default class CarbonData extends Component {
  state = {
    url:
      "http://st.motortrend.com/uploads/sites/10/2015/11/2009-toyota-prius-touring-hatchback-angular-front.png"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fontSize2}>2009 Toyota Prius</Text>
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
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
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
