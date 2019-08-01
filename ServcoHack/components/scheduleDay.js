import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Header } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
export default class ScheduleDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: null,
      month: null,
      year: null,
      monthsOfYear: {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
      },
      monthShow: null
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const selectDay = navigation.getParam("selectDay");
    const selectMonth = navigation.getParam("selectMonth");
    const selectYear = navigation.getParam("selectYear");
    const selectedMonth = this.state.monthsOfYear[selectMonth];
    this.setState({
      day: selectDay,
      month: selectMonth,
      year: selectYear,
      isDateTimePickerVisible: false,
      monthShow: selectedMonth
    });
  }
  showDateTimePicker = () => {
    this.setState({
      isDateTimePickerVisible: true
    });
  };
  hideDateTimePicker = () => {
    this.setState({
      isDateTimePickerVisible: false
    });
  };
  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };
  render() {
    const { day, month, year, monthShow } = this.state;

    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "HOME", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <Text>You have selected</Text>
        <Text>{monthShow}</Text>
        <Text>{day}</Text>
        <Text>{year}</Text>
        <DateTimePicker
          mode="time"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
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
