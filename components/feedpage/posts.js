import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DATA from "../../data/response.json";
import PostItem from "./postItem";


function Posts() {

    function createPost({item}){
        return <View style={styles.item}>
            <PostItem item={item} />
        </View>
    }

  return <View>
    <FlatList
    data={DATA.articles}
    renderItem={createPost}
    keyExtractor={(item, index) => index}
    />

  </View>;
}

export default Posts;


const styles = StyleSheet.create({
    root:{

    },
    item:{
        overflow: 'hidden',
    }
});
