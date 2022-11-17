import { StyleSheet, View } from "react-native";
import PostItem from "../feedpage/postItem";

export default function Posts({ data }) {
  console.log(data);

  function createPost(item) {
    return (
      <View style={styles.item} key={item.url}>
        <PostItem item={item} />
      </View>
    );
  }
  return <View>{data.map(createPost)}</View>;
}

const styles = StyleSheet.create({
  root: {},
  item: {
    overflow: "hidden",
  },
});
