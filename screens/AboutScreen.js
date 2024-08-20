import { Button, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import SocialLinks from "../components/UI/SocialLinks";
import Title from "../components/UI/Title";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title>About me</Title>
      <Text style={styles.paragraph}>
        I've always been fascinated by the intersection of design and
        technology, and I've made it my mission to bring beautiful,
        user-friendly websites to life. With 5+ years of experience in the
        industry, I've had the privilege of working on a diverse range of
        projects, each one presenting a unique challenge that I've eagerly
        tackled.
      </Text>
      <SocialLinks />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>hire me</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
    padding: 24,
  },
  headerHead: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    fontSize: 50,
  },
  paragraph: {
    fontSize: 20,
    color: GlobalStyles.colors.textBlack,
    lineHeight: 30,
    fontWeight: '400'
  },
  buttonsContainer: {
    flexDirection: "row",
    width: '50%'
  },
  buttonContainer: {
    flex: 1,
  },
});
