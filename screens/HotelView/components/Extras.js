import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { gs, colors } from "../../../styles";

const extras = [
  "Payment at Checkout",
  "Wi-Fi Network is on for 24 Hours",
  "No swimming after 10:00pm",
  "No smoking in lobby",
  "No Refunds ",
];

function Extras(props) {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>Before you go</Text>
      <View style={styles.list}>
        {extras.map((extra, key) => {
          return (
            <Text style={styles.listItem} key={key}>
              &mdash; {extra}
            </Text>
          );
        })}
      </View>
      <View style={{ marginTop: 32, marginBottom: -40 }}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={{ fontWeight: "700", color: "#fff" }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    marginTop: 8,
    marginBottom: 64,
  },
  list: {
    marginTop: 16,
    marginLeft: 8,
  },
  listItem: {
    color: colors.textSec,
    marginVertical: 8,
  },
  filterButton: {
    ...gs.button,
    paddingVertical: 16,
  },
});

export default Extras;
