import {  StyleSheet, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

import IconButton from "../Buttons/IconButton";
import { GlobalStyles } from "../../constants/styles";

const SocialLinks = function () {
  const AppLinks = {
    linkedIn: "https://www.linkedin.com/in/kehinde-adigun-/",
    github: "https://github.com/Kehad",
    twitter: "https://twitter.com/Littlegenius01",
  };

  const openLink = async (website) => {
    const url = website; // Replace with your URL

    try {
      const supported = await openBrowserAsync(url);
    } catch (error) {
      throw new Error(`Failed to open' ${error.message}`);
    }
  };

  return (
    <View className="">
      <View style={styles.iconContainer}>
        <IconButton
          iconTitle="Entypo"
          iconName="linkedin"
          iconSize={24}
          iconColor={GlobalStyles.colors.primary50}
          onPress={() => openLink(AppLinks.linkedIn)}
        />
        <IconButton
          iconTitle="AntDesign"
          iconName="github"
          iconSize={24}
          iconColor={GlobalStyles.colors.primary50}
          onPress={() => openLink(AppLinks.github)}
        />
        <IconButton
          iconTitle="FontAwesome6"
          iconName="x-twitter"
          iconSize={24}
          iconColor={GlobalStyles.colors.primary50}
          onPress={() => openLink(AppLinks.twitter)}
        />
      </View>
    </View>
  );
};

export default SocialLinks;

const styles = StyleSheet.create({
  // Add your styles here
  iconContainer: {
    margin: 16,
    marginLeft: 0,
    padding: 8,
    paddingLeft: 0,
    gap: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
});
