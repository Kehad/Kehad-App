import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../components/UI/Title";
import SocialLinks from "../components/UI/SocialLinks";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { GlobalStyles } from "../constants/styles";
import { useColorScheme } from "nativewind";
import { useSelector } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function AboutScreen() {
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";

  const navigation = useNavigation();

  function hireMeHandler() {
    navigation.navigate("ContactScreen");
  }

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Content for each section
  const sectionContents = {
    "About me":
      "I am a frontend developer with a passion for creating engaging user experiences. My journey in web development began with a keen interest in design and technology.",
    "Technologies & Tools":
      "I primarily work with React, Next.js, Tailwind CSS, and other modern web technologies to build responsive and user-friendly applications.",
    Experience:
      "I have worked on various projects, including e-commerce sites, portfolios, and web applications, utilizing my skills in JavaScript and UI/UX design.",
  };

  const newSectionContent = [
    {
      name: "About me",
      content: "hdshdsdfsdsdsd",
      icon: "information-circle-outline",
    },
    {
      name: "Technologies & Tools",
      content: "hdshdsdfsdsdsd",
      icon: "code-slash-outline",
    },
    {
      name: "Experience",
      content: "hdshdsdfsdsdsd",
      icon: "briefcase-outline",
    },
  ];

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
            isDarkMode ? styles.darkModeText : styles.lightModeText,
            styles.paragraph,
          ]}
        >
          Welcome to my Portfolio app! I'm a frontend developer with a passion
          for creating highly responsive and functional websites that work
          seamlessly across all devices
        </Text>
      
        {newSectionContent.map((section, index) => (
          <View key={index}>
            <TouchableOpacity
              style={[
                { backgroundColor: isDarkMode ? "#d9d9d956" : "#373e503f" },
                styles.sectionButton,
              ]}
              onPress={() => toggleSection(section.name)}
            >
              <View style={styles.sectionHeader}>
                <Ionicons
                  name={section.icon}
                  size={24}
                  color={
                    isDarkMode
                      ? GlobalStyles.colors.white
                      : GlobalStyles.colors.textBlack
                  }
                />
                <Text
                  style={[
                    isDarkMode ? styles.darkModeText : styles.lightModeText,
                    styles.sectionText,
                  ]}
                >
                  {section.name}
                </Text>
              </View>
              <Ionicons
                name={
                  expandedSection === section.name
                    ? "chevron-up"
                    : "chevron-down"
                }
                size={24}
                // color={isDarkMode ? "white" : "black"}
                color={
                  isDarkMode
                    ? GlobalStyles.colors.white
                    : GlobalStyles.colors.textBlack
                }
              />
            </TouchableOpacity>
            {expandedSection === section.name && (
              <View style={styles.expandedSection}>
                <Text
                  style={[
                    isDarkMode ? styles.darkModeText : styles.lightModeText,
                    styles.sectionContent,
                  ]}
                >
                  {sectionContents[section.name]}
                </Text>
              </View>
            )}
          </View>
        ))}
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
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#ffff",
  },

  // Additional styles for dark mode and light mode can be added here...
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
  option: {
    gap: 4,
  },

  sectionText: {
    fontSize: 20,
  },
  sectionButton: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  expandedSection: {
    padding: 16,
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /* <Text
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
        </Text> */
}
