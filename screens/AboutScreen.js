import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../components/UI/Title";
import SocialLinks from "../components/UI/SocialLinks";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { GlobalStyles } from "../constants/styles";
import { useColorScheme } from "nativewind";
import { useSelector } from "react-redux";

function AboutScreen() {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";

  const navigation = useNavigation();

  function hireMeHandler() {
    navigation.navigate("ContactScreen");
  }

  return (
    <View
      style={[
        !isDarkMode ? styles.lightMode : styles.darkMode,
        styles.container,
      ]}
    >
      {/* <Title>About me</Title> */}
      <ScrollView>
        <Text
          style={[
            !isDarkMode ? styles.lightMode : styles.darkModeText,
            styles.paragraph,
          ]}
          textBreakStrategy="simple"
          lineBreakStrategyIOS="standard"
        >
          Hello! I'm a frontend developer with a passion for creating highly
          responsive and functional websites that work seamlessly across all
          devices. I've worked on several projects where I've gained experience
          in HTML, CSS, JavaScript, ReactJS, I am currently learning React Native to
          expand my skillset even further. {"\n"}
          {"\n"}As a self-motivated individual, I am always looking for
          opportunities to learn and grow in my career. I have a keen eye for
          design and a strong understanding of user experience, which helps me
          to create websites that are not only visually appealing but also
          highly functional. {"\n"} {"\n"}I've always been fascinated by the
          intersection of design and technology, and I've made it my mission to
          bring beautiful, user-friendly websites to life. With 5+ years of
          experience in the industry, I've had the privilege of working on a
          diverse range of projects, each one presenting a unique challenge that
          I've eagerly tackled. {"\n"}
          {"\n"}I am excited to bring my skills and passion for frontend
          development and Application Development to a full-time position where
          I can make a meaningful impact. If you're looking for a dedicated and
          driven developer who is always eager to take on new challenges, then I
          would love to hear from you!
        </Text>
        <SocialLinks />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={hireMeHandler}>hire me</PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
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
