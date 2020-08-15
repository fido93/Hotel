import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { gs, colors } from "../../../styles";

const hotel = {
  name: "Marriott Jeju Shinhwa World Hotels",
  price: "$439",
  location: "Seoul Korea",
  about:
    "Founded by J. Willard and Alice Marriott, and guided by family leadership since 1927, their principles remain embedded in the company’s culture and in everything we do today.",
};

function About(props) {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>{hotel.name}</Text>
      <Text style={styles.info}>
        {hotel.price} &#8226; {hotel.location}
      </Text>
      <View style={gs.divider} />
      <Text style={gs.sectionTitle}>About {hotel.name}</Text>
      <Text style={styles.about}>{hotel.about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: colors.darkBg,
  },
  info: {
    color: colors.textSec,
    fontWeight: "600",
    marginTop: 4,
  },
  about: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSec,
    marginTop: 6,
    lineHeight: 20,
  },
});

export default About;
