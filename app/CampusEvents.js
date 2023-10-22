import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

class CampusEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null,
      events: {
        "2023-10-01": [{ name: "WITS Freshers" }],
        "2023-10-20": [{ name: "De-Stress Zone" }],
        "2023-10-15": [{ name: "SANB (Blood Drive)" }],
        "2023-10-16": [{ name: "Checkers giveaway" }],
      },
    };
  }

  handleDayPress = (date) => {
    const selectedEvents = this.state.events[date.dateString];
    this.setState({ selectedDate: date, selectedEvents });
  };

  render() {
    const markedDates = {};
    Object.keys(this.state.events).forEach((date) => {
      markedDates[date] = { marked: true, dotColor: "orange" };
    });

    return (
      <View style={styles.container}>
        <Calendar
          onDayPress={this.handleDayPress}
          markedDates={markedDates}
          theme={{
            calendarBackground: "white",
            selectedDayBackgroundColor: "orange",
          }}
          style={{
            borderRadius: 3,
            height: 380,
            margin: 3,
          }}
        />
        {this.state.selectedDate && (
          <View style={styles.eventContainer}>
            <Text style={styles.selectedDate}>
              {this.state.selectedDate.dateString}
            </Text>
            <Text style={styles.eventText}>Event:</Text>
            {this.state.selectedEvents &&
              this.state.selectedEvents.map((event, index) => (
                <Text key={index} style={styles.eventText}>
                  {event.name}
                </Text>
              ))}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#75a9f9",
    borderRadius: 8,
    height: 200,
  },
  eventContainer: {
    backgroundColor: "white",
    padding: 16,
    margin: 13,
    borderRadius: 8,
  },
  selectedDate: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eventText: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default CampusEvents;
