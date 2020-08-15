import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

function Bookmark(props) {
  return (
    <View style={styles.bookmark}>
      <Feather name="bookmark" size={24} color={colors.pink} />
    </View>
  );
}

const styles = StyleSheet.create({
  bookmark: {
    position: "absolute",
    width: 56,
    height: 56,
    right: 32,
    top: -56 / 2,
    backgroundColor: colors.text,
    ...gs.center,
    borderRadius: 56 / 2,
    zIndex: 10,
  },
});

export default Bookmark;
