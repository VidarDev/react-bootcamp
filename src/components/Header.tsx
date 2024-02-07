import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";

export const Header = ({ title }: { title: string }) => {
    return (
        <View style={styles.header}>
            <Text variant="displayMedium" style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: "33%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6650a4",
    },
    title: {
        color: "#fff",
        fontWeight: "800",
        textTransform: "uppercase",
    },
});