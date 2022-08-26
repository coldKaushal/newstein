import { View, Text, StyleSheet } from "react-native";
import { rootStyle } from "../../utilities/rootStyles";
import { PERSONALINFORMATION } from "../../data/informativeData";

function PersonalInformation({username, email}){
    return <View style={rootStyle.root}>
        <Text style={styles.heading}>Personal Information</Text>
        <View>
            <Text style={styles.subheading}>
                {PERSONALINFORMATION.subheading}
            </Text>
        </View>
    </View>
}

export default PersonalInformation;

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subheading:{
        fontWeight: '500',
        color: '#6C7880'
    },
    userbanner:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})