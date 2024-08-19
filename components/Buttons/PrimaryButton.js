import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function PrimaryButton({ children, onPress }) {
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
        android_ripple={{ color: GlobalStyles.colors.primary500}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    marginVertical: 28,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary50,
    backgroundColor: GlobalStyles.colors.primary50,    
  },
  buttonInnerContainer: {
    backgroundColor: GlobalStyles.colors.primary50,
    paddingVertical: 8,
    paddingHorizontal: 4,
    elevation: 2,
    width: "max-width",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
