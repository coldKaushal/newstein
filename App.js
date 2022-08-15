import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feedpage from "./screen/feedPage";
import BookMark from "./screen/bookmark";
import Profile from "./screen/profile";
import Avatar from "./components/avatar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "./components/tabBarIcon";
import NewsChecker from "./screen/newsChecker";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function TabScreen() {
  return (
    <View style={styles.root}>
      <Tab.Navigator>
        <Tab.Screen
          name="feedpage"
          component={Feedpage}
          options={{
            title: "News Feed",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="bookmark"
          component={BookMark}
          options={{
            title: "BookMark",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="star" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="checker"
          component={NewsChecker}
          options={{
            title: "Checker",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="home" color={color} size={size} />
            ),
          }}
        />
        
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="body"
            component={TabScreen}
            options={({navigation}) =>({
              title: "Newstein",
              headerRight: () => {
                return <Avatar onPress={() => navigation.navigate("profile")} />;
              },
            })}
          />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
