import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

function ProfileTabItem({ iconName, title, bottomBorderStyle }) {
  return (
    <Pressable android_ripple={{color: '#ccc'}}>
      <View style={[bottomBorderStyle, styles.root]}>
        <Ionicons name={iconName} size={26} color="black" style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

export default ProfileTabItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingVertical: 14,
    alignItems: "center",
  },
  icon: {
    marginRight: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});
