import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Posts from "../../components/feedpage/posts";
import UserIntro from "../../components/feedpage/userIntro";
import Genre from "../../components/genre";
import SearchBar from "../../components/searchbar";
import { rootStyle } from "../../utilities/rootStyles";
import { Ionicons } from "@expo/vector-icons";

function Feedpage({ username }) {
  const [searchQuery, setSearchQuery] = useState("");

  function onChangeSearch(query) {
    setSearchQuery(query);
  }
  return (
    <View style={rootStyle.root}>
        <View style={styles.headerWrapper}>
          <UserIntro username={username} />
          <View style={styles.iconWrapper}>
            <Pressable android_ripple={{color: '#ccc'}}>
              <View style={styles.iconWrapper}>
                <Ionicons
                  name="filter"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <SearchBar
          searchQuery={searchQuery}
          updateSearchQuery={onChangeSearch}
        />
        <Genre />
        <Posts />
    </View>
  );
}

export default Feedpage;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconWrapper: {
    borderWidth: 0.5,
    height: 36,
    width: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
  },
  icon: {
    height: 20,
    width: 20,
  },
});
