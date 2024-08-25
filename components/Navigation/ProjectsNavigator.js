import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import ProjectsScreen from "../../screens/ProjectsScreen";
import ModalScreen from "../../screens/ModalScreen";

const Stack = createNativeStackNavigator();


function ProjectsNavigator() {
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

export default ProjectsNavigator;