import { useContext, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserBanner from "../../components/profile/userBanner";
import ProfileTabs from "../../components/profile/profileTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonalInformation from "./profile/perosnalInformation";
import { settingData } from "../../data/settingsData";
import PreferenceSwitch from "../../components/settings/preferenceSwitch";
import { AuthContext } from "../../store/authContext";

const Stack = createNativeStackNavigator();
const ImageSize = 150;

function RootScreen({ username, email }) {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  const [preference, updatePreference] = useState({
    search: true,
    interaction: true,
    location: true,
    category: true,
  });
  function handlePress(name) {
    console.log(name);
    if(name==='Log Out'){
      authCtx.logout();
    }
    //navigation.navigate(name);
  }
  function handleEditProfile() {}

  function handleToggle(field) {
    const val = preference[field];
    console.log(val);
    updatePreference((prev) => {
      return {
        ...prev,
        [field]: !val,
      };
    });
  }

  function createPreferenceSwitch(item) {
    return (
      <PreferenceSwitch
        key={item.id}
        heading={item.heading}
        description={item.description}
        value={preference[item.id]}
        onToggle={() => handleToggle(item.id)}
      />
    );
  }
  return (
    <ScrollView>
      <View style={styles.rootInner}>
        <View style={styles.centerContent}>
          <UserBanner username={username} email={email} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Edit Profile" onPress={handleEditProfile} />
        </View>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Preferences</Text>
        </View>
        <View style={styles.preferenceWrapper}>
          {settingData.map(createPreferenceSwitch)}
        </View>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Accounts</Text>
        </View>
        <ProfileTabs onPress={handlePress} />
      </View>
    </ScrollView>
  );
}

function Profile({ navigation, username, email }) {
  console.log(username);
  return (
    <View style={styles.root}>
      <Stack.Navigator>
        <Stack.Screen
          name="root"
          children={() => <RootScreen username={username} email={email} />}
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
    paddingVertical: 16,
  },
  centerContent: {
    alignItems: "center",
  },
  buttonWrapper: {
    alignItems: "center",
    marginVertical: 16,
  },
  preferenceWrapper: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  headingWrapper: {
    backgroundColor: "#ccc",
    padding: 4,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  heading:{
    fontSize: 16,
    fontWeight: 'bold'
  }
});
