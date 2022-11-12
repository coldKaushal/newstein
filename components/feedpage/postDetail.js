import { useContext, useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { AuthContext } from "../../store/authContext";
import { FetchThisNewsDetail } from "../../utilities/newsAPI";
import PublishTime from "../../utilities/publishTime";
import LoadingOverlay from "../ui/loadingOverlay";
import { MaterialIcons } from "@expo/vector-icons";

export default function PostDetail() {
  const authCtx = useContext(AuthContext);
  const item = authCtx.item;
  const [itemContent, setItemContent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(authCtx.item);
  const handlePress = useCallback(async () => {
    try {
      const supported = await Linking.canOpenURL(item.url);

      if (supported) {
        await Linking.openURL(item.url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${item.url}`);
      }
    } catch (error) {
      console.log("error in redirecting url from the post");
      console.log(error);
    }
  }, [item.url]);

  useEffect(() => {
    FetchThisNewsDetail(item.url).then((res) => {
      console.log(res.data);
      setItemContent(res.data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <LoadingOverlay message={"Fetching Full News Content"} />
  ) : (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={{ uri: item.urlToImage }} style={styles.image} />
          <View style={styles.subs}>
            <Text style={styles.author}>
              {item.author ? item.author : "Sources"}
            </Text>
            <Text>{PublishTime(item.publishedAt)}</Text>
          </View>
          <View style={styles.subs}>
            <View style={styles.subs1}>
              <View style={styles.rightMargin10}>
                <MaterialIcons
                  name="thumb-up-off-alt"
                  size={30}
                  color="black"
                />
              </View>
              <MaterialIcons
                name="thumb-down-off-alt"
                size={30}
                color="black"
              />
            </View>
            <View>
              <MaterialIcons name="bookmark-outline" size={30} color="black" />
            </View>
          </View>
          <Text style={styles.itemContent}>{itemContent}</Text>
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
  },
  rightMargin10:{
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
