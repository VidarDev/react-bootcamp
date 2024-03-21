// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomNavigationBar from "~/components/NavigationBar";
import { useAuthContext } from "~/context/AuthContext";
import { Routes } from "~/navigation/Routes";
import LoginScreen from "~/screens/LoginScreen";
import StarshipDetailsScreen from "~/screens/StarshipDetailsScreen";
import StarshipFeedScreen from "~/screens/StarshipFeedScreen";
import TermsScreen from "~/screens/TermsScreen";

export default function Navigator() {
  const { isSignedIn } = useAuthContext();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />
        }}
        initialRouteName={
          isSignedIn ? Routes.STARSHIP_FEED_SCREEN : Routes.LOGIN_SCREEN
        }
      >
        <Stack.Screen
          name={Routes.STARSHIP_FEED_SCREEN}
          component={StarshipFeedScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={Routes.TERMS_SCREEN}
          component={TermsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={Routes.STARSHIP_DETAIL_SCREEN}
          component={StarshipDetailsScreen}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name={Routes.LOGIN_SCREEN}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
