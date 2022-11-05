import { StyleSheet, Text, View } from "react-native";
import Settings from "./settings";
import Feedpage from "./feedPage";
import BookMark from "./bookmark";
import Profile from "./profile";
import TabBarIcon from "../../components/tabBarIcon";
import NewsChecker from "./newsChecker";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function TabScreen() {
    return (
      <View style={styles.root}>
        <Tab.Navigator>
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
            children={() => (
              <Profile username="Kaushal Aggarwal" email="kauagg111@gmail.com" />
            )}
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

  const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
  });