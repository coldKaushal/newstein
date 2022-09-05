import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PreferenceSwitch from "../components/settings/preferenceSwitch";
import { DATA } from "../data/settingsData";
import { rootStyle } from "../utilities/rootStyles";
function Settings() {

    const [preference, updatePreference] = useState({
        search: true,
        interaction: true,
        location: true,
        category: true,

    })
    function handleToggle(field){
        const val = preference[field];
        console.log(val);
        updatePreference(prev => {
            return {
                ...prev,
                [field]: !val,
            }
        });
    }

  function createPreferenceSwitch(item){
    return <PreferenceSwitch
    key={item.id}
    heading={item.heading}
    description={item.description}
    value={preference[item.id]}
    onToggle={() => handleToggle(item.id)}
  />
  }
  return (
    <View style={[rootStyle.root, styles.root]}>
      <Text style={styles.title}>Preference</Text>
      <Text>
        Update your preferences to get more personlaised news articles in your
        feed
      </Text>
      <View style={styles.preferenceWrapper}>
        {DATA.map(createPreferenceSwitch)}
      </View>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  preferenceWrapper:{
    marginTop: 16,
  }
});
