import { Button, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import SocialLinks from "../components/UI/SocialLinks";
import Title from "../components/UI/Title";
import ProjectsList from "../components/Projects/ProjectsList";

function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <Title>Projects</Title>

      <ProjectsList />
    </View>
  );
}

export default ProjectsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white100,
    flex: 1,
    padding: 24,
  },
  headerHead: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
    backgroundColor: GlobalStyles.colors.textBlack,
    fontWeight: "bold",
    fontSize: 40,
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
});
