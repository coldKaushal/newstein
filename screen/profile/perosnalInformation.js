import { View, Text, StyleSheet, Image } from "react-native";
import { rootStyle } from "../../utilities/rootStyles";
import { PERSONALINFORMATION } from "../../data/informativeData";

function PersonalInformation({username, email}){
    return <View style={[rootStyle.root, styles.root]}>
        <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require('../../assets/images/avatar.png')} />
        </View>
    </View>
}

export default PersonalInformation;

const styles = StyleSheet.create({
    root:{
        backgroundColor: 'white'
    },
    imageWrapper:{
        alignItems: 'center',
        borderRadius: 50,
        overflow: 'hidden',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,

    }
});