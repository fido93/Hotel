import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { gs, colors } from "../../../styles";

function About(props) {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>ABOUT ME</Text>
      <Text style={styles.about}>
        At 21, I quit my corporate job in the England to pursue my dreams of
        traveling the world and building my own business. It all seemed crazy,
        especially because I was young and broke — but after a few months… I
        made it all happen. {"\n"}
        {"\n"}
        Today, I am a successful digital nomad (online entrepreneur, solo female
        travel blogger and travel vlogger) who has been to all 7 continents!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  about: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.darkHl,
    marginTop: 8,
    lineHeight: 22,
  },
});

export default About;
