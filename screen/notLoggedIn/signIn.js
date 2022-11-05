import { useContext, useState } from "react";
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import Input from "../../components/auth/input.";
import { useNavigation } from "@react-navigation/native";
import { SignInValidation } from "../../components/validator/credential";
import { login } from "../../utilities/auth";
import LoadingOverlay from "../../components/ui/loadingOverlay";
import { AuthContext } from "../../store/authContext";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx = useContext(AuthContext);

    async function loginHandler(){
      setIsAuthenticating(true);
      if(SignInValidation(email, password)){
        try{
          const token = await login(email, password);
          authCtx.authenticate(token);
        }catch(e){
          Alert.alert('wrong', 'wut');
          setIsAuthenticating(false);
        }
      }else{
        Alert.alert('wrong', 'try again');
        setIsAuthenticating(false);
      }
      
    }
    if(isAuthenticating){
      return <LoadingOverlay message={"login...."} />
    }
  return (
    <View>
      <Text>Sign In</Text>
      <View>
        <Input
          label={"email"}
          keyboardType="email-address"
          value={email}
          onChange={setEmail}
          placeholder="example@gmail.com"
        />
        <Input
          label={"password"}
          keyboardType="default"
          value={password}
          onChange={setPassword}
          placeholder="123456789"
        />
      </View>
      <Button title="sign up" onPress={() => navigation.replace("signup")} />
      <Button title="submit" onPress={loginHandler} />
    </View>
  );
}


const styles = StyleSheet.create({

});