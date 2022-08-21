import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function SearchBar({ searchQuery, updateSearchQuery }) {
  return (
    <View style={styles.root}>
      <Ionicons name="search-outline" size={24} color="black" />
      <TextInput
        value={searchQuery}
        onChangeText={updateSearchQuery}
        placeholder="Search for article"
        style={styles.textInput}
      />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: "#f6f6f6",
    marginTop: 4,
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: "center",
  },
  textInput: {
    marginLeft: 8,
  },
});
