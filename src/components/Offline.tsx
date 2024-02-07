import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator } from "react-native-paper";

export const Offline = () => {
    const isConnected = useIsConnected();

    if (isConnected) return null;

    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} color="#991B1B" />
            <Text style={styles.message}>You are offline.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginHorizontal: 32,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: "#FEE2E2",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    message: {
        fontWeight: "500",
        color: "#991B1B",
    },
});