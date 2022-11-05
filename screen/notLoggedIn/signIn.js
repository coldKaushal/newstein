import { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, Alert, Pressable } from "react-native";
import Input from "../../components/auth/input.";
import { useNavigation } from "@react-navigation/native";
import { SignInValidation } from "../../components/validator/credential";
import { login } from "../../utilities/auth";
import LoadingOverlay from "../../components/ui/loadingOverlay";
import { AuthContext } from "../../store/authContext";
import CustomButton from "../../components/ui/customButton";
import styles from "../../components/styles/signingStyles";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler() {
    setIsAuthenticating(true);
    if (SignInValidation(email, password)) {
      try {
        const token = await login(email, password);
        authCtx.authenticate(token);
      } catch (e) {
        Alert.alert("wrong", "wut");
        setIsAuthenticating(false);
      }
    } else {
      Alert.alert("wrong", "try again");
      setIsAuthenticating(false);
    }
  }

  function navigate(){
    navigation.replace("signup");
  }


  if (isAuthenticating) {
    return <LoadingOverlay message={"login...."} />;
  }
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.label}>Sign In</Text>
        <View style={styles.innerContainer}>
          <Input
            label={"Email"}
            keyboardType="email-address"
            value={email}
            onChange={setEmail}
            placeholder="example@gmail.com"
          />
          <Input
            label={"Password"}
            keyboardType="default"
            value={password}
            onChange={setPassword}
            placeholder="123456789"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton title="Login" onPress={loginHandler} />
          <Pressable onPress={navigate}>
            <View style={styles.linkTextWrapper}>
              <Text style={styles.linkText}>New to Newstein? Sign up here</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

