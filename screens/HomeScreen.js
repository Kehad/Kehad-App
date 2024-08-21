import { Button, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import SocialLinks from "../components/UI/SocialLinks";
import Title from "../components/UI/Title";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();

  function aboutMeHandler() {
    navigation.navigate("AboutScreen");
  }

  function hireMeHandler() {
    navigation.navigate("AboutScreen");
  }

  return (
    <View style={styles.container}>
      <Title>Hi.</Title>
      <Text style={styles.name}>I'm Kehinde Adigun</Text>
      <Text style={styles.paragraph}>
        I am a web developer with over 5 years of experience, specializing in
        creating dynamic and responsive web applications. Currently, I am on a
        journey to become a full stack and mobile app developer, expanding my
        skills to include backend technologies and mobile development. My
        passion lies in crafting seamless user experiences and continuously
        learning to stay ahead in the ever-evolving tech landscape.
      </Text>
      <SocialLinks />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={hireMeHandler}>hire me</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <SecondaryButton onPress={aboutMeHandler}>about me</SecondaryButton>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white100,
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    paddingTop: 35,
    justifyContent: 'center',
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
});
