// // import { useColorScheme } from "nativewind";
// // import React from "react";
// // import { View, Text, StyleSheet, Switch } from "react-native";
// // import tw from "tailwind-react-native-classnames";

// // const NativeScreen = () => {
// //   const { colorScheme, toggleColorScheme } = useColorScheme();
// //   const isDarkMode = colorScheme === "dark";
// //   console.log(colorScheme);

// //   return (
// //     <View
// //       style={[tw`flex-1 justify-center items-center`, styles.customContainer]}
// //     >
// //       <Text style={[tw`text-white text-lg`, styles.customText]}>
// //         Hello Tailwind + StyleSheet!
// //       </Text>
// //       <Text
// //         className="mx-4 text-justify bg-red-400"
// //         style={isDarkMode ? styles.textWhite : styles.textBlack}
// //         // style={colorScheme == "dark" ? styles.textWhite : styles.textBlack}
// //       >
// //         Lorem Ipsum is simply dummy text of the printing and typesetting
// //         industry. Lorem Ipsum has been the industry's standard dummy text ever
// //         since the 1500s, when an unknown printer took a galley of type and
// //         scrambled it to make a type specimen book. It has survived not only five
// //         centuries, but also the leap into electronic typesetting, remaining
// //         essentially unchanged.
// //       </Text>

// //       <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
// //     </View>
// //   );
// // };

// // export default NativeScreen;

// // const styles = StyleSheet.create({
// //   customContainer: {
// //     padding: 20, // You can define more specific or reusable styles here
// //     borderRadius: 10,
// //   },
// //   customText: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //   },
// //   textWhite: {
// //     color: "red",
// //   },
// //   textBlack: {
// //     color: "green",
// //   },
// // });


// import React, { useState } from "react";
// import { View, Text, Button, useColorScheme } from "react-native";
// import tw from "tailwind-react-native-classnames";
// import { useSelector } from "react-redux";

// const MyComponent = () => {
//   const themes = useSelector((state) => state.theme.theme)


//   const systemColorScheme = useColorScheme();

//   // Create state for the theme, defaulting to the system color scheme
//   const [theme, setTheme] = useState(systemColorScheme);

//   // Function to switch to light mode
//   const switchToLightMode = () => {
//     setTheme("light");
//   };

//   // Function to switch to dark mode
//   const switchToDarkMode = () => {
//     setTheme("dark");
//   };

//   return (
//     <View
//       style={tw`${
//         themes === "dark" ? "bg-gray-900" : "bg-white"
//       } flex-1 justify-center items-center`}
//     >
//       <Text
//         style={tw`${
//           themes === "dark" ? "text-white" : "text-black"
//         } text-lg mb-4`}
//       >
//         {themes === "dark" ? "Dark Mode" : "Light Mode"}
//       </Text>

//       {/* Button to switch to Light Mode */}
//       <Button title="Switch to Light Mode" onPress={switchToLightMode} />

//       {/* Button to switch to Dark Mode */}
//       <Button
//         title="Switch to Dark Mode"
//         onPress={switchToDarkMode}
//         style={tw`mt-4`}
//       />
//     </View>
//   );
// };

// export default MyComponent;


import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const DynamicValidationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  // Dynamic validation logic
  useEffect(() => {
    const isNameValid = name.length >= 3;
    const isEmailValid = email.includes("@gmail.com");
    const isMessageValid = message.trim().split(/\s+/).length >= 5;

    // Update form validity based on the input validations
    setIsFormValid(isNameValid && isEmailValid && isMessageValid);
  }, [name, email, message]);

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text>Message:</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your message"
        multiline
      />

      {/* Conditionally change button color based on form validation */}
      <Button
        title="Submit"
        color={isFormValid ? "blue" : "green"}
        onPress={() => {
          if (isFormValid) {
            alert("Form is valid! Submission successful.");
          } else {
            alert("Please fill out the form correctly.");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default DynamicValidationForm;
