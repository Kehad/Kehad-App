import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import  Ionicons  from "@expo/vector-icons/Ionicons";

function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
              <Ionicons name={icon} color={color} size={size} />
              {/* <Text>aa</Text> */}
      </View>
    </Pressable>
  );
}

export default IconButton;
 
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.75
    }
});