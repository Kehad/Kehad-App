import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Ionicons, Feather } from "@expo/vector-icons";
import IconButton from "../Buttons/IconButton";

const ToggleMode = ({ isModalVisible }) => {
    // console.log("Toggle mode");
    // console.log(isModalVisible)
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={true}>
        {/* <View style={styles.backdrop}> */}
          {/* <View style={styles.centeredView}> */}
            <View style={styles.modalView}>
              {/* <Text>Toggle Mode</Text> */}
              <Pressable
                style={styles.buttonOpen}
                onPress={() => isModalVisible(false)}
              >
                <IconButton
                  iconTitle="Ionicons"
                  iconName="moon"
                  iconSize={36}
                  iconColor="black"
                />
              </Pressable>
              <Pressable
                style={styles.buttonOpen}
                onPress={() => isModalVisible(false)}
              >
                <IconButton
                  iconTitle="Feather"
                  iconName="sun"
                  iconSize={36}
                  iconColor="black"
                  onPress={() => isModalVisible(false)}
                />
              </Pressable>
            </View>
          {/* </View> */}
        {/* </View> */}
      </Modal>
    </View>
  );
};
// for light mode -- feather sun
// for dark mode -- Ionicons moon

export default ToggleMode;

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    // width: 300,
    // height: 200,
    // margin: 20,
    // borderRadius: 20,
    // padding: 15,
    // backgroundColor: "white",
      // alignItems: "center",
    //   alignSelf: 'flex-end',
    flexDirection: "row",
      shadowColor: "#000",
    gap:12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // marginRight: 40,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
      width: 'max-width',
    
    },
  backdrop: {
    marginTop: 51,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // This gives the semi-transparent backdrop
  },
  buttonOpen: {
    // marginTop: 20,
    alignSelf: "center",
  },
});
