import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import ProjectsScreen from "../../screens/ProjectsScreen";
import ModalScreen from "../../screens/ModalScreen";
import { GlobalStyles } from "../../constants/styles";

const Stack = createNativeStackNavigator();


function ProjectsNavigator() {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {

        },
        
      })}
    >
      <Stack.Screen
        name="ProjectsScreen"
        component={ProjectsScreen}
        options={{

          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{
          presentation: "modal",
          headerTintColor: isDarkMode ? "#efefef" : "black",
          headerTintColor: "#000000",
          headerStyle: {
           
            backgroundColor: "green",
            backgroundColor: isDarkMode ? "#2e2e2e" : "#efefef",
          },
          animations: {
            showModal: {
              enter: {
                enabled: true,
                alpha: {
                  from: 0,
                  to: 1,
                  duration: 300,
                },
              },
              exit: {
                enabled: true,
                alpha: {
                  from: 1,
                  to: 0,
                  duration: 300,
                },
              },
            },
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default ProjectsNavigator;