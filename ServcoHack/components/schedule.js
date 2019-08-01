import React, { Component } from "react";
import { StyleSheet, Text, View, Picker, Button } from "react-native";
import { Header, Card } from "react-native-elements";
import { Calendar } from "react-native-calendars";
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      selectMonth: null,
      selectday: null,
      selectyear: null
    };
  }

  static navigationOptions = {
    title: "Schedule Maintenance",
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
        <Text style={styles.text} />

        <Card style={styles.container}>
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
                selectYear: day.year
              });
            }}
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
    alignItems: "center",
    width: "100%"
  },
  button: {
    backgroundColor: "#3CB371"
  },
  text: {
    marginTop: 10
  }
});
