import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AuthContext } from "../../store/authContext";
import { FetchThisNewsDetail } from "../../utilities/newsAPI";
import PublishTime from "../../utilities/publishTime";
import LoadingOverlay from "../ui/loadingOverlay";
export default function PostDetail() {
  const authCtx = useContext(AuthContext);
  const item = authCtx.item;
  const [itemContent, setItemContent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(authCtx.item);
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
          <Text>{itemContent}</Text>
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
  author: {
    color: "#717171",
    fontWeight: "500",
  },
});
