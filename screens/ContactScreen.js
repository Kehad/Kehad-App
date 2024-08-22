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

import { GlobalStyles } from "../constants/styles";
import ContactForm from "../components/Contact/ContactForm";

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
        <ContactForm />
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
  
});
