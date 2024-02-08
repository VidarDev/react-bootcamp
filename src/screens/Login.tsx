import { KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { Header } from '~/components/Header';

export default function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.aria} />
      <View style={styles.container}>
        <Header title='Spacecraft' />
        <KeyboardAvoidingView style={styles.form}>
          <TextInput label='Email' keyboardType='email-address' />
          <TextInput label='Mot de passe' secureTextEntry={!visiblePassword} right={
            <TextInput.Icon
              onPress={() => setVisiblePassword((old) => !old)}
              icon={visiblePassword ? "eye" : "eye-off"}
            />
          } />
          <Button style={styles.button} mode='contained'>Connexion</Button>
          <Pressable><Text variant="bodySmall" style={styles.text}>Read Terms and conditions</Text></Pressable>
        </KeyboardAvoidingView>
      </View>
      <SafeAreaView />
    </>
  );
}

const styles = StyleSheet.create({
  aria: {
    backgroundColor: "#6650a4",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    flex: 1,
    padding: 32,
    display: "flex",
    gap: 24,
  },
  text: {
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.5)",
    textDecorationLine: "underline",
  },
  button: {
    marginHorizontal: 16,
  }
});
