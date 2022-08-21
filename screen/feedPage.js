import { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Posts from "../components/feedpage/posts";
import UserIntro from "../components/feedpage/userIntro";
import Genre from "../components/genre";
import SearchBar from "../components/searchbar";
import { rootStyle } from "../utilities/rootStyles";
function Feedpage({ username }) {
  const [searchQuery, setSearchQuery] = useState("");

  function onChangeSearch(query) {
    setSearchQuery(query);
  }
  return (
    <View style={rootStyle.root}>
      <ScrollView>
        <UserIntro username={username} />
        <SearchBar
          searchQuery={searchQuery}
          updateSearchQuery={onChangeSearch}
        />
        <Genre />
        <Posts />
      </ScrollView>
    </View>
  );
}

export default Feedpage;


