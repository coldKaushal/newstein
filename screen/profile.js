import { Image, StyleSheet, Text, View } from "react-native";
import { rootStyle } from "../utilities/rootStyles";
import UserBanner from "../components/profile/userBanner";
import ProfileTabs from "../components/profile/profileTabs";
const ImageSize = 150;

function Profile({ username, email }) {
  return (
    <View style={[rootStyle.root]}>
      <View style={styles.centerContent}>
        <UserBanner username={username} email={email} />
      </View>
      <ProfileTabs />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  centerContent: {
    alignItems: "center",
  },
});
