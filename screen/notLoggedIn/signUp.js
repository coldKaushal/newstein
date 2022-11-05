import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/auth/input.";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { createUser } from "../../utilities/auth";
import { Alert } from "react-native";
import { SignUpValidation } from "../../components/validator/credential";
import LoadingOverlay from "../../components/ui/loadingOverlay";
import { AuthContext } from "../../store/authContext";
import CustomButton from "../../components/ui/customButton";
import styles from "../../components/styles/signingStyles";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [confEmail, setConfEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  const navigation = useNavigation();

  async function signUpHandler() {
    setIsAuthenticating(true);
    if (SignUpValidation(email, confEmail, password, confPassword)) {
      try {
        const token = await createUser(email, password);
        authCtx.authenticate(token);
      } catch (e) {
        setIsAuthenticating(false);
      }
    } else {
      Alert.alert("wrong", "try again");
    }
  }
  function navigate(){
    navigation.replace("signin");
  }
  if (isAuthenticating) {
    return <LoadingOverlay message={"creating user...."} />;
  }
  return (
    <View style={styles.root}>
      <View style={styles.container}>
      <Text style={styles.label}>Sign Up</Text>
      <View style={styles.innerContainer}>
        <Input
          label={"Email"}
          keyboardType="email-address"
          value={email}
          onChange={setEmail}
          placeholder="example@gmail.com"
        />
        <Input
          label={"Confirm email"}
          keyboardType="email-address"
          value={confEmail}
          onChange={setConfEmail}
          placeholder="example@gmail.com"
        />
        <Input
          label={"Password"}
          keyboardType="default"
          value={password}
          onChange={setPassword}
          placeholder="123456789"
        />
        <Input
          label={"Confirm password"}
          keyboardType="default"
          value={confPassword}
          onChange={setConfPassword}
          placeholder="123456789"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton title="Sign up" onPress={signUpHandler} />
        <Pressable onPress={navigate}>
          <View style={styles.linkTextWrapper}>
            <Text style={styles.linkText}>Already have a account? Login here</Text>
          </View>
        </Pressable>
      </View>
      </View>
    </View>
  );
}

