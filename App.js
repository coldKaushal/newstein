import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabScreen from "./screen/loggedIn/wrapperScreen";
import SignIn from "./screen/notLoggedIn/signIn";
import SignUp from "./screen/notLoggedIn/signUp";
import { useContext, useState } from "react";
import AuthContextProvider, { AuthContext } from "./store/authContext";
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

export default function App() {
  return (
    <>
      <StatusBar color="invert" />
      <View style={styles.root}>
        <AuthContextProvider>
          <Navigation />
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
