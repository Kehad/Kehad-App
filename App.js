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
import ModalScreen from "./screens/ModalScreen";

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

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WorksScreen"
        component={WorksScreen}
        // headerShown= false
        options={{
          presentation: "card",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{ presentation: "modal" }} // This sets the screen as a modal
      />
    </Stack.Navigator>
  );
}

function StackNavigator2() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectsScreen"
        component={ProjectsScreen}
        // headerShown= false
        options={{
          presentation: "card",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{ presentation: "modal" }} // This sets the screen as a modal
      />
    </Stack.Navigator>
  );
}
// const ModalScreen = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen
//           name="MyModal"
//           component={ModalScreen}
//           options={{ presentation: "modal" }} // This sets the screen as a modal
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.white },
        headerTintColor: GlobalStyles.colors.textBlack,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.white },
        tabBarActiveTintColor: GlobalStyles.colors.primary50,
        tabBarInactiveTintColor: GlobalStyles.colors.textBlack,
        headerTitle: () => <Header title="Kehad" />,
        headerRightContainerStyle: { paddingRight: 10, paddingBottom: 10 },
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="dots-vertical"
            size={40}
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
        headerShown={true}
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
          headerTitle: <Header title="Skills" />,
          title: <Header title="Skills" />,
          tabBarLabel: "Skills",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medal" size={size} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Works"
        component={StackNavigator}
        options={{
          headerTitle: <Header title="Works" />,
          title: <Header title="Works" />,
          tabBarLabel: "Works",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="work" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Projects"
        component={StackNavigator2}
        options={{
          headerTitle: <Header title="Projects" />,
          title: <Header title="Projects" />,
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
          headerTitle: <Header title="About" />,
          title: <Header title="About" />,
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          headerTitle: <Header title="Contact" />,
          title: <Header title="Contact" />,
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </>
  );
}

// facebook-with-circle
// sc-facebook  EvilIcons
// linkedin
// mail
// logo-react
