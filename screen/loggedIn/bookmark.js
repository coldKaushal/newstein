import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Posts from "../../components/feedpage/posts";
import Genre from "../../components/genre";
import SearchBar from "../../components/searchbar";
import { FontAwesome } from "@expo/vector-icons";

import { rootStyle } from "../../utilities/rootStyles";

function BookMark() {
  const [fromDate, updateFromDate] = useState(new Date());
  const [toDate, updateToDate] = useState(new Date());
  console.log(fromDate);
  return (
    <View style={rootStyle.root}>
      <Text style={styles.title}>BookMark</Text>
      <View style={[styles.rowView, styles.bookmarkWrapper]}>
        <View style={styles.rowView}>
          <FontAwesome
            name="bookmark-o"
            size={24}
            color="#555"
            style={styles.bookmarkIcon}
          />
          <Text style={styles.bookmarkCount}>178</Text>
        </View>
      </View>
      <SearchBar />
      <Genre />
      <Posts />
    </View>
  );
}

export default BookMark;

const styles = StyleSheet.create({
  root: {
  },
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
