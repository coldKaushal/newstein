import { useContext, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { FetchAllNews, SearchNews } from "../../utilities/newsAPI";
import { Alert } from "react-native";
import PostItem from "./postItem";
import LoadingOverlay from "../ui/loadingOverlay";
import { useFocusEffect } from "@react-navigation/native";
import { AuthContext } from "../../store/authContext";

function Posts({ searchQuery }) {
  const [data, updateData] = useState();
  const AuthCtx = useContext(AuthContext);
  const email = AuthCtx.email;
  const [isLoading, updateLoading] = useState(true);
  useFocusEffect(
    useCallback(() => {
      if (searchQuery === "") {
        FetchAllNews(email)
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
      <View style={styles.item} key={item._id}>
        <PostItem item={item} />
      </View>
     
    );
  }

  return isLoading ? (
    <LoadingOverlay message={"Fetching latest news..."} />
  ) : (
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={createPost}
        keyExtractor={(item, index) => index}
      />
      {/* <ScrollView>
        {data.map(createPost)}
      </ScrollView> */}
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
