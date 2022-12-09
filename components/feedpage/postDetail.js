import { useContext, useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Linking,
  Pressable,
} from "react-native";
import { AuthContext } from "../../store/authContext";
import { FetchThisNewsDetail, GetNewsByID } from "../../utilities/newsAPI";
import PublishTime from "../../utilities/publishTime";
import LoadingOverlay from "../ui/loadingOverlay";
import { MaterialIcons } from "@expo/vector-icons";
import { AddBookmark, Dislike, Like } from "../../utilities/userData";

export default function PostDetail() {
  const authCtx = useContext(AuthContext);
  const item = authCtx.item;
  const [data, setData] = useState({
    url: ''
  });
  const [itemContent, setItemContent] = useState({
  });
  const [isLoading, setIsLoading] = useState(true);
  const [touch, setTouch] = useState(true);
  console.log(authCtx.item);

  function handleBookMarkPress() {
    // console.log(authCtx.email);
    AddBookmark(authCtx.email, item);
  }
  function BeautifyString(text) {
    return text
      .replace(/[\r\n]{2,}/g, "\n")
      .replace(/\t+/g, "")
      .trim()
      .replace(/\ +/g, " ");
  }
  const handlePress = useCallback(async () => {
    try {
      const supported = await Linking.canOpenURL(data.url);

      if (supported) {
        await Linking.openURL(data.url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${data.url}`);
      }
    } catch (error) {
      console.log("error in redirecting url from the post");
      console.log(error);
    }
  }, [data]);

  useEffect(() => {
    GetNewsByID(item).then(res=>{
      setData(res.data);
      // console.log(data.url);
      FetchThisNewsDetail(res.data.url).then((res) => {
        // console.log(res.data);
        setItemContent(res.data);
        setIsLoading(false);
      });
    })
    
  }, [touch]);

  function handleLike(){
    // console.log(authCtx.email);
    // console.log(item._id);
    
    Like(authCtx.email, data._id).then(res=>{
      console.log(res.data);
      setTouch(!touch);
    })
  }
  function handleDislike(){
    
    Dislike(authCtx.email, data._id).then(res=>{
      console.log(res.data);
      setTouch(!touch);
    })
  }
  return isLoading ? (
    <LoadingOverlay message={"Fetching Full News Content"} />
  ) : (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{data.title}</Text>
          <Image source={{ uri: data.urlToImage }} style={styles.image} />
          <View style={styles.subs}>
            <Text style={styles.author}>
              {data.author ? data.author : "Sources"}
            </Text>
            <Text>{PublishTime(data.publishedAt)}</Text>
          </View>
          <View style={styles.subs}>
            <View style={styles.subs1}>
              <Pressable onPress={handleLike}>
              <MaterialIcons name="thumb-up-off-alt" size={30} color="black" />
              </Pressable>

              <View style={styles.rightMargin10}>
                <Text>{data.likes}</Text>
              </View>
              <Pressable onPress={handleDislike}>
              <MaterialIcons
                name="thumb-down-off-alt"
                size={30}
                color="black"
              />
              </Pressable>
              <Text>{data.dislikes}</Text>
            </View>
            <Pressable onPress={handleBookMarkPress}>
              <View>
                <MaterialIcons
                  name="bookmark-outline"
                  size={30}
                  color="black"
                />
              </View>
            </Pressable>
          </View>
          <Text style={styles.itemContent}>{BeautifyString(itemContent)}</Text>
          <Button title="View article on website" onPress={handlePress} />
        </View>
      </ScrollView>
    </View>
  );
  
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  subs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  subs1: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightMargin10: {
    marginRight: 10,
  },
  author: {
    color: "#717171",
    fontWeight: "500",
  },
  itemContent: {
    fontSize: 18,
  },
});
