import React from "react";
import { Header, Button, Card, Icon, Image, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const Home = props => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "HOME", style: { color: "#fff", size: 20 } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <Text h3>Servco</Text>
      <Card title="2019 Toyota PRIUS XLE HYBRID">
        <Image
          source={{
            uri:
              "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/8373897860e6a795bb1879dc16c761ea.png"
          }}
          style={{ width: 330, height: 230, resizeMode: "contain" }}
        />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          type="outline"
          icon={<Icon name="code" color="#ffffff" />}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="VIEW NOW"
        />
        <Text title="welcomeuser">Welcome Jen!</Text>

        <Button type="solid" title="Schedule" />
        <Button type="solid" style={{ marginTop: 10 }} title="Car Payment" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});

export default Home;
