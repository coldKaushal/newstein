import {Text} from "react-native";
import styles from "../styles/signingStyles";


export default function TextHeading({title}){
    return <Text style={styles.label}>{title}</Text>
}