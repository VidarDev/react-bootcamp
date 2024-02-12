import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";

export const Header = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
      <Text
        variant="displayMedium"
        style={styles.title}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  header: {
    alignItems: "center",
    backgroundColor: "#6650a4",
    display: "flex",
    height: "33%",
    justifyContent: "center"
  },
  // eslint-disable-next-line react-native/no-color-literals
  title: {
    color: "#fff",
    fontWeight: "800",
    textTransform: "uppercase"
  }
});
