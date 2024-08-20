import { Button, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { GlobalStyles } from "../../constants/styles";
import Title from "../../components/UI/Title";
import PrimaryButton from "../Buttons/PrimaryButton";

function WorksItem({ description, name, website, imageUrl }) {
  const navigation = useNavigation();

  function itemDetailsHandler() {
    navigation.navigate("ModalScreen", {
      title: name,
      description: description,
      website: website,
      imageUrl: imageUrl,
    })
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.headerHead}>{name}</Text>
      <Text style={styles.paragraph}>{description}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={itemDetailsHandler}>See Details</PrimaryButton>
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
