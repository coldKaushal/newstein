import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORY } from "../../data/genre";

function createItem({ item }) {
  return (
    <View style={styles.itemWrapper}>
      <Text>{item}</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Categories</Text>
      <Text>Select the tiles to view the articles of only that category</Text>
      <FlatList
        data={CATEGORY}
        renderItem={createItem}
        numColumns={3}
        keyExtractor={(item, index) => index}
        columnWrapperStyle={{ flexWrap: 'wrap'}}
      />
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemWrapper: {
    margin: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
});
