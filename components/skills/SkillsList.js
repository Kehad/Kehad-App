import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Ionicons, FontAwesome6, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";

const SkillsList = function ({
  name,
  iconTitle,
  iconName,
  iconSize,
  iconColor,
}) {
  console.log(iconTitle);
  let content = '';
  if (iconTitle === 'FontAwesome6') {
    content = <FontAwesome6 name={iconName} size={iconSize} color={iconColor} />;
  } else if (iconTitle === 'Ionicons') {
    content = <Ionicons name={iconName} size={iconSize} color={iconColor} />; 
  } else if (iconTitle === 'Fontisto') {
    content = <Fontisto name={iconName} size={iconSize} color={iconColor} />;  // Replace Fontisto with FontAwesome6 if you want to use FontAwesome6 instead.  // Fontisto is a free alternative to FontAwesome.
  } else if (iconTitle === "MaterialCommunityIcon") {
    content = (
      <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
    );
  }
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.iconText}>{name}</Text>
          <View>
            {content}
          </View>
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
