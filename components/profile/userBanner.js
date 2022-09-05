import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const ImageSize = 150;

function UserBanner({username, email}) {
  console.log(username);
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.editIconContainerOuter}>
        <View style={styles.editIconContainer}>
          <FontAwesome5 name="pencil-alt" size={24} color="white" />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>{username}</Text>
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
    editIconContainer: {
      backgroundColor: "black",
      height: 40,
      width: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    editIconContainerOuter: {
      marginTop: -20,
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      elevation: 4,
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
  