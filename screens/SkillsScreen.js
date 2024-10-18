import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import SkillsList from "../components/skills/SkillsList";
import IconNameButton from "../components/Buttons/IconNameButton";
import { useState } from "react";
import ModalDownload from "../components/UI/ModalDownload";
import { useSelector } from "react-redux";

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
    iconTitle: "MaterialCommunityIcons",
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

function renderSkillsItem({ item, index }) {
  return <SkillsList {...item} index={index} />;
}

function SkillsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const themes = useSelector((state) => state.theme.theme);
  const isDarkMode = themes === "dark";

  function showModalHandler(isModalVisible) {
    setModalVisible(isModalVisible);
  }



  return (
    <View
      style={[
        isDarkMode ? styles.darkMode : styles.lightMode,
        styles.container,
      ]}
    >
      <View>
        <ScrollView>
          <View style={styles.box}>
            <View>
              <FlatList
                data={itemList}
                keyExtractor={(item) => item.id}
                renderItem={renderSkillsItem}
                scrollEnabled={false}
              />
            </View>
            <View style={styles.button}>
              <IconNameButton onPress={showModalHandler} />
              {modalVisible && (
                <ModalDownload isModalVisible={showModalHandler} />
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default SkillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    justifyContent: "space-between",
  },
  box: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginVertical: 20,
  },
  darkMode: {
    backgroundColor: GlobalStyles.colors.textBlack,
  },
  darkModeText: {
    color: GlobalStyles.colors.white,
  },
  lightMode: {
    backgroundColor: GlobalStyles.colors.white100,
  },
  lightModeText: {
    color: GlobalStyles.colors.textBlack,
  },
});
