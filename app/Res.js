import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class ClickableCard extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.card}>
        <Text style={styles.cardText}>{this.props.cardText}</Text>
      </TouchableOpacity>
    );
  }
}

class App extends React.Component {
  handleCardClick = (cardText) => {
    // Handle the click event for each card here
    console.log(`Clicked on card with text: ${cardText}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <ClickableCard
          cardText="Card 1"
          onPress={() => this.handleCardClick("Card 1")}
        />
        <ClickableCard
          cardText="Card 2"
          onPress={() => this.handleCardClick("Card 2")}
        />
        <ClickableCard
          cardText="Card 3"
          onPress={() => this.handleCardClick("Card 3")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  card: {
    width: 200,
    height: 100,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
