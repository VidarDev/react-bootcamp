import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import CardShip, { Starship } from "~/components/CardShip";
import { ScreenContainer } from "~/components/ScreenContainer";
import { useStarships } from "~/hooks/useStarships";

export default function StarshipFeed() {
  const [starships, setStarships] = React.useState<Starship[]>([]);
  const { data, isError, isLoading } = useStarships();

  useEffect(() => {
    if (data) setStarships(data.results);
  }, [data]);

  return (
    <SafeAreaView>
      <ScreenContainer title="List of Starships">
        {isLoading || starships.length <= 0 ? (
          <LoadingLayout />
        ) : isError ? (
          <ErrorLayout />
        ) : (
          <FlatList
            data={starships}
            renderItem={({ item }) => <CardShip item={item} />}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
          />
        )}
      </ScreenContainer>
    </SafeAreaView>
  );
}

function ErrorLayout() {
  return (
    <View style={styles.container}>
      <Text
        variant="bodyMedium"
        style={styles.text}
      >
        An error has occurred.
      </Text>
    </View>
  );
}

function LoadingLayout() {
  return (
    <View style={styles.container}>
      <Text
        variant="bodyMedium"
        style={styles.text}
      >
        Loading...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32
  },
  text: {
    fontWeight: "400"
  }
});
