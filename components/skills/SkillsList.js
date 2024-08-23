import { StyleSheet, Text, View } from "react-native";

import IconButton from "../Buttons/IconButton";
import { GlobalStyles } from "../../constants/styles";

const SkillsList = function ({
  name,
  iconTitle,
  iconName,
  iconSize,
  iconColor,
}) {
  
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.iconText}>{name}</Text>
          <IconButton
            iconTitle={iconTitle}
            iconName={iconName}
            iconSize={iconSize}
            iconColor={iconColor}
          />
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
