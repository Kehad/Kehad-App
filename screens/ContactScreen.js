import { Text, View, TextInput, StyleSheet } from "react-native";
import * as Linking from "expo-linking";

import SocialLinks from "../components/UI/SocialLinks";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Title from "../components/UI/Title";
import { GlobalStyles } from "../constants/styles";

function ContactScreen() {
  const openLink = async () => {

    const url = 'mailto:keahnney01@gmail.com'; // Replace with your URL

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
      <Title>Hello</Title>
      <Text style={styles.text}>
        Looking to start a project and need that magical touch?<Text onPress={openLink} style={styles.span}>React out!!!</Text>
      </Text>
      <View style={styles.form}>
        <View style={styles.textBox}>
          <TextInput placeholder="name" style={styles.textInput} />
          <TextInput placeholder="email" style={styles.textInput} />
        </View>
        <View style={styles.messageBox}>
          <TextInput placeholder="your message" style={styles.messageInput} />
        </View>
        <View style={styles.socialsBox}>
          <SocialLinks />
          <View style={styles.buttonBox}>
            <PrimaryButton>send</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.white100
  },
  text: {
    fontSize: 20,
  },
  span: {
    color: GlobalStyles.colors.primary50
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
    fontWeight: "bold",
  },
  messageInput: {
    height: 150,
    marginVertical: 8,
    paddingLeft: 16,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.primary50,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    textAlign: 'auto',
    alignItems: ''
  },
  socialsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonBox: {
    width: '30%'
  }
});
