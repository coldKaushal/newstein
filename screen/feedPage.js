import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import UserIntro from "../components/feedpage/userIntro";
import Genre from "../components/genre";


function Feedpage({ username }) {
  return (
    <View style={styles.root}>
      <ScrollView>
        <UserIntro username={username} />
        <Genre />
      </ScrollView>
    </View>
  );
}

export default Feedpage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
  },
  
});
