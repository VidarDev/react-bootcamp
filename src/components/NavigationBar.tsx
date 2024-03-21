import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { StatusBar } from "expo-status-bar";

import { Offline } from "./Offline";

import { useAuthContext } from "~/context/AuthContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back
}: any) {
  const title = getHeaderTitle(options, route.name);
  const { isSignedIn, toggleIsSignedIn } = useAuthContext();

  return (
    <SafeAreaView>
      <Offline />
      <StatusBar style="dark" />
      <View style={styles.container}>
        {back && (
          <Button
            icon="arrow-left"
            color="#6550A4"
            onPress={() => navigation.goBack()}
          >
            Back
          </Button>
        )}
        {isSignedIn && (
          <TouchableOpacity onPress={toggleIsSignedIn}>
            <Text>Deconnexion</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "#6550A4"
  },
  container: {
    alignItems: "center",
    backgroundColor: "#E7E0EC",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    padding: 8,
    paddingRight: 16
  },
  title: {
    fontWeight: "800"
  }
});
