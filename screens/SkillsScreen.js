import { FlatList, StyleSheet, View } from "react-native";
import Title from "../components/UI/Title";
import { GlobalStyles } from "../constants/styles";
import SkillsList from "../components/skills/SkillsList";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const itemList = [
  {
    id: "m1",
    name: "HTML",
    iconTitle: "Ionicons",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "layers",
  },
  {
    id: "m2",
    name: "CSS",
    iconTitle: "Ionicons",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "layers",
  },
  {
    id: "m3",
    name: "JS",
    iconTitle: "Ionicons",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "layers",
  },
  {
    id: "m4",
    name: "REACT",
    iconTitle: "Ionicons",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "logo-react",
  },
  {
    id: "m5",
    name: "TAILWIND CSS",
    iconTitle: "Ionicons",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "layers",
  },
  {
    id: "m6",
    name: "REACT NATIVE",
    iconTitle: "Ionicons",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "logo-react",
  },
];

function renderSkillsItem(itemData) {
    return <SkillsList {...itemData.item} />;
//   return <Text>{itemData.item.description}</Text>;
}

function cvDownloadHandler() {
  
}

function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Title>My Skills</Title>
      <FlatList
        data={itemList}
        keyExtractor={(item) => item.id}
        renderItem={renderSkillsItem}
      />
      <View style={styles.button}>
        <PrimaryButton onPress={cvDownloadHandler}>Download CV</PrimaryButton>
      </View>

    </View>
  );
}

export default SkillsScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
    padding: 24,
  },
  button: {
    width: '70%'
  }
});
