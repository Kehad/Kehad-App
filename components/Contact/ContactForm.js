import { Alert, StyleSheet, TextInput, View } from "react-native";

import SocialLinks from "../UI/SocialLinks";
import PrimaryButton from "../Buttons/PrimaryButton";
import { GlobalStyles } from "../../constants/styles";
import { useRef, useState } from "react";
import Notification from "../UI/Notification";

function ContactForm() {
  const [isFormEligible, setIsFormEligible] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const FormData = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
  };

  function getNameValue(input) {
    setNameInput(input);
  }
  function getEmailValue(input) {
    setEmailInput(input);
  }
  function getMessageValue(input) {
    setMessageInput(input);
  }

  // function formSubmit() {
  //   console.log(FormData)
  //   // if (FormData.name === "") return;
  //   // if (FormData.email === "") return;
  //   // if (FormData.message === "") return;

  //   const { name, email, message } = FormData;
  //   const words = message.trim().split(/\s+/);
  //   console.log(name, email, message);
  //   // console.log(words);
  //   if (name.length <= 2 && words.length < 5 && !email.includes("@gmail.com")) {
  //     console.log("Form data failed");
  //     console.log(name, words, email);
  //     setIsFormEligible(false);
  //     console.log('Failure')
  //   }
  //   if (name.length >= 3 && words.length >= 5 && email.includes("@gmail.com")) {
  //     console.log(name, words, email)
  //     setIsFormEligible(true);
  //     console.log("Good to good");
  //   }
  //   setNameInput("");
  //   setEmailInput("");
  //   setMessageInput("");
  // }

  const handleSubmit = () => {
    const { name, email, message } = FormData;
    // Check if the name is less than 3 characters
    if (name.length < 3) {
      setIsFormEligible(false);
      Alert.alert("Error", "Name must be at least 3 characters long");
      return;
    }

    // Check if the email does not include '@gmail.com'
    if (!email.includes("@gmail.com")) {
      setIsFormEligible(false)
      Alert.alert("Error", "Email must be a Gmail address");
      return;
    }

    // Check if the message body is less than 5 words
    const words = message.trim().split(/\s+/).length;
    if (words < 5) {
      setIsFormEligible(false)
      Alert.alert("Error", "Message must contain at least 5 words");
      return;
    }

    // If all checks pass
        console.log(name, words, email)
        setIsFormEligible(true);
        console.log("Good to good");
    Alert.alert("Success", "Form submitted successfully");
  };


  return (
    <View style={styles.form}>
      <View style={styles.textBox}>
        <TextInput
          placeholder="name"
          style={styles.textInput}
          placeholderTextColor={GlobalStyles.colors.primary50}
          onChangeText={getNameValue}
          value={nameInput}
        />
        <TextInput
          placeholder="email"
          style={styles.textInput}
          placeholderTextColor={GlobalStyles.colors.primary50}
          onChangeText={getEmailValue}
          value={emailInput}
        />
      </View>
      <View style={styles.messageBox}>
        <TextInput
          placeholder="your message"
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
          <Notification
            title="Message sent"
            name="send"
            body="You've sucessfully sent your message"
            onPress={handleSubmit}
            onCheck={isFormEligible}
          />
        </View>
      </View>
    </View>
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
