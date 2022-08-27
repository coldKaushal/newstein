import { View, Text, StyleSheet } from "react-native";
import Posts from "../components/feedpage/posts";

function BookMark(){
    return <View style={styles.root}>
        <Text>BookMark</Text>
        <Posts />
    </View>
}

export default BookMark;

const styles=StyleSheet.create({
    root:{
        flex: 1,
        padding: 16,
    }
})