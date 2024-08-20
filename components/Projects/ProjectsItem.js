import { Button, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import PrimaryButton from "../Buttons/PrimaryButton";

function ProjectsItem({ description, name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerHead}>{name}</Text>
      <Text style={styles.paragraph}>{description}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Visit Website</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default ProjectsItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
  },
  headerHead: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    fontSize: 24,
  },
  paragraph: {
    fontSize: 20,
    color: GlobalStyles.colors.textBlack,
    lineHeight: 30,
    fontWeight: "400",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "50%",
  },
  buttonContainer: {
    flex: 1,
  },
});
