import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";
import WorksScreen from "../../screens/WorksScreen";
import ModalScreen from "../../screens/ModalScreen";

const Stack = createNativeStackNavigator();

function WorksNavigator() {
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

export default WorksNavigator;