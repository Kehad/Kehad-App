import { Pressable, StyleSheet, View } from "react-native";
import * as Linking from "expo-linking";
import { AntDesign, Entypo, FontAwesome6 } from "@expo/vector-icons";

import { GlobalStyles } from "../../constants/styles";

const SocialLinks = function () {
  const AppLinks = {
    linkedIn: "https://www.linkedin.com/in/kehinde-adigun-/",
    github: "https://github.com/Kehad",
    twitter: "https://twitter.com/Littlegenius01",
  };

  const openLink = async (website) => {
    console.log(website);
    const url = website; // Replace with your URL

    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="">
      <View style={styles.iconContainer}>
        <Pressable onPress={() => openLink(AppLinks.linkedIn)}>
          <Entypo
            name="linkedin"
            size={24}
            color={GlobalStyles.colors.primary50}
          />
        </Pressable>
        <Pressable onPress={() => openLink(AppLinks.github)}>
          <AntDesign
            name="github"
            size={24}
            color={GlobalStyles.colors.primary50}
          />
        </Pressable>
        <Pressable onPress={() => openLink(AppLinks.twitter)}>
          <FontAwesome6
            name="x-twitter"
            size={24}
            color={GlobalStyles.colors.primary50}
          />
        </Pressable>
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
