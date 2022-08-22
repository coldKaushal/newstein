import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./screen/settings";
import Feedpage from "./screen/feedPage";
import BookMark from "./screen/bookmark";
import Profile from "./screen/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "./components/tabBarIcon";
import NewsChecker from "./screen/newsChecker";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function TabScreen() {
  return (
    <View style={styles.root}>
      <Tab.Navigator
      >
        <Tab.Screen
          name="feedpage"
          children={() => <Feedpage username="Kaushal Aggarwal" />}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="home" color={color} size={size} />
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
              <TabBarIcon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="bookmark"
          component={BookMark}
          options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="bookmarks" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            title: "Personalize",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="settings" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          children={() => <Profile username="Kaushal Aggarwal" email="kauagg111@gmail.com" />}
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name="person-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <>
    <StatusBar color="invert" />
    <View style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          
        }}>
          <Stack.Screen
            name="body"
            component={TabScreen}
            options={({ navigation }) => ({
              title: "Newstein",
            })}
          />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
