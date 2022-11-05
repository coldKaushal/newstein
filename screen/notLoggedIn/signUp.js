import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/auth/input.";
import {View, Text, Button} from "react-native";
import { createUser } from "../../utilities/auth";
import { Alert } from "react-native";
import { SignUpValidation } from "../../components/validator/credential";
import LoadingOverlay from "../../components/ui/loadingOverlay";
import { AuthContext } from "../../store/authContext";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [confEmail, setConfEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx = useContext(AuthContext);

    const navigation = useNavigation();

    async function signUpHandler(){
      setIsAuthenticating(true);
      if(SignUpValidation(email, confEmail, password, confPassword)){
        try{
          const token = await createUser(email, password);
        authCtx.authenticate(token)
        }catch(e){
          setIsAuthenticating(false);
        }
      }else{
        Alert.alert('wrong', 'try again');
       
      }
      
    }
  if(isAuthenticating){
    return <LoadingOverlay message={"creating user...."} />
  }
  return (
    <View>
      <Text>Sign Up</Text>
      <View>
        <Input
          label={"email"}
          keyboardType="email-address"
          value={email}
          onChange={setEmail}
          placeholder="example@gmail.com"
        />
        <Input
          label={"confirm email"}
          keyboardType="email-address"
          value={confEmail}
          onChange={setConfEmail}
          placeholder="example@gmail.com"
        />
        <Input
          label={"password"}
          keyboardType="default"
          value={password}
          onChange={setPassword}
          placeholder="123456789"
        />
        <Input
          label={"confirm password"}
          keyboardType="default"
          value={confPassword}
          onChange={setConfPassword}
          placeholder="123456789"
        />
      </View>
      <Button title="sign up" onPress={() => navigation.replace("signin")} />
      <Button title="submit" onPress={signUpHandler} />
    </View>
  );
}
