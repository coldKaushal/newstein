import { Image, View, Text, StyleSheet } from "react-native";
import PublishTime from "../../utilities/publishTime";



function PostItem({ item }) {
  return (
    <View style={styles.root}>
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.category}>{"SPORTS"}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.subs}>
          <Text style={styles.author}>{item.author}</Text>
          <Text>{PublishTime(item.publishedAt)}</Text>
        </View>
      </View>
    </View>
  );
}

export default PostItem;

const styles = StyleSheet.create({
  root: {
    borderRadius: 8,
    marginVertical: 16,
    backgroundColor: "white",
    overflow: "hidden",
  },
  container:{
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 16,
  },
  category: {
    color: "#A8A8A8",
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subs:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  author:{
    color: '#717171',
    fontWeight: '500',
  }
});
