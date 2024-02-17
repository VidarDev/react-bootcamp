import { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View
} from "react-native";
import { Text } from "react-native-paper";
import { Button, TextInput } from "react-native-paper";

import { Header } from "~/components/Header";
import { Routes } from "~/navigation/Routes";

export default function LoginScreen({ navigation }) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.aria} />
      <View style={styles.container}>
        <Header title={"Spacecraft"} />
        <KeyboardAvoidingView style={styles.form}>
          <TextInput
            label="Email"
            keyboardType="email-address"
          />
          <TextInput
            label="Mot de passe"
            secureTextEntry={!visiblePassword}
            right={
              <TextInput.Icon
                onPress={() => setVisiblePassword((old) => !old)}
                icon={visiblePassword ? "eye" : "eye-off"}
              />
            }
          />
          <Button
            style={styles.button}
            mode="contained"
          >
            Connexion
          </Button>
          <Pressable onPress={() => console.log(Routes.TERMS_SCREEN)}>
            <Text
              variant="bodySmall"
              style={styles.text}
            >
              Read Terms and conditions
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
      <SafeAreaView />
    </>
  );
}

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  aria: {
    backgroundColor: "#6650a4"
  },
  button: {
    marginHorizontal: 16
  },
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  form: {
    display: "flex",
    flex: 1,
    gap: 24,
    padding: 32
  },
  // eslint-disable-next-line react-native/no-color-literals
  text: {
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    textDecorationLine: "underline"
  }
});
