import { Text, View, TextInput, StyleSheet } from "react-native";
import SocialLinks from "../components/UI/SocialLinks";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Title from "../components/UI/Title";
import { GlobalStyles } from "../constants/styles";

function ContactScreen() {
  return (
    <View style={styles.container}>
      <Title>Hello</Title>
      <Text style={styles.text}>
        Looking to start a project and need that magical touch?Reach out!!!
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
  },
  text: {
    fontSize: 20,
  },
  form: {
    width: "100%",
    height: 300,
    marginVertical: 20,
    borderRadius: 15,
    backgroundColor: GlobalStyles.colors.primaryBackground ,
    padding: 16,
  },
  textBox: {
    // flexDirection: "row",
    overflow: "hidden",
  },
  textInput: {
    width: "50%",
    backgroundColor: "red",
    marginHorizontal: 8,
    borderRadius: 8,
    height: 50,
    fontSize: 32,
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent500,
    color: GlobalStyles.colors.error50,
    fontWeight: "bold",
    textAlign: "center",
  },
  messageInput: {
    backgroundColor: "red",
    marginHorizontal: 8,
    borderRadius: 8,
    height: 50,
    fontSize: 32,
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent500,
    color: GlobalStyles.colors.error50,
    fontWeight: "bold",
  },
});
