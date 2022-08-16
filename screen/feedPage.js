import { View, Text, StyleSheet } from "react-native";
function Feedpage() {
  return (
    <View style={styles.root}>
        <Text>Home</Text>
    </View>
  );
}

export default Feedpage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'white',
    padding: 16,
  },
});
