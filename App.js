import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabScreen from "./screen/loggedIn/wrapperScreen";
import SignIn from "./screen/notLoggedIn/signIn";
import SignUp from "./screen/notLoggedIn/signUp";
import { useContext, useEffect, useState } from "react";
import AuthContextProvider, { AuthContext } from "./store/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { GetUserProfile } from "./utilities/userAPI";
import LoadingOverlay from "./components/ui/loadingOverlay";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SplashScreen.preventAutoHideAsync()
//   .then((result) =>
//     console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
//   )
//   .catch(err => console.log(err));

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
    <TabScreen />
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

function Root() {
  const AuthCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchToken() {
    AsyncStorage.getItem("token")
      .then((storedToken) => {
        AsyncStorage.getItem("email")
          .then((storedEmail) => {
            if (storedToken) {
              console.log(storedEmail);
              GetUserProfile(storedEmail)
                .then((response) => {
                  console.log("token");
                  console.log(response.data);
                  AuthCtx.authenticate(
                    storedToken,
                    storedEmail,
                    response.data.name,
                    response.data.preference
                  );
                  
                })
                .catch((err) => console.log(err));
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    return "fetched";
  }
  useEffect(() => {
    console.log("started fresh");
    try {
     fetchToken().then(()=>{
      setIsLoading(false);
     });
    } catch (e) {
      console.log("unable to fetch user");
    }
  }, []);

  return isLoading ? <LoadingOverlay message={"loading"} /> : <Navigation />
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
