import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function SecondaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        j
        onPress={onPress}
        android_ripple={{ color: GlobalStyles.colors.primary500 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    marginVertical: 28,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary50,
    backgroundColor: "transparent",
  },
  buttonInnerContainer: {
    backgroundColor: "transparent",
    paddingVertical: 8,
    paddingHorizontal: 4,
    elevation: 2,
  },
  buttonText: {
    color: GlobalStyles.colors.primary50,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
