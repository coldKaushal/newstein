import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FetchAllNews } from "../../utilities/newsAPI";
import { Alert } from "react-native";
import PostItem from "./postItem";

function Posts() {
  const [data, updateData]=useState();
  
  useEffect(() => {
    FetchAllNews()
      .then((res) => {
        updateData(res.data.articles);
      })
      .catch((err) =>
        Alert.alert(
          "Error",
         err
        )
      );
  }, []);
  function createPost({ item }) {
    return (
      <View style={styles.item}>
        <PostItem item={item} />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={createPost}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default Posts;

const styles = StyleSheet.create({
  root: {},
  item: {
    overflow: "hidden",
  },
});
