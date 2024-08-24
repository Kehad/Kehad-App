import { Button, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import SocialLinks from "../components/UI/SocialLinks";
import Title from "../components/UI/Title";
import WorksList from "../components/Works/WorksList";
import { useSelector } from "react-redux";

function WorksScreen() {
    const themes = useSelector((state) => state.theme.theme);
    const isDarkMode = themes === "dark";
  return (
    <View style={[isDarkMode ? styles.darkMode : styles.lightMode, styles.container]}>
      {/* <Title>Works</Title> */}
      
      <WorksList />
      
    </View>
  );
}

export default WorksScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: GlobalStyles.colors.white,
    flex: 1,
    padding: 24,
  },
  headerHead: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    fontSize: 50,
  },
  name: {
    fontSize: 36,
    color: GlobalStyles.colors.textBlack,
    marginBottom: 24,
  },
  paragraph: {
    fontSize: 20,
    color: GlobalStyles.colors.textBlack,
    lineHeight: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
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
