import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
          <ScrollView style={styles.eventContainer}>
            {Object.keys(this.state.events).map((date) => {
              const events = this.state.events[date];
              return (
                <View key={date} style={styles.dateContainer}>
                  <Text style={styles.dateHeading}>
                    {new Date(date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })}
                  </Text>
                  {events.map((event, index) => (
                    <Text key={index} style={styles.eventText}>
                      {event.name}
                    </Text>
                  ))}
                </View>
              );
            })}
          </ScrollView>
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
  },
  eventContainer: {
    backgroundColor: "white",
    padding: 16,
    margin: 13,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  dateContainer: {
    margin: 10,
  },
  dateHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eventText: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default CampusEvents;
