import { useFocusEffect } from "@react-navigation/native";
import { all } from "axios";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GetNewsByID } from "../../utilities/newsAPI";
import PostItem from "../feedpage/postItem";

export default function Posts({ data }) {
  console.log(data);
  const [dataItem, updateDataItem] = useState([]);
  useFocusEffect(
    useCallback(() => {
      let allData = [];
      data.forEach((item) => {
        GetNewsByID(item).then((res) => {
          // console.log(res.data);
          updateDataItem((prev) => {
            return [...prev, res.data];
          });
        });
      });
    }, [])
  );
  console.log(dataItem);
  function createPost(item) {
    console.log(item);

    return (
      <View style={styles.item} key={item._id}>
        <PostItem item={item} />
      </View>
    );
  }
  return <View>{dataItem.map(createPost)}</View>;
}

const styles = StyleSheet.create({
  root: {},
  item: {
    overflow: "hidden",
  },
});
