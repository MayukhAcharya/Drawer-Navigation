import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings ScreenF</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
