import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
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
      }
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const selectDay = navigation.getParam("selectDay");
    const selectMonth = navigation.getParam("selectMonth");
    const selectYear = navigation.getParam("selectYear");
    this.setState({
      day: selectDay,
      month: selectMonth,
      year: selectYear,
      isDateTimePickerVisible: false
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
    const { day, month, year } = this.state;
    const selectedMonth = this.state.monthsOfYear[day];
    return (
      <View style={styles.container}>
        <Text>You have selected</Text>
        <Text>{selectedMonth}</Text>
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
    alignItems: "center",
    justifyContent: "center"
  }
});
