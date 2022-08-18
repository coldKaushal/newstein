import { useState } from "react";
import { View, ScrollView, Text, StyleSheet, Pressable } from "react-native";
import { GENRE } from "../data/genre";

function Genre() {
  const [activeGenre, setActiveGenre] = useState("All");
  function updateActiveGenre(val) {
    //console.log(val);
    setActiveGenre(val);
  }
  function createGenre(item) {
    return (
      <View key={item}>
        <Pressable
          style={[
            activeGenre === item
              ? styles.activeContainer
              : styles.inactiveContainer,
            styles.genreItem,
          ]}
          onPress={() => updateActiveGenre(item)}
        >
          <View>
            <Text style={activeGenre===item ? styles.activeText : styles.inactiveText}>{item}</Text>
          </View>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <ScrollView horizontal={true}>{GENRE.map(createGenre)}</ScrollView>
    </View>
  );
}

export default Genre;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 14,
  },
  genreItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 8,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    marginVertical: 4,
  },
  activeContainer: {
    backgroundColor: "#0075ff",
  },
  inactiveContainer: {
    backgroundColor: "#f6f6f6",
  },
  activeText:{
    color: 'white',
  },
  inactiveText:{
    color: 'black',
  }
});
