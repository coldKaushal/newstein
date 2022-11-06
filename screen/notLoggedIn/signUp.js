import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/auth/input.";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { createUser } from "../../utilities/auth";
import { Alert } from "react-native";
import { EmailValidator, PasswordValidator, SignUpValidation } from "../../components/validator/credential";
import LoadingOverlay from "../../components/ui/loadingOverlay";
import { AuthContext } from "../../store/authContext";
import CustomButton from "../../components/ui/customButton";
import styles from "../../components/styles/signingStyles";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [confEmail, setConfEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);
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
        Alert.alert("Error", "Something went wrong, make sure you have entered valid credentials and try again or try again after some time");
        
      }
    } else {
      Alert.alert("Invalid", "Credentials entered are invalid, please try again.");
    }
    setIsAuthenticating(false);
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
          onPressIn={() => setEmailEntered(true)}
        />
        {!EmailValidator(email) && emailEntered && <Text style={styles.errorMessage}>Invalid email address</Text>}
        <Input
          label={"Confirm email"}
          keyboardType="email-address"
          value={confEmail}
          onChange={setConfEmail}
          placeholder="example@gmail.com"
        />
        {email!==confEmail && <Text style={styles.errorMessage}>Email is not matching</Text>}
        <Input
          label={"Password"}
          keyboardType="default"
          value={password}
          onChange={setPassword}
          placeholder="123456789"
          onPressIn={() => setPasswordEntered(true)}
        />
        {!PasswordValidator(password) && passwordEntered && <Text style={styles.errorMessage}>Password too short</Text>}
        <Input
          label={"Confirm password"}
          keyboardType="default"
          value={confPassword}
          onChange={setConfPassword}
          placeholder="123456789"
        />
        {email!==confEmail && <Text style={styles.errorMessage}>Password is not matching</Text>}
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

