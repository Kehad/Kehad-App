import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo, Foundation, Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SkillsScreen from "./screens/SkillsScreen";
import WorksScreen from "./screens/WorksScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/Buttons/IconButton";
import Header from "./components/Header";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function ExpensesOverview() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ExpensesOverview"
        component={ExpensesOverview}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          presentation: "card",
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer
        screenOptions={{
          // headerStyle: { backgroundColor: GlobalStyles.colors.primary50 },
          headerTintColor: "white",
        }}
      >
        <BottomTabs.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: GlobalStyles.colors.background },
            headerTintColor: "white",
            tabBarStyle: { backgroundColor: GlobalStyles.colors.background },
            tabBarActiveTintColor: GlobalStyles.colors.primary50,
            tabBarInActiveTintColor: GlobalStyles.colors.primary500,
            headerTitle: () => <Header />,
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="menu"
                size={24}
                color={tintColor}
                onPress={() => {
                  // navigation.navigate("ContactScreen");
                }}
              />
            ),
          })}
        >
          <BottomTabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Home",
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Foundation name="home" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="SkillsScreen"
            component={SkillsScreen}
            options={{
              title: "Skills",
              tabBarLabel: "Skills",
              tabBarIcon: ({ color, size }) => (
                // <Entypo name="graduation-cap" size={size} color={color} />
                <Ionicons name="medal" size={size} color={color} />
                // <MaterialIcons name="school" size={size} color={color} />
                // <FontAwesome name="graduation-cap" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="WorksScreen"
            component={WorksScreen}
            options={{
              title: "Works",
              tabBarLabel: "Works",
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="work" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="ProjectsScreen"
            component={ProjectsScreen}
            options={{
              title: "Projects",
              tabBarLabel: "Projects",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="layers" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{
              title: "About",
              tabBarLabel: "About",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// facebook-with-circle
// sc-facebook  EvilIcons
// linkedin
// mail
// logo-react