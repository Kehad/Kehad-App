import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";

import PrimaryButton from "../components/Buttons/PrimaryButton";
import { GlobalStyles } from "../constants/styles";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { openBrowserAsync } from "expo-web-browser";

function ModalScreen({ route, navigation}) {
   const themes = useSelector((state) => state.theme.theme);
   const isDarkMode = themes === "dark";
  // const navigation = useNavigation();
  // const route = useRoute();
console.log(isDarkMode)
  // console.log(route);
  const ModalData = {
    title: route.params.title,
    description: route.params.description,
    website: route.params.website,
    imageUrl: route.params.imageUrl,
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: ModalData.title,
      headerStyle: {
        // backgroundColor: isDarkMode
        //   ? GlobalStyles.colors.textBlack
        //   : GlobalStyles.colors.white,
        // backgroundColor: !isDarkMode ? "white" : "#282828",
        // backgroundColor: isDarkMode ? "#282828" : "#EFEFEF",
        // backgroundColor: isDarkMode
        // backgroundColor: isDarkMode && "#282828",
        // backgroundColor: isDarkMode && "#EFEFEF",
        // backgroundColor: "green",
      },
      headerTitleStyle: {
        // color: GlobalStyles.colors.primary50,
        // color: isDarkMode ? 'white' : 'black',
        fontSize: 25,
        fontWeight: "bold",
      },
    });
  }, []);
  const openLink = async () => {
    const url = ModalData.website; // Replace with your URL

    try {
      const supported = await openBrowserAsync(url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView
      style={[
        isDarkMode ? styles.darkMode : styles.lightMode,
        styles.container,
      ]}
    >
      <View style={styles.box}>
        {/* <Text style={styles.headerHead}>{ModalData.title}</Text> */}
        <Text
          style={[
            isDarkMode ? styles.darkModeText : styles.lightModeText,
            styles.paragraph,
          ]}
        >
          {ModalData.description}
        </Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={ModalData.imageUrl} />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={openLink}>Visit Website</PrimaryButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    margin: 24,
    marginTop: 40,
  },
  headerHead: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    fontSize: 24,
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "400",
  },
  imageContainer: {
    width: "100%",
    height: 350,
    marginVertical: 16,
    backgroundColor: GlobalStyles.colors.primary300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 20,
    objectFit: "cover",
  },
  modalContainer: {},
  buttonsContainer: {
    flexDirection: "row",
    width: "50%",
  },
  buttonContainer: {
    flex: 1,
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
