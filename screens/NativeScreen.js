// import { useColorScheme } from "nativewind";
// import React from "react";
// import { View, Text, StyleSheet, Switch } from "react-native";
// import tw from "tailwind-react-native-classnames";

// const NativeScreen = () => {
//   const { colorScheme, toggleColorScheme } = useColorScheme();
//   const isDarkMode = colorScheme === "dark";
//   console.log(colorScheme);

//   return (
//     <View
//       style={[tw`flex-1 justify-center items-center`, styles.customContainer]}
//     >
//       <Text style={[tw`text-white text-lg`, styles.customText]}>
//         Hello Tailwind + StyleSheet!
//       </Text>
//       <Text
//         className="mx-4 text-justify bg-red-400"
//         style={isDarkMode ? styles.textWhite : styles.textBlack}
//         // style={colorScheme == "dark" ? styles.textWhite : styles.textBlack}
//       >
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged.
//       </Text>

//       <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
//     </View>
//   );
// };

// export default NativeScreen;

// const styles = StyleSheet.create({
//   customContainer: {
//     padding: 20, // You can define more specific or reusable styles here
//     borderRadius: 10,
//   },
//   customText: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   textWhite: {
//     color: "red",
//   },
//   textBlack: {
//     color: "green",
//   },
// });


import React, { useState } from "react";
import { View, Text, Button, useColorScheme } from "react-native";
import tw from "tailwind-react-native-classnames";

const MyComponent = () => {
  // Get the system's initial color scheme
  const systemColorScheme = useColorScheme(); // 'light' or 'dark'

  // // Track the color scheme, initially following the system setting
  const [theme, setTheme] = useState(systemColorScheme);
  console.log(theme)
  console.log("before changing");
  // // Function to switch to light mode manually
  const switchToLightMode = () => {
    setTheme("light");
      console.log(theme);

  };

  // Function to switch to dark mode manually
  const switchToDarkMode = () => {
    setTheme("dark");
      console.log(theme);

  };
   console.log('after changing');
  console.log(theme);
  // const { colorScheme, toggleColorScheme } = useColorScheme();
  // console.log(colorScheme)

  return (
    <View
      style={tw`${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } flex-1 justify-center items-center`}
    >
      <Text
        style={tw`${
          theme === "dark" ? "text-white" : "text-black"
        } text-lg mb-4`}
      >
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>

      {/* Button to switch to Light Mode */}
      <Button title="Switch to Light Mode" onPress={switchToLightMode} />

      {/* Button to switch to Dark Mode */}
      <Button
        title="Switch to Dark Mode"
        onPress={switchToDarkMode}
        style={tw`mt-4`}
      />
    </View>
  );
};

export default MyComponent;
