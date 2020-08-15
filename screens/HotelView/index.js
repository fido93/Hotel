import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../styles";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import Bookmark from "./components/Bookmark";
import About from "./components/About";
import Stats from "./components/Stats";
import Amenities from "./components/Amenities";
import Address from "./components/Address";
import Extras from "./components/Extras";

function index(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <View>
        <Bookmark />
        <About />
        <Stats />
        <Amenities />
        <Address />
        <Extras />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});

export default index;
