import { Alert, FlatList, StyleSheet, View } from "react-native";
import * as FileSystem from "expo-file-system";

import Title from "../components/UI/Title";
import { GlobalStyles } from "../constants/styles";
import SkillsList from "../components/skills/SkillsList";
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
}
  
function SkillsScreen() {

  // const downloadFile = async () => {
  //   const url = "http://techslides.com/demos/sample-videos/small.mp4";
  //   console.log(url) // Replace with your file URL
  //   // const fileUri = FileSystem.documentDirectory + 'icon.png'; // Local file path
  //   const fileUri = `${FileSystem.documentDirectory}icon.png`;

  //   try {
  //     const { uri } = await FileSystem.downloadAsync(url, fileUri);
  //     Alert.alert('Success', 'File downloaded to: ' + uri);
  //   } catch (error) {
  //     console.log(error)
  //     Alert.alert('Error', 'Failed to download file: ' + error.message);
  //   }
  // };
  
  return (
    <View style={styles.container}>
      <Title>My Skills</Title>
      <FlatList
        data={itemList}
        keyExtractor={(item) => item.id}
        renderItem={renderSkillsItem}
      />
      <View style={styles.button}>
        <PrimaryButton>Download CV</PrimaryButton>
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
