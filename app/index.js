import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

class ClickableCard extends React.Component {
  handleCardClick = () => {
    // Handle the click event to open an external website
    Linking.openURL(this.props.externalLink);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleCardClick} style={styles.card}>
        <Text style={styles.cardText}>{this.props.cardText}</Text>
      </TouchableOpacity>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ClickableCard
          cardText="80 Jorissen Student  (Campus Africa)"
          externalLink="https://www.campusafrica.co.za/"
        />
        <ClickableCard
          cardText="AFHCO HOLDINGS (PTY)LTD"
          externalLink="https://afhco.co.za/to-%20let/student/"
        />
        <ClickableCard
          cardText="BU PROPERTY CC"
          externalLink="http://www.staydunwell.co.za/"
        />
        <ClickableCard
          cardText="DUNWELL
          PROPERTIES CC"
          externalLink="http://www.staydunwell.co.za/"
        />

        <ClickableCard
          cardText="BRAAMLOFTS STUDENT
          
          (CAMPUS AFRICA)"
          externalLink="https://www.campusafrica.co.za/"
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
    backgroundColor: "#ffb253",
  },
  card: {
    width: 300,
    height: 100,
    backgroundColor: "white",
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
