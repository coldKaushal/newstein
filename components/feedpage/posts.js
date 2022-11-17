import { useContext, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FetchAllNews } from "../../utilities/newsAPI";
import { Alert } from "react-native";
import PostItem from "./postItem";
import LoadingOverlay from "../ui/loadingOverlay";
import { useFocusEffect } from "@react-navigation/native";

function Posts() {
  const [data, updateData]=useState();
  const [isLoading, updateLoading] = useState(true);
  useFocusEffect(
    useCallback(()=>{
      FetchAllNews()
      .then((res) => {
        updateData(res.data.articles);
        updateLoading(false);
      })
      .catch((err) =>
        Alert.alert(
          "Error",
         err
        )
      );
    }, [])
  );
  function createPost({ item }) {
    return (
      <View style={styles.item}>
        <PostItem item={item} />
      </View>
    );
  }

  return isLoading ? <LoadingOverlay message={"Fetching latest news"} /> : (
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
