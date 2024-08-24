import { Button, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

function ProjectsItem({ description, name, website, imageUrl }) {
  const navigation = useNavigation();
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";

  function itemDetailsHandler() {
    navigation.navigate("ModalScreen", {
      title: name,
      description: description,
      website: website,
      imageUrl: imageUrl,
    });
  }
  return (
    <View
      style={[
        isDarkMode ? styles.darkMode : styles.lightMode,
        styles.container,
      ]}
    >
      <Text style={styles.headerHead}>{name}</Text>
      <Text
        style={[
          isDarkMode ? styles.darkModeText : styles.lightModeText,
          styles.paragraph,
        ]}
      >
        {description}
      </Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={itemDetailsHandler}>
            See Details
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default ProjectsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 25,
  },
  headerHead: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    fontSize: 24,
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "400",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "50%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
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
