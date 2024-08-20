import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";

const SkillsList = function ({
  name,
  IconTitle,
  iconName,
  iconSize,
  iconColor,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.iconText}>{name}</Text>
        <View>
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
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
