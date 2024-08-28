import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Notification from './components/UI/Notification';

import HomeScreen from "./screens/HomeScreen";
import SkillsScreen from "./screens/SkillsScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import IconButton from "./components/Buttons/IconButton";
import Header from "./components/UI/Header";
import ToggleMode from "./components/UI/ToggleMode";
import { GlobalStyles } from "./constants/styles";
import NativeScreen from "./screens/NativeScreen";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import WorksNavigator from "./components/Navigation/WorksNavigation";
import ProjectsNavigator from "./components/Navigation/ProjectsNavigator";

const BottomTabs = createBottomTabNavigator();


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
        gestureEnabled: true,
        swipeEnabled: true,
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
        component={WorksNavigator}
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
        component={ProjectsNavigator}
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
      <BottomTabs.Screen
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
      />
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style={isDarkMode ? "light" : "dark"} />
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
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
