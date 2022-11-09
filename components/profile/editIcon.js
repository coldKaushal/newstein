import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


export default function EditIcon() {
  return (
    <View style={styles.editIconContainerOuter}>
      <View style={styles.editIconContainer}>
        <FontAwesome5 name="pencil-alt" size={24} color="white" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
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
});