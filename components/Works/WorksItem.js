import { Button, StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { GlobalStyles } from "../../constants/styles";
import Title from "../../components/UI/Title";
import PrimaryButton from "../Buttons/PrimaryButton";

function WorksItem({ description, name, website, itemDetails }) {
  const navigation = useNavigation();

  function itemDetailsHandler() {
    navigation.navigate("ModalScreen")
  }

  const openLink = async () => {
    console.log(website)
    const url = website; // Replace with your URL

    try {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
      
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerHead}>{name}</Text>
      <Text style={styles.paragraph}>{description}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          {/* <PrimaryButton onPress={openLink}>Visit Website</PrimaryButton> */}
          <PrimaryButton onPress={itemDetailsHandler}>Visit Website</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default WorksItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
  },
  headerHead: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    fontSize: 24,
  },
  paragraph: {
    fontSize: 20,
    color: GlobalStyles.colors.textBlack,
    lineHeight: 30,
    fontWeight: "400",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "50%",
  },
  buttonContainer: {
    flex: 1,
  },
});
