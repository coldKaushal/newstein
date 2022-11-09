import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({ label, keyboardType, onChange, value, placeholder, onPressIn }) {
  const [borderColor, setBorderColor] = useState("black");

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        caretHidden={false}
        autoCapitalize={false}
        autoCorrect={false}
        onPressIn={onPressIn}
        keyboardType={keyboardType}
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        onFocus={() => setBorderColor("blue")}
        onEndEditing={() => setBorderColor("black")}
        style={[
          styles.input,
          {
            borderColor: borderColor,
            borderWidth: borderColor === "blue" ? 1 : 0.5,
          },
        ]}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  root: {},
  label: {
    fontSize: 20,
    color: "#A4A9B0",
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 20,
    height: 50,
    marginVertical: 5,
    padding: 10,
    borderColor: "black",
  },
  activeInput: {
    borderColor: "#AAB5C9",
  },
});
