import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabScreen from "./screen/loggedIn/wrapperScreen";
import SignIn from "./screen/notLoggedIn/signIn";
import SignUp from "./screen/notLoggedIn/signUp";
import { useContext, useEffect, useState} from "react";
import AuthContextProvider, { AuthContext } from "./store/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="signin"
        component={SignIn}
        options={({ navigation }) => ({
          title: "Newstein",
        })}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={({ navigation }) => ({
          title: "Newstein",
        })}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="body"
        component={TabScreen}
        options={({ navigation }) => ({
          title: "Newstein",
        })}
      />
    </Stack.Navigator>
  );
}


function Navigation(){
  const authCtx = useContext(AuthContext);
  return <NavigationContainer>
  {authCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
</NavigationContainer>
}

function Root(){
  const AuthCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    async function fetchToken(){
        const storedToken = await AsyncStorage.getItem('token');
        if(storedToken){
            AuthCtx.authenticate(storedToken);
        }
        setIsLoading(false);
    }
    fetchToken();  
}, []);

  async function ShowSplashScreen(){
    await SplashScreen.hideAsync();
  }
if(!isLoading){
  ShowSplashScreen();
}
return <Navigation />
}

export default function App() {
  
  return (
    <>
      <StatusBar color="invert" />
      <View style={styles.root}>
        <AuthContextProvider>
          <Root />
        </AuthContextProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
