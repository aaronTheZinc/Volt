import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { LandingPage } from "./components" 


export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
})
