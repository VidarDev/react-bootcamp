import { Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useImage } from "~/hooks/useImage";

export type Starship = {
    name: string;
    model: string;
    cost_in_credits: string;
    crew: string;
    hyperdrive_rating: string;
}

export default function Card({ item }: { item: Starship }) {
    const image = useImage(item.name);
    return (
        <Card style={styles.card}>
            <Card.Title style={styles.title} title={item.name} subtitle={item.cost_in_credits != "unknown" ? ("$" + item.cost_in_credits) : "Unappreciated"} />
            <Card.Cover style={styles.image} source={image} />
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
    },
    title: {
    },
    image: {
        borderRadius: 4,
    }
});