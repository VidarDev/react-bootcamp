import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/navigation/Routes";
import LoginScreen from "~/screens/LoginScreen";
import TermsScreen from "~/screens/TermsScreen";
import StarshipFeedScreen from "~/screens/StarshipFeedScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
          // title: "My home",
          // headerStyle: {
          //   backgroundColor: "#f4511e"
          // },
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "bold"
          // }
        }}
        initialRouteName={Routes.LOGIN_SCREEN}
      >
        <Stack.Screen
          name={Routes.LOGIN_SCREEN}
          component={LoginScreen}
        />
        <Stack.Screen
          name={Routes.TERMS_SCREEN}
          component={TermsScreen}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name={Routes.STARSHIP_FEED_SCREEN}
          component={StarshipFeedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
