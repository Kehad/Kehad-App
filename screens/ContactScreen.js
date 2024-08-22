import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import * as Linking from "expo-linking";

import SocialLinks from "../components/UI/SocialLinks";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Title from "../components/UI/Title";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";

function ContactScreen() {
  const openLink = async () => {
    const url = "mailto:keahnney01@gmail.com"; // Replace with your URL

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
    <View style={styles.container}>
      {/* <Title>Hello</Title> */}
      <ScrollView>
        <Text style={styles.text}>
          Looking to start a project and need that magical touch?{"\n"} {"\n"}{" "}
          I'm here to help! Expertise in coding, app development, and React.
          Building stunning mobile apps for iOS and Android. Crafting responsive
          frontends and scalable backends. Integrating React Native and Expo for
          cutting-edge results.
          <Text onPress={openLink} style={styles.span}>
            React out!!!
          </Text>
        </Text>
        <View style={styles.form}>
          <View style={styles.textBox}>
            <TextInput
              placeholder="name"
              style={styles.textInput}
              placeholderTextColor={GlobalStyles.colors.primary50}
            />
            <TextInput
              placeholder="email"
              style={styles.textInput}
              placeholderTextColor={GlobalStyles.colors.primary50}
            />
          </View>
          <View style={styles.messageBox}>
            <TextInput
              placeholder="your message"
              multiline
              placeholderTextColor={GlobalStyles.colors.primary50}
              style={styles.messageInput}
            />
          </View>
          <View style={styles.socialsBox}>
            <SocialLinks />
            <View style={styles.buttonBox}>
              <PrimaryButton>send</PrimaryButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.white100,
  },
  text: {
    fontSize: 20,
  },
  span: {
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    // height: 300,
    marginVertical: 20,
    borderRadius: 15,
    backgroundColor: GlobalStyles.colors.primary300,
    padding: 16,
  },
  textBox: {
    // flexDirection: "row",
    overflow: "hidden",
  },
  textInput: {
    height: 50,
    marginVertical: 8,
    paddingLeft: 16,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.primary50,
    color: GlobalStyles.colors.primary50,
  },
  messageInput: {
    height: 150,
    marginVertical: 8,
    paddingLeft: 16,
    paddingVertical: 0,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.primary50,
    color: GlobalStyles.colors.primary50,
    textAlign: "auto",
    textAlignVertical: "top",
    flexWrap: "wrap",
  },
  socialsBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonBox: {
    width: "30%",
  },
});
