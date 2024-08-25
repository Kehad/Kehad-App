import { Animated, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { GlobalStyles } from "../constants/styles";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import SocialLinks from "../components/UI/SocialLinks";
import Title from "../components/UI/Title";


function HomeScreen() {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";

  const navigation = useNavigation();

  function aboutMeHandler() {
    navigation.navigate("AboutScreen");
  }

  function hireMeHandler() {
    navigation.navigate("ContactScreen");
  }

  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    console.log(progress, dragX)
    console.log('leftSwipe')
   
  };

  return (
    <View
        style={[
          isDarkMode ? styles.darkMode : styles.lightMode,
          styles.container,
        ]}
      >
          <Swipeable renderLeftActions={leftSwipe} style={styles.container}>
        <Title>Hi.</Title>
        <Text
          style={[
            isDarkMode ? styles.darkModeText : styles.lightModeText,
            styles.name,
          ]}
        >
          I'm Kehinde Adigun
        </Text>
        <Text
          style={[
            isDarkMode ? styles.darkModeText : styles.lightModeText,
            styles.paragraph,
          ]}
        >
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
        </Swipeable>
      </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    // paddingTop: 0,
    // justifyContent: "center",
  },
  headerHead: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    fontSize: 50,
  },
  name: {
    fontSize: 36,
    marginBottom: 24,
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
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
