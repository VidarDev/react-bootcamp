// ./src/components/Card.stories.tsx

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";

export default {
  title: "Card"
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const LeftContent = (props) => {
  return (
    <Avatar.Icon
      {...props}
      icon="folder"
    />
  );
};

export const Default = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    <Card>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button
          mode="outlined"
          onPress={() => console.log("Pressed")}
        >
          Cancel
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Ok
        </Button>
      </Card.Actions>
    </Card>
  </View>
);

Default.story = {
  name: "Default"
};
