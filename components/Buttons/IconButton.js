import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

function IconButton({ icon, color, size, onPress, children }) {

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Text>{children}</Text>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    // padding: 6,
    // marginHorizontal: 8,
    // marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
