import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import {
  Ionicons,
  FontAwesome6,
  Fontisto,
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  Entypo
} from "@expo/vector-icons";

function IconButton({
  iconName,
  iconSize,
  onPress,
  iconColor,
  iconTitle,
}) {

  let content = "";
  if (iconTitle === "FontAwesome6") {
    content = (
      <FontAwesome6 name={iconName} size={iconSize} color={iconColor} />
    );
  } else if (iconTitle === "Ionicons") {
    content = <Ionicons name={iconName} size={iconSize} color={iconColor} />;
  } else if (iconTitle === "Fontisto") {
    content = <Fontisto name={iconName} size={iconSize} color={iconColor} />; // Replace Fontisto with FontAwesome6 if you want to use FontAwesome6 instead.  // Fontisto is a free alternative to FontAwesome.
  } else if (iconTitle === "Feather") {
    content = <Feather name={iconName} size={iconSize} color={iconColor} />; 
  } else if (iconTitle === "Entypo") {
    content = <Entypo name={iconName} size={iconSize} color={iconColor} />; 
  } else if (iconTitle === "AntDesign") {
    content = <AntDesign name={iconName} size={iconSize} color={iconColor} />; 
  } else if (iconTitle === "MaterialCommunityIcons") {
    content = (
      <MaterialCommunityIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        {content}
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.75,
  },
});
