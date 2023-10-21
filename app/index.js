import React, { useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const events = [
  { title: "Wits Freshers", date: "2023-10-01" },
  { title: "Event 2", date: "2023-10-01" },
  { title: "Event 3", date: "2023-10-02" },
  { title: "Event 4", date: "2023-10-03" },
];

const CampusEvents = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const getEventsForDay = (date) => {
    return events.filter((event) => event.date === date);
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View>
      <Calendar
        style={{
          borderRadius: 3,
          borderColor: "gray",
          height: 350,
        }}
        onDayPress={onDayPress}
      />
      <Text>Events for {selectedDate}:</Text>
      {getEventsForDay(selectedDate).map((event, index) => (
        <Text key={index}>{event.title}</Text>
      ))}
    </View>
  );
};

export default CampusEvents;
