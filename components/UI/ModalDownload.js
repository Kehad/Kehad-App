import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../Buttons/IconButton";

const ModalDownload = ({ isModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.backdrop}>
          <View style={styles.centeredView}>
        
              <View style={styles.modalView}>
                <View style={styles.button}>
                  <PrimaryButton>Download Image</PrimaryButton>
                </View>
                <View style={styles.button}>
                  <PrimaryButton>Download PDF</PrimaryButton>
                </View>
                <Pressable
                  style={styles.buttonOpen}
                  onPress={() => isModalVisible(false)}
                >
                  <IconButton
                    icon="close-circle-outline" // close-circle, close
                    size={48}
                    color={GlobalStyles.colors.primary50}
                    onPress={() => isModalVisible(false)}
                  />
                </Pressable>
              </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDownload;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    width: 300,
    // height: 200,
    margin: 20,
    borderRadius: 20,
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backdrop: {
    marginTop: 51,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // This gives the semi-transparent backdrop
  },
  button: {
    padding: 10,
    borderRadius: 20,
    width: "100%",
    overflow: "hidden",
    marginTop: 10,
  },
  buttonOpen: {
    marginTop: 20,
    alignSelf: "center",
  },
});
