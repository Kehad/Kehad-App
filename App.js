import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SkillsScreen from "./screens/SkillsScreen";
import WorksScreen from "./screens/WorksScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/Buttons/IconButton";
import Header from "./components/UI/Header";
import ModalScreen from "./screens/ModalScreen";
import ToggleMode from "./components/UI/ToggleMode";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

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

function BottomTabsNavigator() {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);

  function showModalHandler(isModalVisible) {
    setModalVisible(isModalVisible);
    console.log(modalVisible);
  }
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
          <View style={styles.menu}>
            {/* {!modalVisible && <ToggleMode isModalVisible={showModalHandler} />} */}

            <View style={styles.toggleIcon}>
              <View style={styles.sun}>

                <IconButton
                  iconTitle="Feather"
                  iconName="sun"
                  iconSize={24}
                  iconColor="black"
                  // onPress={() => isModalVisible(false)}
                  />
                  </View>
              <View style={styles.moon}>
                <IconButton
                  iconTitle="Ionicons"
                  iconName="moon"
                  iconSize={24}
                  iconColor="black"
                />
              </View>
            </View>
            <IconButton
              iconName="dots-vertical"
              iconTitle="MaterialCommunityIcons"
              iconSize={40}
              iconColor={tintColor}
              onPress={() => {
                // navigation.navigate("ContactScreen");
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

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    gap: 20,
    // alignItems: 'flex-start',
    justifyContent: "space-between",
    // flex: 1,
  },
  toggleIcon: {
    flexDirection: "row",
    // gap: 20,
    width: 100,
    justifyContent: "space-between",
    // flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "red",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  moon: {
    backgroundColor: GlobalStyles.colors.primary50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 1,
    width: "50%",
  },
  sun: {
    backgroundColor: 'blue'
  }
  
});

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
