import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { FontAwesome } from "@expo/vector-icons";

function IconNameButton({ onPress }) {

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: GlobalStyles.colors.primary100 }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Download CV</Text>
          <FontAwesome name="arrow-down" size={24} color="black" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

export default IconNameButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    margin: 4,
    // marginVertical: 28,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary50,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  innerContainer: {
    backgroundColor: GlobalStyles.colors.primary50,
    paddingVertical: 8,

    elevation: 2,
    width: "max-width",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 20, // Adds space between the icon and the text
  },
});
