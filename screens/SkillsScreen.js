import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import * as FileSystem from "expo-file-system";

import Title from "../components/UI/Title";
import { GlobalStyles } from "../constants/styles";
import SkillsList from "../components/skills/SkillsList";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import IconButton from "../components/Buttons/IconButton";
import { Ionicons } from "@expo/vector-icons";
import IconNameButton from "../components/Buttons/IconNameButton";
import { useState } from "react";
import Modal from "../components/UI/ModalDownload";
import ModalDownload from "../components/UI/ModalDownload";

const itemList = [
  {
    id: "m1",
    name: "HTML",
    iconTitle: "Ionicons",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "logo-html5",
  },
  {
    id: "m2",
    name: "CSS",
    iconTitle: "FontAwesome6",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "css3-alt",
  },
  {
    id: "m3",
    name: "JS",
    iconTitle: "FontAwesome6",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "square-js",
  },
  {
    id: "m4",
    name: "REACT",
    iconTitle: "Fontisto",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "react",
  },
  {
    id: "m5",
    name: "TAILWIND CSS",
    iconTitle: "MaterialCommunityIcon",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "tailwind",
  },
  {
    id: "m6",
    name: "REACT NATIVE",
    iconTitle: "Fontisto",
    iconSize: 24,
    iconColor: GlobalStyles.colors.primary50,
    iconName: "react",
  },
];

function renderSkillsItem(itemData) {
  return <SkillsList {...itemData.item} />;
}

function SkillsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  function showModalHandler(isModalVisible) {
    console.log(isModalVisible);
    console.log("Modal");
    setModalVisible(isModalVisible);
  }
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
      {/* <Title>My Skills</Title> */}
      <ScrollView>
        <FlatList
          data={itemList}
          keyExtractor={(item) => item.id}
          renderItem={renderSkillsItem}
          scrollEnabled={false}
        />
        <View style={styles.button}>
          {/* <PrimaryButton icon="jdh">Download CV</PrimaryButton>
        <IconButton icon="menu" size={32}>
        Download CV
        </IconButton> */}
          <IconNameButton onPress={showModalHandler} />
          {modalVisible && <ModalDownload isModalVisible={showModalHandler} />}
        </View>
      </ScrollView>
    </View>
  );
}

export default SkillsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white100,
    flex: 1,
    padding: 24,
  },
  button: {
    // width: "70%",
  },
});
