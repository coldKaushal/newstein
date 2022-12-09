import { useContext, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FetchAllNews, SearchNews } from "../../utilities/newsAPI";
import { Alert } from "react-native";
import PostItem from "./postItem";
import LoadingOverlay from "../ui/loadingOverlay";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-web";

function Posts({ searchQuery }) {
  const [data, updateData] = useState();
  const [isLoading, updateLoading] = useState(true);
  useFocusEffect(
    useCallback(() => {
      if (searchQuery === "") {
        FetchAllNews()
          .then((res) => {
            updateData(res.data);
            updateLoading(false);
          })
          .catch((err) => Alert.alert("Error", err));
      } else {
        SearchNews(searchQuery)
          .then((res) => {
            updateData(res.data);
            updateLoading(false);
          })
          .catch((err) => Alert.alert("Error", err));
      }
    }, [])
  );
  function createPost({item} ) {
    console.log(item);
    return (
      <View style={styles.item} key={item}>
        <PostItem item={item} />
      </View>
     
    );
  }

  return isLoading ? (
    <LoadingOverlay message={"Fetching latest news"} />
  ) : (
    <View style={styles.root}>
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
  root: {
    flex: 1,
  },
  item: {
    overflow: "hidden",
  },
});
