import type { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { Offline } from "~/components/Offline";

interface ContainerProps {
  title: string;
  children?: ReactNode;
  withSeparatorFooter?: boolean;
}

export const ScreenContainer = ({
    title,
    children,
}: ContainerProps) => {
  return (
    <>
      <Offline></Offline>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <Text
            variant="headlineMedium"
            style={styles.title}
          >
            {title}
          </Text>
          {children}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 32,
    paddingTop: 48
  },
  title: {
    fontWeight: "800",
    marginBottom: 32
  }
});
