import { PlantCard } from "@/component/PlantCard";
import { PlantlyButton } from "@/component/plantlyButton";
import { usePlantStore } from "@/store/plantsStore";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
 const router = useRouter();
 const plants = usePlantStore((state) => state.plants);
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/new");
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 12,
  },
});
