// @ts-ignore
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

import { useImage } from "~/hooks/useImage";

export interface Starship {
  name: string;
  model: string;
  cost_in_credits: string;
  manufacturer: string;
  hyperdrive_rating: string;
}

export default function CardShip({ item }: { item: Starship }) {
  const image = useImage(item.name);
  return (
    <Card style={styles.card}>
      <Card.Title
        style={styles.title}
        title={item.name}
        subtitle={
          item.cost_in_credits != "unknown"
            ? "$" + item.cost_in_credits
            : "Unappreciated"
        }
      />
      <Card.Cover
        style={styles.image}
        source={image}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8
  },
  image: {
    borderRadius: 4
  },
  title: {}
});
