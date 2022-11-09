import { Image, StyleSheet, Text, View } from "react-native";
import EditIcon from "./editIcon";
const ImageSize = 150;

function UserBanner({ username, email, enableEdit }) {
 //console.log(!username);
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={styles.image}
        />
      </View>
      {enableEdit && <EditIcon />}
      <View style={styles.textContainer}>
        {username && <Text style={styles.boldText}>{username}</Text>}
        <Text style={styles.lightText}>{email}</Text>
      </View>
    </>
  );
}

export default UserBanner;

const styles = StyleSheet.create({
  image: {
    height: ImageSize,
    width: ImageSize,
    borderRadius: ImageSize / 2,
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: "#E8B055",
    borderRadius: ImageSize / 2,
    borderStyle: "dashed",
  },
  textContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  boldText: {
    fontSize: 20,
    fontWeight: "600",
  },
  lightText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9B9FA7",
  },
});
