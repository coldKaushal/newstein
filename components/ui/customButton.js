import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <Pressable android_ripple={{ color: "black" }} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#3238C8",
    paddingVertical: 10,
    alignItems: "center",
    elevation: 8,
    overflow: 'hidden'
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
});
