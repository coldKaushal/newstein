import { View, Text, StyleSheet } from "react-native";
import ProfileTabItem from "./profileTabItem";

function ProfileTabs() {
  return (
    <View style={styles.root}>
      <ProfileTabItem
        iconName={"person-circle-outline"}
        title={"Personal Information"}
        bottomBorderStyle={styles.borderBottom}
      />
      <ProfileTabItem
        iconName={"settings-sharp"}
        title={"Personalize"}
        bottomBorderStyle={styles.borderBottom}
      />
      <ProfileTabItem
        iconName={"call-sharp"}
        title={"Contact Us"}
        bottomBorderStyle={styles.borderBottom}
      />
      <ProfileTabItem
        iconName={"md-exit-outline"}
        title={"Log Out"}
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
  }
});
