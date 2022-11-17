import { useContext, useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Genre from "../../components/genre";
import SearchBar from "../../components/searchbar";
import { FontAwesome } from "@expo/vector-icons";

import { rootStyle } from "../../utilities/rootStyles";
import { FetchBookmarks } from "../../utilities/newsAPI";
import { AuthContext } from "../../store/authContext";
import Posts from "../../components/bookmark/posts";
import { useFocusEffect } from "@react-navigation/native";
import LoadingOverlay from "../../components/ui/loadingOverlay";

function BookMark({ navigation }) {
  const AuthCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      console.log("fetching bookmarks");
      setIsLoading(true);
      FetchBookmarks(AuthCtx.email)
        .then((res) => {
          if (res && res.data && res.data.bookmark) {
            setData(res.data.bookmark);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
      setIsLoading(true);
    }, [])
  );

  if (isLoading) {
    return <LoadingOverlay message={"Loading your bookmarks"} />;
  } else {
    return (
      <View style={rootStyle.root}>
        <ScrollView>
          <Text style={styles.title}>BookMark</Text>
          <View style={[styles.rowView, styles.bookmarkWrapper]}>
            <View style={styles.rowView}>
              <FontAwesome
                name="bookmark-o"
                size={24}
                color="#555"
                style={styles.bookmarkIcon}
              />
              <Text style={styles.bookmarkCount}>{data.length}</Text>
            </View>
          </View>
          <SearchBar />
          <Genre />
          <Posts data={data} />
        </ScrollView>
      </View>
    );
  }
}

export default BookMark;

const styles = StyleSheet.create({
  root: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bookmarkWrapper: {
    justifyContent: "space-between",
    marginRight: 16,
    marginBottom: 8,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookmarkIcon: {
    marginRight: 8,
  },
  bookmarkCount: {
    color: "#555",
  },
});
