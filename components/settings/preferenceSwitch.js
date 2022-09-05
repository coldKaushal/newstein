import { View, Text, Switch, StyleSheet } from "react-native";

function PreferenceSwitch({ heading, description, value, onToggle }) {
  return (
    <View style={styles.root}>
      <View style={styles.text}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#006AFE" }}
        thumbColor={value ? "#fff" : "#f4f3f4"}
        value={value}
        onValueChange={onToggle}
      />
    </View>
  );
}

export default PreferenceSwitch;

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    borderRadius: 8,
    marginVertical: 8,
    paddingBottom: 8,
    justifyContent: "space-between",
  },
  text: {
    width: "80%",
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    color: "#9DA0A7",
  },
});
