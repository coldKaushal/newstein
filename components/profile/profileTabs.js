import { View, Text, StyleSheet } from "react-native";
import ProfileTabItem from "./profileTabItem";

function ProfileTabs({onPress}) {
  return (
    <View style={styles.root}>
      <ProfileTabItem
        iconName={"call-sharp"}
        title={"Contact Us"}
        bottomBorderStyle={styles.borderBottom}
        onPress = {onPress}
      />
      <ProfileTabItem
        iconName={"md-exit-outline"}
        title={"Log Out"}
        onPress = {onPress}
      />
    </View>
  );
}

export default ProfileTabs;

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: "#e4e4e5",
  },
  root:{
    marginTop: 16,
    paddingHorizontal: 24,
  }
});
