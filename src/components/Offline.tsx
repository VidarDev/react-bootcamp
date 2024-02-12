// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator } from "react-native-paper";

export const Offline = () => {
  const isConnected = useIsConnected();

  if (isConnected) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        color="#991B1B"
      />
      <Text style={styles.message}>You are offline.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
    marginHorizontal: 32,
    padding: 16
  },
  // eslint-disable-next-line react-native/no-color-literals
  message: {
    color: "#991B1B",
    fontWeight: "500"
  }
});
