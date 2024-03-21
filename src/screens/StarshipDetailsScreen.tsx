/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useImage } from "~/hooks/useImage";

type Props = {
  navigation: any;
  route: any;
};

const StarshipDetailsScreen = ({ navigation, route }: Props) => {
  const image = useImage(route.params.name);

  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <Button
          icon="arrow-left"
          color="#6550A4"
          onPress={() => navigation.goBack()}
        >
          Back
        </Button>
        <Text style={styles.buttonTitle}>{route.params.name}</Text>
      </View>
      <View style={styles.details}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>Informations</Text>
        <View>
          <Text style={styles.text}>Name: {route.params.name}</Text>
          <Text style={styles.text}>Model : {route.params.model}</Text>
          <Text style={styles.text}>Manufacturer: {route.params.name}</Text>
          <Text style={styles.text}>Cost in credits : {route.params.cost_in_credits}</Text>
          <Text style={styles.text}>Hyperdrive rating : {route.params.hyperdrive_rating}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StarshipDetailsScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#E7E0EC",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    padding: 8,
    paddingRight: 16
  },
  buttonTitle: {
    fontWeight: "800"
  },
  details: {
    padding: 16,
    paddingTop: 32
  },
  title: {
    fontWeight: "800",
    fontSize: 24,
    marginBottom: 16
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    marginBottom: 4
  },
  image: {
    borderRadius: 4,
    marginBottom: 16
  }
});