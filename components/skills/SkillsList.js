import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import IconNameButton from "../Buttons/IconNameButton";
import IconButton from "../Buttons/IconButton";

const SkillsList = function ({
  name,
  iconTitle,
  iconName,
  iconSize,
  iconColor,
}) {
  console.log(iconTitle, iconName, iconSize, iconColor);
  let content = '';
  if (iconTitle === 'FontAwesome6') {
    content = <IconButton iconTitle={iconTitle} iconName={iconName} iconSize={iconSize} iconColor={iconColor} />;
  } else if (iconTitle === 'Ionicons') {
    content = <IconButton iconTitle={iconTitle} iconName={iconName} iconSize={iconSize} iconColor={iconColor} />; 
  } else if (iconTitle === 'Fontisto') {
    content = <IconButton iconTitle={iconTitle} iconName={iconName} iconSize={iconSize} iconColor={iconColor} />;  // Replace Fontisto with FontAwesome6 if you want to use FontAwesome6 instead.  // Fontisto is a free alternative to FontAwesome.
  } else if (iconTitle === "MaterialCommunityIcons") {
    content = (
      <IconButton iconTitle={iconTitle} iconName={iconName} iconSize={iconSize} iconColor={iconColor} />
    );
  }
  console.log(content);
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.iconText}>{name}</Text>
          <View>{content}</View>
          
        </View>
     
      </View>
    );
};

export default SkillsList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: GlobalStyles.colors.textBlack,
    flex: 1,
  },
  box: {
    padding: 16,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.primaryBackground,
    marginVertical: 16,
},
iconText: {
    fontSize: 16,
    color: GlobalStyles.colors.primary50,
  },
});
