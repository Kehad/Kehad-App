import { Alert, KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native";
import { sendEmail } from "../../constants/email";
import * as Linking from "expo-linking";
import SocialLinks from "../UI/SocialLinks";
import PrimaryButton from "../Buttons/PrimaryButton";
import { GlobalStyles } from "../../constants/styles";
import { useEffect, useRef, useState } from "react";
import Notification from "../UI/Notification";
import SecondaryButton from "../Buttons/SecondaryButton";

function ContactForm() {
  const [isFormEligible, setIsFormEligible] = useState(false);
  const [nameInput, setNameInput] = useState("");
  // const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Dynamic validation logic
  useEffect(() => {
    const isNameValid = nameInput.length >= 3;
    // const isEmailValid = emailInput.includes("@gmail.com");
    const isMessageValid = messageInput.trim().split(/\s+/).length >= 5;

    // Update form validity based on the input validations
    setIsFormEligible(isNameValid && isMessageValid);
   
  }, [nameInput, messageInput]);

  const openLink = async (body, messaage) => {
    const url = `mailto:keahnney01@gmail.com?subject=${body}&body=${messaage}`; // Replace with your URL
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

  const handleSubmit = () => {
    openLink(nameInput, messageInput);
    setIsFormEligible(false);
    setNameInput("");
    // setEmailInput("");
    setMessageInput("");
  };

  function getNameValue(input) {
    setNameInput(input);
    //  checkLogic();
  }
  // function getEmailValue(input) {
  //   setEmailInput(input);
  //   //  checkLogic();
  // }
  function getMessageValue(input) {
    setMessageInput(input);
    //  checkLogic();s
  }

  return (
    <KeyboardAvoidingView enabled style={styles.form}>
      <View style={styles.textBox}>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          placeholderTextColor={GlobalStyles.colors.primary50}
          onChangeText={getNameValue}
          value={nameInput}
        />
        {/* <TextInput
          placeholder="Sender email?"
          style={styles.textInput}
          placeholderTextColor={GlobalStyles.colors.primary50}
          keyboardType="email-address"
          onChangeText={getEmailValue}
          value={emailInput}
        /> */}
      </View>
      <View style={styles.messageBox}>
        <TextInput
          placeholder="Your message"
          multiline
          placeholderTextColor={GlobalStyles.colors.primary50}
          style={styles.messageInput}
          onChangeText={getMessageValue}
          value={messageInput}
        />
      </View>
      <View style={styles.socialsBox}>
        <SocialLinks />
        <View style={styles.buttonBox}>
          {isFormEligible ? (
            <PrimaryButton onPress={handleSubmit}>send</PrimaryButton>
          ) : (
            <PrimaryButton
              onPress={() => {
                if (!isFormEligible) {
                  alert(
                    "The name must be at least 3 characters long, \nThe message must be at least 5 words"
                  );
                }
              }}
            >
              send
            </PrimaryButton>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ContactForm;

const styles = StyleSheet.create({
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
