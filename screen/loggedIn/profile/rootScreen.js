import { useContext, useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserBanner from "../../../components/profile/userBanner";
import ProfileTabs from "../../../components/profile/profileTabs";
import { settingData } from "../../../data/settingsData";
import PreferenceSwitch from "../../../components/settings/preferenceSwitch";
import { AuthContext } from "../../../store/authContext";
import EditIcon from "../../../components/profile/editIcon";
import { UpdateUserProfile } from "../../../utilities/userAPI";
const ImageSize = 150;

export default function RootScreen() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  const storedPreference = authCtx.preference;
  const [preference, updatePreference] = useState(storedPreference);
  const [enableEdit, setEnableEdit] = useState(false);
  const username = authCtx.name;
  const email = authCtx.email;

  function handlePress(name) {
    console.log(name);
    if (name === "Log Out") {
      authCtx.logout();
    }
  }
  function handleEditProfile() {
    setEnableEdit(!enableEdit);
  }
  function handleSubmit(){
    const data = {
      name: authCtx.name,
      email: authCtx.email,
      preference: preference,

    };
    UpdateUserProfile(data).then((response)=>{
      console.log(response);
      handleEditProfile();
    }).catch((err)=>{
      console.log(err);
      handleEditProfile();
    })
  }
  function handleToggle(field) {
    const val = preference[field];
    console.log(val);
    updatePreference((prev) => {
      return {
        ...prev,
        [field]: val === "true" ? "false" : "true",
      };
    });
  }

  function createPreferenceSwitch(item) {
    return (
      <PreferenceSwitch
        key={item.id}
        heading={item.heading}
        description={item.description}
        value={preference[item.id] === "true"}
        onToggle={() => handleToggle(item.id)}
        disable={!enableEdit}
      />
    );
  }
  return (
    <ScrollView>
      <View style={styles.rootInner}>
        <View style={styles.centerContent}>
          <UserBanner username={username} email={email} enableEdit={enableEdit} />
        </View>
        
          <View style={styles.iconWrapper}>
            <Pressable onPress={handleEditProfile}>
              {enableEdit ? <Button onPress={handleSubmit} title="save"/> : <EditIcon />}
            </Pressable>
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootInner: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 16,
  },
  iconWrapper: {
    position: "absolute",
    right: 10,
    top: 30,
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
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
