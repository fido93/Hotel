import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { gs, colors } from "../../../styles";
import { Entypo } from "@expo/vector-icons";

function Location(props) {
  return (
    <View style={styles.container}>
      <View style={{ width: 50, height: 75 }}>
        <Image
          source={require("../../../assets/pin.png")}
          style={{ flex: 1, width: 40 }}
          resizeMode="center"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.location}>Switzerland</Text>
        <Text style={styles.distance}>227km away</Text>
      </View>
      <Entypo name="chevron-right" size={24} color={colors.darkHl} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gs.rowCenter,
    backgroundColor: colors.lightBg,
    paddingHorizontal: 28,
    paddingVertical: 8,
  },
  location: {
    fontSize: 18,
    color: colors.text,
    fontWeight: "500",
  },
  distance: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 4,
    textTransform: "uppercase",
  },
});

export default Location;
