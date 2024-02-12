// ./src/components/Button.stories.tsx

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default {
  title: "Button"
};

export const Default = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    <Button
      icon="camera"
      mode="contained"
      onPress={() => console.log("Pressed")}
    >
      Press me
    </Button>
    <Button
      mode="contained"
      onPress={() => console.log("Pressed")}
    >
      Press me
    </Button>
    <Button
      icon="camera"
      mode="outlined"
      onPress={() => console.log("Pressed")}
    >
      Press me
    </Button>
    <Button
      mode="outlined"
      onPress={() => console.log("Pressed")}
    >
      Press me
    </Button>
    <Button
      icon="camera"
      mode="text"
      onPress={() => console.log("Pressed")}
    >
      Press me
    </Button>
    <Button
      mode="text"
      onPress={() => console.log("Pressed")}
    >
      Press me
    </Button>
  </View>
);

Default.story = {
  name: "Default"
};
