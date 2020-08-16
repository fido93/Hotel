import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { gs, colors } from "../../styles";
import Header from "./components/Header";
import { StatusBar } from "expo-status-bar";
import Stats from "./components/Stats";
import About from "./components/About";
import Location from "./components/Location";
import Photos from "./components/Photos";

function index(props) {
  // Create usestate to hold the variable
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetching the data
  async function profileFetching() {
    try {
      let res = await fetch(
        "https://randomuser.me/api/?inc=name,picture,location&location&noinfo"
      );
      let users = await res.json();

      setUser(users.results[0]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  // the function produce same like componentDidMount()
  useEffect(() => {
    profileFetching();
  }, []);

  // return value
  if (isLoading) {
    return (
      <View>
        <StatusBar style="light" />
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <StatusBar style="light" />
      <Header user={user} />
      <Stats />
      <About />
      <Location />
      <Photos />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
});

export default index;
