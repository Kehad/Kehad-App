import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";
import WorksScreen from "../../screens/WorksScreen";
import ModalScreen from "../../screens/ModalScreen";
import { GlobalStyles } from "../../constants/styles";

const Stack = createNativeStackNavigator();

function WorksNavigator() {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";
  console.log(isDarkMode);
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          // backgroundColor: isDarkMode && "#282828",
          // backgroundColor: "green",
          backgroundColor: isDarkMode ? "#2e2e2e" : "#efefef",
        },
        // headerTintColor: isDarkMode ? "#EFEFEF" : "#282828",
        headerTintColor: "red",
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
          headerStyle: {
            // backgroundColor: "green",
            color: "pink",
            // color: isDarkMode ? "#efefef" : "black",
            // backgroundColor: isDarkMode ? "#2e2e2e" : "#efefef",
          },
          // headerStyle: 'red',
          headerTintColor: isDarkMode ? "#efefef" : "black",
        }} // This sets the screen as a modal
      />
    </Stack.Navigator>
  );
}

export default WorksNavigator;
