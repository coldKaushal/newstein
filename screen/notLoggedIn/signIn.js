import { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, Alert, Pressable } from "react-native";
import Input from "../../components/auth/input";
import { useNavigation } from "@react-navigation/native";
import { EmailValidator, PasswordValidator, SignInValidation } from "../../components/validator/credential";
import { login } from "../../utilities/auth";
import LoadingOverlay from "../../components/ui/loadingOverlay";
import { AuthContext } from "../../store/authContext";
import CustomButton from "../../components/ui/customButton";
import styles from "../../components/styles/signingStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetUserProfile } from "../../utilities/userAPI";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);
  const navigation = useNavigation();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);


  async function fetchUser() {
    AsyncStorage.getItem("token").then((storedToken) => {
      AsyncStorage.getItem("email").then((storedEmail) => {
        if (storedToken) {
          console.log(storedEmail);
          GetUserProfile(storedEmail).then((response) => {
            console.log("token");
            console.log(response.data);
            authCtx.authenticate(
              storedToken,
              storedEmail,
              response.data.name,
              response.data.preference
            );
          });
        }
      });
    });
    
  }

  async function loginHandler() {
    setIsAuthenticating(true);
    if (SignInValidation(email, password)) {
      try {
        const token = await login(email, password);
        authCtx.authenticate(token, email);
        fetchUser();


      } catch (e) {
        Alert.alert("Error", "Something went wrong, make sure you have entered valid credentials and try again or try again after some time");
        setIsAuthenticating(false);
      }
    } else {
      Alert.alert("Invalid", "Credentials entered are invalid, please try again.");
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
            onPressIn={() => setEmailEntered(true)}
          />
          {!EmailValidator(email) && emailEntered && <Text style={styles.errorMessage}>Invalid Email Address</Text>}
          <Input
            label={"Password"}
            keyboardType="default"
            value={password}
            onChange={setPassword}
            placeholder="123456789"
            onPressIn={() => setPasswordEntered(true)}
          />
          {!PasswordValidator(password) && passwordEntered && <Text style={styles.errorMessage}>Password too short</Text>}
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