import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import * as Network from "expo-network";

import IconButton from "../Buttons/IconButton";
import Notification from "./Notification";
import { downloadImage } from "../../constants/download";
import { GlobalStyles } from "../../constants/styles";
import { NetworkState } from "../../constants/NetworkState";
import PrimaryButton from "../Buttons/PrimaryButton";
import { NewNotification } from "../../screens/NewNotification";

const ModalDownload = ({ isModalVisible }) => {
  const [fileUri, setFileUri] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [ipAddress, setIpAddress] = useState(null);
  const [networkState, setNetworkState] = useState(null);

  async function imageDownloadHandler() {
    // await NetworkState(setIpAddress, setNetworkState);
    console.log("Modal download");
    console.log(ipAddress);
    console.log(networkState);
    console.log("Modal download");

    await downloadImage(
      "1_JHSQ7nsJIki8y2eiOBTw3bZayFpJa0q",
      "Kehinde Adigun CV.jpg",
      setDownloadProgress,
      setFileUri
    );
    NewNotification(
      "Image Download Successful",
      "You've sucessfully downloaded the Image version of the CV"
    );
    isModalVisible(false);
  }

  async function pdfDownloadHandler() {
    await downloadImage(
      "1gwqfikX13tzy5Bcenp_TrLNtX097Y5gH",
      "Kehinde Adigun CV.pdf",
      setDownloadProgress,
      setFileUri
    );
    NewNotification(
      "PDF Download Successful",
      "You've sucessfully downloaded the PDF version of the CV"
    );
    isModalVisible(false);
  }

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={true}>
        <View style={styles.backdrop}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Downloading: {downloadProgress}</Text>
              <View style={styles.button}>
               
                <PrimaryButton onPress={imageDownloadHandler}>
                  Download Image
                </PrimaryButton>
              </View>
              <View style={styles.button}>
               
                <PrimaryButton onPress={pdfDownloadHandler}>
                  Download PDF
                </PrimaryButton>
              </View>
              <Pressable
                style={styles.buttonOpen}
                onPress={() => isModalVisible(false)}
              >
                <IconButton
                  iconTitle="Ionicons"
                  iconName="close-circle-outline"
                  iconSize={48}
                  iconColor={GlobalStyles.colors.primary50}
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
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
