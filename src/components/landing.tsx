import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent, useEffect } from "react";
import { LandingPageSignUpCard } from "./landing-page-card";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import { EffectCallback } from "react";

export const LandingPage: React.FC = (): JSX.Element => {
  useEffect(() => {
    (async function setFont() {
      await Font.loadAsync({
        fredoka: require("../assets/fonts/FredokaOne-Regular.ttf"),
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Volt</Text>
      <LandingPageSignUpCard/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
  },
  header: {
    fontSize: 40,
    fontWeight: "900",
    fontFamily: "fredoka",
  },
  logo: {
    width: 100,
    height: 200,
    margin: 100,
  },
});
