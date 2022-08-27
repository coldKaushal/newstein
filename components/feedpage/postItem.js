import { useState } from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import PublishTime from "../../utilities/publishTime";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
function PostItem({ item }) {

  const [bookmarkIcon, setBookmarkIcon] = useState("bookmark-o")

  function handlePress(){
    if(bookmarkIcon==="bookmark-o"){
      setBookmarkIcon("bookmark");
    }else{
      setBookmarkIcon("bookmark-o");
    }
  }



  return (
    <View style={styles.root}>
      <Pressable android_ripple={{ color: "#ccc" }} style={{ margin: 0 }}>
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.category}>{"SPORTS"}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.subs}>
            <Text style={styles.author}>{item.author}</Text>
            <Text>{PublishTime(item.publishedAt)}</Text>
          </View>
          <View style={styles.subs1}>
            <View style={styles.rowView}>
              <Ionicons name="star-outline" size={18} color="black" />
              <Text>678</Text>
            </View>
            <View style={styles.rowView}>
              <FontAwesome5 name="comment" size={18} color="black" />
              <Text>15</Text>
            </View>
            <View style={styles.bookmark}>
              <Pressable android_ripple={{color: '#ccc'}} onPress={handlePress} >
                <FontAwesome name={bookmarkIcon} size={24} color="black" />
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
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
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 16,
  },
  category: {
    color: "#A8A8A8",
    fontSize: 12,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
  },
  imageContainer: {
    flexDirection: "row",
  },
  bookmark: {
    position: "absolute",
    right: 10,
    overflow: "hidden"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  author: {
    color: "#717171",
    fontWeight: "500",
  },
  subs1: {
    flexDirection: "row",
    marginTop: 8,
  },
  rowView: {
    flexDirection: "row",
    marginRight: 16,
    alignItems: "center",
  },
});
