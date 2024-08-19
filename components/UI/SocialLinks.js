import { View, } from "react-native";
import { AntDesign, Entypo, FontAwesome6 } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";

const SocialLinks = function () {
  return (
    <View className="">
      <View className="flex gap-2 lg:gap-3 mb-6">
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
    
});
