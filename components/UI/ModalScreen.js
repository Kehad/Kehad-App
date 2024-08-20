import { Button, StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

import PrimaryButton from "../Buttons/PrimaryButton";

function ModalScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.headerHead}>This us a goof</Text>
      <Text style={styles.paragraph}>
        o show a modal when a button is pressed using
        @react-navigation/native-stack in a React Native Expo app, you can use a
        Modal screen within your navigation stack. React Navigation provides a
        clean way to handle modals using its Modal presentation mode.
      </Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Visit Website</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default ModalScreen;

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
