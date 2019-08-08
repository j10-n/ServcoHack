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

export default class Comparison extends Component {
  static navigationOptions = {
    title: "Car Comparison",
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
        <View style={styles.row}>
          <View style={[styles.box, styles.box2]}>
            <Image
              source={{
                uri:
                  "https://www.cstatic-images.com/car-pictures/xl/cac20foc052b0101.png"
              }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 28 }}>Ford Mustang</Text>
            <FlatList
              data={[{ key: "MPG: 21" }, { key: "Avg Carbon Output: 5 MT" }]}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </View>
          <View style={[styles.box]}>
            <Image
              source={{
                uri:
                  "https://static.tcimg.net/vehicles/primary/faa5c82227423d86/2019-Toyota-Prius-white-full_color-driver_side_front_quarter.png"
              }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 28 }}>Toyota Prius</Text>
            <FlatList
              data={[{ key: "MPG: 48" }, { key: "Avg Carbon Output: 2.5 MT" }]}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
            <Image
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Checkmark_green.svg/885px-Checkmark_green.svg.png"
              }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.row2}>
          <View style={[styles.box3]}>
            <Text style={{ fontSize: 35 }}>Avg Yearly Gas Savings:</Text>
            <Text style={{ fontSize: 35 }}>$940</Text>
            <Text style={{ fontSize: 30 }}>You Save 23,000 Trees!</Text>
            <Image
              source={{
                uri:
                  "https://poetcore.files.wordpress.com/2013/04/happy-tree.jpg"
              }}
              style={{
                width: 310,
                height: 200
              }}
              resizeMode="contain"
            />
            <Button
              style={styles.button}
              buttonStyle={{
                backgroundColor: "#18228c"
              }}
              title="Virtual Test Drive the Prius"
              onPress={() => {
                Linking.openURL(
                  "http://welcomehomebucket.s3-website-us-west-2.amazonaws.com/"
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  row2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    top: 350,
    // bottom: 0,
    position: "absolute"
    // marginBottom: 10
  },
  box: {
    flex: 1,
    height: 300,
    // backgroundColor: "green",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  box2: {
    // backgroundColor: "#333",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  box3: {
    flex: 1,
    // height: 50,
    // backgroundColor: "green",
    alignItems: "center",
    bottom: 0
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
