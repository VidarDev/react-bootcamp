import { ScrollView } from "react-native";
import { LoginScreen } from "./src/screens";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
      <PaperProvider>
        <LoginScreen/>
        <ScrollView>
        </ScrollView>
      </PaperProvider>
  );
};