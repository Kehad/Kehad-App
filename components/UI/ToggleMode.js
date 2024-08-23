import { Modal, StyleSheet, Pressable, View } from "react-native";
import { useState } from 'react'
import { GlobalStyles } from "../../constants/styles";
import IconButton from "../Buttons/IconButton";
import { useColorScheme } from "nativewind";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../store/themeSlice";

const ToggleMode = ({ isModalVisible }) => {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.theme.theme)

  const { colorScheme, toggleColorScheme } = useColorScheme();
    const systemColorScheme = useColorScheme(); // 'light' or 'dark'
    // console.log(systemColorScheme)

  // Create state for the theme, defaulting to the system color scheme
  const [theme, setTheme] = useState(systemColorScheme);

  // Function to switch to light mode
  const switchToLightMode = () => {
    setTheme("light");
    dispatch(setLightMode())
  };

  // Function to switch to dark mode
  const switchToDarkMode = () => {
    setTheme("dark");
    dispatch(setDarkMode())
  };


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
