import { Pressable, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
function Avatar({onPress}){
    return <View>
        <Pressable onPress={onPress}>
            <Ionicons name="person-circle" size={24} />
        </Pressable>
    </View>
}

export default Avatar;