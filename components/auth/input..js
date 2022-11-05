import { Text, TextInput, View } from "react-native";

function Input({
    label,
    keyboardType,
    onChange,
    value,
    placeholder,

}){
    return <View>
        <Text>{label}</Text>
        <TextInput
        autoCapitalize={false}
        autoCorrect={false}
        autoFocus={true}
        keyboardType={keyboardType}
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        />
    </View>
}

export default Input;