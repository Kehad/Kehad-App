import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";
import WorksScreen from "../../screens/WorksScreen";
import ModalScreen from "../../screens/ModalScreen";


const Stack = createNativeStackNavigator();

function WorksNavigator() {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";
  console.log(isDarkMode);
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: isDarkMode ? "#2e2e2e" : "#efefef",
        },
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
            color: "pink",
          },
          headerTintColor: isDarkMode ? "#efefef" : "black",
        }} 
      />
    </Stack.Navigator>
  );
}

export default WorksNavigator;
