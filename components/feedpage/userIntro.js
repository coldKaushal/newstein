import { View, Text, Image, StyleSheet } from "react-native";
const imageSize = 60;
function UserIntro({ username }) {
  return (
    <View style={styles.userIntro}>
      <Image
        source={require("../../assets/images/avatar.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome Back! </Text>
          <Image
            source={require("../../assets/images/hand-wave.png")}
            style={styles.handwave}
          />
        </View>
        <Text style={styles.userName}>{username}</Text>
      </View>
    </View>
  );
}

export default UserIntro;

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 8,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    elevation: 4,
  },
  userIntro: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeText: {
    color: "#9e9e9e",
    fontSize: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
  },
  welcomeTextContainer: {
    flexDirection: "row",
  },
  handwave: {
    height: 20,
    width: 20,
  },
});
