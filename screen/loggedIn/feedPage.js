import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import Posts from "../../components/feedpage/posts";
import UserIntro from "../../components/feedpage/userIntro";
import Genre from "../../components/genre";
import SearchBar from "../../components/searchbar";
import { rootStyle } from "../../utilities/rootStyles";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../store/authContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostDetail from "../../components/feedpage/postDetail";

const Stack = createNativeStackNavigator();
function Feedpage() {
  const authCtx = useContext(AuthContext);
  const username = authCtx.name;
  const [searchQuery, setSearchQuery] = useState("");
  function onChangeSearch(query) {
    setSearchQuery(query);
  }

  function HomePage({route, navigation}){
    return <View style={rootStyle.root}>
    <View style={styles.headerWrapper}>
      <UserIntro username={username} />
      {/* <View style={styles.iconWrapper}>
        <Pressable android_ripple={{ color: "#ccc" }}>
          <View style={styles.iconWrapper}>
            <Ionicons
              name="filter"
              size={24}
              color="black"
              style={styles.icon}
            />
          </View>
        </Pressable>
      </View> */}
    </View>
    <SearchBar searchQuery={searchQuery} updateSearchQuery={onChangeSearch} />
    {/* <Genre /> */}
    <Posts searchQuery={searchQuery} />
  </View>
  }

  
  return (
    <View style={styles.root}>
      <Stack.Navigator>
        <Stack.Screen 
        name="homepage" 
        children={()=> <HomePage />} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name="post detail" 
        children={()=> <PostDetail />} 
        options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    </View>
  );
}

export default Feedpage;

const styles = StyleSheet.create({
  root:{
    flex: 1,
  },
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
    overflow: "hidden",
  },
  icon: {
    height: 20,
    width: 20,
  },
});
