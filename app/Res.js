import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

class Card extends React.Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.cardImage}>
            <Image source={this.props.imageSource} style={styles.image} />
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.propertyName}>{this.props.propertyName}</Text>
            <Text style={styles.address}>{this.props.address}</Text>
            <Text style={styles.contactDetails}>
              {this.props.contactDetails}
            </Text>
            <Text
              style={styles.capacity}
            >{`Capacity: ${this.props.capacity}`}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // Handle button press to open an external website
                Linking.openURL(this.props.externalLink, "_blank");
              }}
            >
              <Text style={styles.buttonText}>Visit Website</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    const cardsData = [
      {
        propertyName: "80 JORISSEN  (Campus Africa)",
        address: "80 Jorissen Street, Braamfontein 450m away from campus",
        contactDetails: "Alex  [0719991246] alex@conurban.co.za",
        capacity: 175,
        imageSource: require("./images/80Jorissen.jpg"),
        externalLink: "https://www.campusafrica.co.za/",
      },

      {
        propertyName: "AFHCO HOLDINGS (PTY)LTD",
        address: "56 Davies Street, Doornfontein, 3.3km away from campus",
        contactDetails:
          "Tarrin Naidoo [0766657511] [0112242482] tarrin@afhco.co.za",
        capacity: 984,
        imageSource: require("./images/afhco.jpg"),
        externalLink: "https://afhco.co.za/to-%20let/student/",
      },

      {
        propertyName: "BRAAMLOFTS (CAMPUS AFRICA)",
        address: "26 Biccard Street, Braamfontein 800m away from campus",
        contactDetails: "Alex [0719991246] alex@conurban.co.za",
        capacity: 142,
        imageSource: require("./images/Braamloftsdouble.jpg"),
        externalLink: "https://www.campusafrica.co.za/",
      },

      {
        propertyName: "KINGSWAY PLACE - STUDENT ACCOMODATION",
        address: "59 Richmond Avenue, Auckland Park  3.4km away from campus",
        contactDetails:
          "Rubaiyyah Ali [0636600881] [0124729216] rubaiyyah@feenstragroup.co.za",
        capacity: 299,
        imageSource: require("./images/kingsway.jpg"),
        externalLink: "http://www.kingswayplace.co.za/",
      },

      {
        propertyName: "THE RICHMOND - Student Accomodation ",
        address: "42 Richmond Avenue, Auckland Park 3.7km away from campus",
        contactDetails:
          "Rubaiyyah Ali  [0636600881] [0124729216] rubaiyyah@feenstragroup.co.za",
        capacity: 199,
        imageSource: require("./images/richmondcentral.png"),
        externalLink: "https://thrivestudentliving.co.za/richmond-central/",
      },

      {
        propertyName: "NOTA BENE",
        address: "46 Juta Street, Braamfontein 350m away from campus",
        contactDetails:
          "Michelle Abrahams [0731305151]  michelle@urbancircle.co.za",
        capacity: 255,
        imageSource: require("./images/notabene.jpg"),
        externalLink: "https://www.urbancircle.co.za/location/nota-bene/",
      },

      {
        propertyName: "MARK OF THE DIVINE (FOCUS 1 STUDENT) ACCOMMODATION)",
        address:
          "252 Rahima Moosa, Johannesburg Central 3.1km away from campus",
        contactDetails:
          "Samuel Beyin  [0871380021] [076 122 4682] beyin88@gmail.com",
        capacity: 500,
        imageSource: require("./images/focus.jpg"),
        externalLink: "http://www.focus1.co.za/",
      },

      {
        propertyName: "56 JORISSEN (SOUTH POINT) ",
        address: "56 Jorissen Street,  Braamfontein  230m away from campus ",
        contactDetails:
          "Wallace Katiyo  [0600189901] admin@staysouthpoint.co.za",
        capacity: 1195,
        imageSource: require("./images/56jorissen.jpg"),
        externalLink: "https://56jorissen.co.za/",
      },

      {
        propertyName: "YALE VILLAGE (RESPUBLICA)",
        address: "65 Empire Street, Parktown 250m away from campus ",
        contactDetails:
          "Bronwyn Boavida [0100200349] [0100200300] applications@respublica.co.za/Bronwyn @respublica.co.za ",
        capacity: 988,
        imageSource: require("./images/yale.jpg"),
        externalLink: "https://respublica.co.za/residence/yale-village/",
      },
    ];

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Private Accommodation</Text>
        {cardsData.map((data, index) => (
          <Card
            key={index}
            propertyName={data.propertyName}
            address={data.address}
            contactDetails={data.contactDetails}
            capacity={data.capacity}
            imageSource={data.imageSource}
            externalLink={data.externalLink}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
  },
  cardImage: {
    flex: 1,
  },
  image: {
    width: 140,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
  cardDetails: {
    flex: 2,
    paddingRight: 10,
    paddingLeft: 60,
    marginLeft: 20,
  },
  propertyName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  address: { fontWeight: 100, marginBottom: 10 },

  contactDetails: { fontWeight: 100, marginBottom: 10 },

  capacity: { fontWeight: 100 },

  button: {
    backgroundColor: "#ffb253",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 40,
    marginBottom: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    fontSize: 30,
    margin: 6,
  },
});

export default App;
