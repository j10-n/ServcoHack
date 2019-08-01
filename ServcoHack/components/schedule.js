import React, { Component } from "react";
import { StyleSheet, Text, View, Picker, Button } from "react-native";
import { Header } from "react-native-elements";
import { Calendar } from "react-native-calendars";
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      selectMonth: null,
      selectday: null,
      selectyear: null,
      location: "Servco Auto Waipahu"
    };
  }

  updateLocation = select => {
    this.setState({ location: select });
  };
  render() {
    const { location } = this.state;
    console.log(location);
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff"
          }}
          centerComponent={{
            text: "HOME",
            style: { color: "#fff" }
          }}
          rightComponent={{
            icon: "home",
            color: "#fff"
          }}
        />
        <Text>Select Your Maintenance Day</Text>
        <Calendar
          current={"2019-08-01"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2019-08-10"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2019-10-30"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            this.props.navigation.navigate("Schedule_Day", {
              selectDay: day.day,
              selectMonth: day.month,
              selectYear: day.year,
              selectLocation: location
            });
          }}
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={this.state.location}
            onValueChange={this.updateLocation}
            style={styles.picker}
          >
            <Picker.Item
              label="Servco Auto Waipahu"
              value="Servco Auto Waipahu"
            />
            <Picker.Item
              label="Servco Toyota Honolulu"
              value="Servco Toyota Honolulu"
            />
            <Picker.Item
              label="Servco Toyota Windward"
              value="Servco Toyota Windward"
            />
          </Picker>
        </View>
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
  },
  picker: {
    height: 30,
    width: 300
  }
});
