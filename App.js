import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

import HomeScreen from "./screens/HomeScreen";
import SkillsScreen from "./screens/SkillsScreen";
import WorksScreen from "./screens/WorksScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import IconButton from "./components/Buttons/IconButton";
import Header from "./components/UI/Header";
import ModalScreen from "./screens/ModalScreen";
import ToggleMode from "./components/UI/ToggleMode";
import { GlobalStyles } from "./constants/styles";
import NativeScreen from "./screens/NativeScreen";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import { BlurView } from "expo-blur";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function StackNavigator() {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        // headerStyle: {
        //   backgroundColor: isDarkMode && "#282828",
        // },
        headerTintColor: isDarkMode ? "#EFEFEF" : "#282828",
      })}
    >
      <Stack.Screen
        name="WorksScreen"
        component={WorksScreen}
        options={{
          presentation: "card",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{
          presentation: "modal",
          headerStyle: { backgroundColor: "green" },
        }} // This sets the screen as a modal
      />
    </Stack.Navigator>
  );
}

function StackNavigator2() {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          // backgroundColor: isDarkMode
          //   ? GlobalStyles.colors.textBlack
          //   : GlobalStyles.colors.white,
        },
        headerTintColor: isDarkMode ? "#EFEFEF" : "#282828",
      })}
    >
      <Stack.Screen
        name="ProjectsScreen"
        component={ProjectsScreen}
        options={{
          presentation: "card",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{
          presentation: "modal",
          headerTintColor: isDarkMode ? "white" : "black",
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTabsNavigator() {
  const [modalVisible, setModalVisible] = useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";

  function showModalHandler(isModalVisible) {
    // setModalVisible(isModalVisible); // use this if you want to hide the modal when a button is clicked in the toggleMode component
    setModalVisible(!modalVisible); //
  }
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: isDarkMode
            ? GlobalStyles.colors.textBlack
            : GlobalStyles.colors.white,
        },
        headerTitle: ({ tintColor }) => (
          <Header title="Kehad" color={tintColor} />
        ),
        headerTintColor: isDarkMode
          ? GlobalStyles.colors.white
          : GlobalStyles.colors.textBlack,
        tabBarStyle: {
          backgroundColor: isDarkMode
            ? GlobalStyles.colors.textBlack
            : GlobalStyles.colors.white,
        },
        tabBarActiveTintColor: GlobalStyles.colors.primary50,
        tabBarInactiveTintColor: isDarkMode
          ? GlobalStyles.colors.white
          : GlobalStyles.colors.textBlack,
        headerRightContainerStyle: { paddingRight: 10, paddingBottom: 10 },
        headerRight: ({ tintColor }) => (
          <View style={styles.menu}>
            {modalVisible && <ToggleMode isModalVisible={showModalHandler} />}
            <IconButton
              iconName="dots-vertical"
              iconTitle="MaterialCommunityIcons"
              iconSize={40}
              iconColor={tintColor}
              onPress={() => {
                showModalHandler(true);
              }}
            />
          </View>
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
          title: (
            <Header
              title="Skills"
              color={
                isDarkMode
                  ? GlobalStyles.colors.white
                  : GlobalStyles.colors.textBlack
              }
            />
          ),
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
          title: (
            <Header
              title="Works"
              color={
                isDarkMode
                  ? GlobalStyles.colors.white
                  : GlobalStyles.colors.textBlack
              }
            />
          ),
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
          title: (
            <Header
              title="Projects"
              color={
                isDarkMode
                  ? GlobalStyles.colors.white
                  : GlobalStyles.colors.textBlack
              }
            />
          ),
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
          title: (
            <Header
              title="About"
              color={
                isDarkMode
                  ? GlobalStyles.colors.white
                  : GlobalStyles.colors.textBlack
              }
            />
          ),
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
          title: (
            <Header
              title="Contact"
              color={
                isDarkMode
                  ? GlobalStyles.colors.white
                  : GlobalStyles.colors.textBlack
              }
            />
          ),
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} />
          ),
        }}
      />
      {/* <BottomTabs.Screen
        name="NativeScreen"
        component={NativeScreen}
        options={{
          headerTitle: <Header title="Native" />,
          title: <Header title="Native" />,
          tabBarLabel: "Native",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} />
          ),
        }}
      /> */}
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    // gap: ,
    justifyContent: "space-between",
  },
  darkMode: {
    backgroundColor: GlobalStyles.colors.textBlack,
  },
  darkModeText: {
    color: GlobalStyles.colors.white,
  },
  lightMode: {
    backgroundColor: GlobalStyles.colors.white100,
  },
  lightModeText: {
    color: GlobalStyles.colors.textBlack,
  },
});

function SemiApp() {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";
  return (
    <>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <SemiApp />
    </Provider>
  );
}

export default App;

// facebook-with-circle
// sc-facebook  EvilIcons
// linkedin
// mail
// logo-react
