import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Header, Button, Card } from "react-native-elements";
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
      monthShow: null,
      time: null
    };
  }
  static navigationOptions = {
    title: "Schedule Time",
    headerStyle: {
      backgroundColor: "#18228c"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    const selectDay = " " + navigation.getParam("selectDay") + ", ";
    const selectMonth = navigation.getParam("selectMonth");
    const selectYear = navigation.getParam("selectYear");
    const selectedMonth = " " + this.state.monthsOfYear[selectMonth];
    this.setState({
      day: selectDay,
      month: selectMonth,
      year: selectYear,
      isDateTimePickerVisible: false,
      monthShow: selectedMonth,
      time: null
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
  updateTime = select => {
    this.setState({ time: select });
  };
  render() {
    const { day, month, year, monthShow } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {/* <Button title="Pick Your Time" onPress={this.showDateTimePicker} /> */}
          {/* <DateTimePicker
          mode="time"
          minuteInterval="30"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        /> */}
          <View style={styles.appointment}>
            <Text>Select your appointment time for:</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>{monthShow}</Text>
            <Text style={styles.text}>{day}</Text>
            <Text style={styles.text}>{year}</Text>
          </View>

          <View
            style={{
              position: "absolute",
              top: 28,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Picker
              selectedValue={this.state.time}
              onValueChange={this.updateTime}
              style={styles.picker}
            >
              <Picker.Item label="7:00 AM" value="7:00 AM" />
              <Picker.Item label="8:00 AM" value="8:00 AM" />
              <Picker.Item label="9:00 AM" value="9:00 AM" />
              <Picker.Item label="10:00 AM" value="10:00 AM" />
              <Picker.Item label="11:00 AM" value="11:00 AM" />
              <Picker.Item label="12:00 PM" value="12:00 PM" />
              <Picker.Item label="1:00 PM" value="1:00 PM" />
              <Picker.Item label="2:00 PM" value="2:00 PM" />
              <Picker.Item label="3:00 PM" value="3:00 PM" />
              <Picker.Item label="4:00 PM" value="4:00 PM" />
              <Picker.Item label="5:00 PM" value="5:00 PM" />
            </Picker>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            style={styles.button}
            buttonStyle={{
              backgroundColor: "#18228c"
            }}
            title="Set My Appointment"
            onPress={() => {
              this.props.navigation.navigate("FinalScreen");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 10
  },
  picker: {
    height: 10,
    width: 200,
    padding: 10
  },
  pickerContainer: {
    position: "absolute",
    top: 75,
    left: 90,
    alignItems: "center"
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20
  },
  button: {
    backgroundColor: "#18228c",
    top: 250,
    left: 0
  },
  appointment: {
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
