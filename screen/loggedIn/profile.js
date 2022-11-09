import { StyleSheet, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RootScreen from "./profile/rootScreen";

const Stack = createNativeStackNavigator();

function Profile({ navigation, username, email }) {
  console.log(username);
  return (
    <View style={styles.root}>
      <Stack.Navigator>
        <Stack.Screen
          name="root"
          children={() => <RootScreen username={username} email={email} />}
          options={{
            headerShown: false,
          }}
        />
       
      </Stack.Navigator>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
