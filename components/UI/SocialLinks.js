import { StyleSheet, View, } from "react-native";
import { AntDesign, Entypo, FontAwesome6 } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";

const SocialLinks = function () {
  return (
    <View className="">
      <View style={styles.iconContainer}>
        <Entypo name="linkedin" size={24} color={GlobalStyles.colors.primary50} />
        <AntDesign name="github" size={24} color={GlobalStyles.colors.primary50} />
        <FontAwesome6 name="x-twitter" size={24} color={GlobalStyles.colors.primary50} />

      </View>
    </View>
  );
};

export default SocialLinks;

const styles = StyleSheet.create({
    // Add your styles here
    iconContainer: {
        margin: 16,
        marginLeft: 0,
        padding: 8,
        paddingLeft: 0,
        gap: 20,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "start",
        alignItems: "center",
    }
});
