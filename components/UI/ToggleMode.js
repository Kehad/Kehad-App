import { Modal, StyleSheet, Pressable, View } from "react-native";
import { useState } from 'react'
import { GlobalStyles } from "../../constants/styles";
import IconButton from "../Buttons/IconButton";
import { useColorScheme } from "nativewind";

const ToggleMode = ({ isModalVisible }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
    const systemColorScheme = useColorScheme(); // 'light' or 'dark'
    // console.log(systemColorScheme)
    // Track the color scheme, initially following the system setting
  const [theme, setTheme] = useState(systemColorScheme);
  // console.log("before changing");
  // console.log(theme);

    // Function to switch to light mode manually
    const switchToLightMode = () => {
      setTheme("light");
      // console.log(theme)
    };

    // Function to switch to dark mode manually
    const switchToDarkMode = () => {
      setTheme("dark");
      // console.log(theme)
    };

  // console.log('after changing');
  // console.log(theme);


  return (
    <View style={styles.toggleIcon}>
      <View style={styles.sun}>
        <Pressable>
          <IconButton
            iconTitle="Feather"
            iconName="sun"
            iconSize={24}
            iconColor="black"
            // onPress={() => isModalVisible(false)}
            onPress={switchToLightMode}
          />
        </Pressable>
      </View>
      <View style={styles.moon}>
        <View style={styles.moonView}>
          <Pressable>
            <IconButton
              iconTitle="Ionicons"
              iconName="moon"
              iconSize={24}
              iconColor="black"
              onPress={switchToDarkMode}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
// for light mode -- feather sun
// for dark mode -- Ionicons moon

export default ToggleMode;

const styles = StyleSheet.create({
  toggleIcon: {
    flexDirection: "row",
    // gap: 20,
    width: 120,
    justifyContent: "space-between",
    // flex: 1,
    // padding: 10,
    alignItems: "center",
    borderColor: GlobalStyles.colors.primary50,
    borderWidth: 2,
    borderRadius: 20,
  },
  moon: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    width: "50%",
    borderRadius: 20,
  },
  moonView: {
    borderRadius: 20,
    padding: 3,
    backgroundColor: GlobalStyles.colors.primary50,
    height: "min-height",
  },
  sun: {
    borderRadius: 20,
    borderBottomRightRadius: 0,
    backgroundColor: GlobalStyles.colors.primary50,

    borderTopRightRadius: 0,
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
