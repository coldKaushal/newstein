import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { rootStyle } from "../utilities/rootStyles";
import UserBanner from "../components/profile/userBanner";
import ProfileTabs from "../components/profile/profileTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonalInformation from "./profile/perosnalInformation";

const Stack = createNativeStackNavigator();
const ImageSize = 150;

function RootScreen( {username, email }) {
  const navigation = useNavigation();
  function handlePress(name) {
    console.log(name);
    navigation.navigate(name);
  }

  return (
    <View style={styles.rootInner}>
      <View style={styles.centerContent}>
        <UserBanner username={username} email={email} />
      </View>
      <ProfileTabs onPress={handlePress} />
    </View>
  );
}

function Profile({navigation, username, email }) {
  console.log(username);
  return (
    <View style={styles.root}>
      <Stack.Navigator>
        <Stack.Screen
          name="root"
          children={() => (<RootScreen username={username} email={email}  />)}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Personal Information"
          children={() => (
            <PersonalInformation username={username} email={email} />
          )}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootInner: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  centerContent: {
    alignItems: "center",
  },
});
