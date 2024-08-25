import { StyleSheet, Text, View } from "react-native";

import IconButton from "../Buttons/IconButton";
import { GlobalStyles } from "../../constants/styles";
import { useSelector } from "react-redux";

const SkillsList = function ({
  name,
  iconTitle,
  iconName,
  iconSize,
  iconColor,
}) {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";

  return (
    <View style={styles.container}>
      <View
        style={[isDarkMode ? styles.darkMode : styles.lightMode, styles.box]}
      >
        <Text style={styles.iconText}>{name}</Text>
        <IconButton
          iconTitle={iconTitle}
          iconName={iconName}
          iconSize={iconSize}
          iconColor={iconColor}
        />
      </View>
    </View>
  );
};

export default SkillsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    padding: 16,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  iconText: {
    fontSize: 20,
    color: GlobalStyles.colors.primary50,
  },
  darkMode: {
    backgroundColor: GlobalStyles.colors.white100,
  },
  darkModeText: {
    color: GlobalStyles.colors.white,
  },
  lightMode: {
    backgroundColor: GlobalStyles.colors.textBlack,
  },
  lightModeText: {
    color: GlobalStyles.colors.textBlack,
  },
});


