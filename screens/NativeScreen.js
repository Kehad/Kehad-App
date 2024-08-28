// import { StatusBar } from "expo-status-bar";
// import { useEffect, useState } from "react";
// import { Button, Platform, StyleSheet, Text, View } from "react-native";
// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function App() {
//   const [downloadProgress, setDownloadProgress] = useState(0);
//   const [download, setDownload] = useState();
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [isDownloaded, setIsDownloaded] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   const callback = (progress) => {
//     const percentProgress = (
//       (progress.totalBytesWritten / progress.totalBytesExpectedToWrite) *
//       100
//     ).toFixed(2);
//     setDownloadProgress(percentProgress);
//   };

//   useEffect(() => {
//     const getDownloadable = async () => {
//       try {
//         const savedDownloadJSON = await AsyncStorage.getItem("download");

//         if (savedDownloadJSON !== undefined && savedDownloadJSON !== null) {
//           const savedDownload = JSON.parse(savedDownloadJSON);
//           const downloadResumable = FileSystem.createDownloadResumable(
//             savedDownload.url,
//             savedDownload.fileUri,
//             savedDownload.options,
//             callback,
//             savedDownload.resumeData
//           );

//           setDownload(downloadResumable);
//           setIsPaused(true);
//           setIsDownloading(true);
//         } else {
//           const downloadResumable = FileSystem.createDownloadResumable(
//             "https://drive.google.com/uc?export=download&id=1_JHSQ7nsJIki8y2eiOBTw3bZayFpJa0q", // https://drive.google.com/file/d/1_JHSQ7nsJIki8y2eiOBTw3bZayFpJa0q/view?usp=sharing
//             FileSystem.documentDirectory + "large.jpeg",
//             {},
//             callback
//           );
//           setDownload(downloadResumable);
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getDownloadable();

//     return async () => {
//       if (isDownloading) {
//         await pauseDownload();
//       }
//     };
//   }, []);

//   const downloadFile = async () => {
//     setIsDownloading(true);
//     const { uri } = await download.downloadAsync();
//     console.log(uri)
//     // AsyncStorage.removeItem("download");
//     setIsDownloaded(true);
//   };

//   const pauseDownload = async () => {
//     setIsPaused(true);
//     await download.pauseAsync();
//     // AsyncStorage.setItem("download", JSON.stringify(download.savable()));
//     console.log("Paused download");
//   };

//   const resumeDownload = async () => {
//     setIsPaused(false);
//     const { uri } = await download.resumeAsync();
//     // AsyncStorage.removeItem("download");
//     setIsDownloaded(true);
//   };

//   // const resetDownload = async () => {
//   //   setIsDownloaded(false);
//   //   setIsDownloading(false);
//   //   setIsPaused(false);
//   //   setDownloadProgress(0);

//   //   AsyncStorage.removeItem("download");
//   //   const downloadResumable = FileSystem.createDownloadResumable(
//   //     "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.jpeg",
//   //     FileSystem.documentDirectory + "large.jpeg",
//   //     {},
//   //     callback
//   //   );
//   //   setDownload(downloadResumable);
//   // };

//   const exportDownload = async () => {
//     if (Platform.OS === "android") {
//       const permissions =
//         await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
//       if (permissions.granted) {
//         const base64 = await FileSystem.readAsStringAsync(
//           FileSystem.documentDirectory + "large.jpeg",
//           { encoding: FileSystem.EncodingType.Base64 }
//         );

//         await FileSystem.StorageAccessFramework.createFileAsync(
//           permissions.directoryUri,
//           "large.jpeg",
//           "application/jpeg"
//         )
//           .then(async (uri) => {
//             await FileSystem.writeAsStringAsync(uri, base64, {
//               encoding: FileSystem.EncodingType.base64,
//             });
//           })
//           .catch((e) => console.log(e));
//       }
//     } else {
//       await Sharing.shareAsync(FileSystem.documentDirectory + "large.jpeg");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {isDownloading && <Text>Progress: {downloadProgress}%</Text>}
//       {!isDownloading && !isPaused && (
//         <Button title="Download" onPress={downloadFile} />
//       )}
//       {/* {isDownloading && !isPaused && (
//         <Button title="Pause" onPress={pauseDownload} />
//       )} */}
//       {/* {isPaused && <Button title="Resume" onPress={resumeDownload} />} */}
//       {/* {(isDownloading || isDownloaded) && (
//         <Button title="Reset" onPress={resetDownload} />
//       )} */}

//       {isDownloaded && <Button title="Export File" onPress={exportDownload} />}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

///////////////////////// --------------------------- ////////////////////////////////////////
///////////////////// METHOD 2 --------- ////////////////////////////////////////////
///////////////////////// --------------------------- ////////////////////////////////////////

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Button, View, Platform } from "react-native";
// import * as FileSystem from "expo-file-system";
// import { shareAsync } from "expo-sharing";

// export default function App() {
//   const downloadFromUrl = async () => {
//     const filename = "kehad.jpeg";
//     const result = await FileSystem.downloadAsync(
//       "https://drive.google.com/uc?export=download&id=1_JHSQ7nsJIki8y2eiOBTw3bZayFpJa0q",
//       FileSystem.documentDirectory + filename
//     );
//     console.log(result);

//     save(result.uri, filename, result.headers["Content-Type"]);
//   };

//   const downloadFromAPI = async () => {
//     const filename = "MissCoding.pdf";
//     const localhost = Platform.OS === "android" ? "10.0.2.2" : "127.0.0.1";
//     const result = await FileSystem.downloadAsync(
//       `http://${localhost}:5000/generate-pdf?name=MissCoding&email=hello@tripwiretech.com`,
//       FileSystem.documentDirectory + filename,
//       {
//         headers: {
//           MyHeader: "MyValue",
//         },
//       }
//     );
//     console.log(result);
//     save(result.uri, filename, result.headers["Content-Type"]);
//   };

//   const save = async (uri, filename, mimetype) => {
//     if (Platform.OS === "android") {
//       const permissions =
//         await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
//       if (permissions.granted) {
//         const base64 = await FileSystem.readAsStringAsync(uri, {
//           encoding: FileSystem.EncodingType.Base64,
//         });
//         await FileSystem.StorageAccessFramework.createFileAsync(
//           permissions.directoryUri,
//           filename,
//           mimetype
//         )
//           .then(async (uri) => {c
//             await FileSystem.writeAsStringAsync(uri, base64, {
//               encoding: FileSystem.EncodingType.Base64,
//             });
//           })
//           .catch((e) => console.log(e));
//       } else {
//         shareAsync(uri);
//       }
//     } else {
//       shareAsync(uri);
//     }
    
//       shareAsync(uri);

//   };
//   return (
//     <View style={styles.container}>
//       <Button title="Download From URL" onPress={downloadFromUrl} />
//       <Button title="Download From API" onPress={downloadFromAPI} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });



///////////////////////// --------------------------- ////////////////////////////////////////
///////////////////// METHOD 3 --------- ////////////////////////////////////////////
///////////////////////// --------------------------- ////////////////////////////////////////

import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";

export default function App() {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [fileUri, setFileUri] = useState(null);

  const downloadFile = async () => {
    const uri =
      "https://drive.google.com/uc?export=download&id=1_JHSQ7nsJIki8y2eiOBTw3bZayFpJa0q"; // Replace with the URL of the file you want to download
    const fileUri = FileSystem.documentDirectory + "downloadedImage.jpg"; // Path to save the file

    const downloadResumable = FileSystem.createDownloadResumable(
      uri,
      fileUri,
      {},
      (progress) => {
        const progressPercentage =
          (progress.totalBytesWritten / progress.totalBytesExpectedToWrite) *
          100;
        setDownloadProgress(progressPercentage.toFixed(2));
      }
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      setFileUri(uri);
      console.log("File saved to:", uri);
    } catch (e) {
      console.error("Download failed:", e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Download Progress: {downloadProgress}%</Text>
      <Button title="Download File" onPress={downloadFile} />
      {fileUri && <Text>File saved at: {fileUri}</Text>}
    </View>
  );
}


///////////////////////// --------------------------- ////////////////////////////////////////
///////////////////// METHOD 4 --------- ////////////////////////////////////////////
///////////////////////// --------------------------- ////////////////////////////////////////
// import React, { useState } from "react";
// import { Image, Button, View, Text } from "react-native";
// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";

// export default function App() {
//   const [fileUri, setFileUri] = useState(null);
//   const [downloadProgress, setDownloadProgress] = useState(0);

//   const downloadImage = async () => {
//     const uri =
//       "https://drive.google.com/uc?export=download&id=1_JHSQ7nsJIki8y2eiOBTw3bZayFpJa0q"; // Replace with the file URL
//     const fileUri = FileSystem.documentDirectory + "downloadedImage.jpg";

//     const downloadResumable = FileSystem.createDownloadResumable(
//       uri,
//       fileUri,
//       {},
//       (progress) => {
//         const progressPercentage =
//           (progress.totalBytesWritten / progress.totalBytesExpectedToWrite) *
//           100;
//         setDownloadProgress(progressPercentage.toFixed(2));
//       }
//     );

//     try {
//       const { uri } = await downloadResumable.downloadAsync();
//       setFileUri(uri);
//       console.log("Image saved to:", uri);


//       const shareFile = async () => {
//         const fileUri = FileSystem.documentDirectory + "downloadedImage.jpg";
//         if (await Sharing.isAvailableAsync()) {
//           await Sharing.shareAsync(fileUri);
//         } else {
//           console.log("Sharing is not available on this platform");
//         }
//       };

//       await shareFile(uri);

//     } catch (e) {
//       console.error("Error downloading image:", e);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Button title="Download Image" onPress={downloadImage} />
//       <Button title="Download Image" onPress={() => downloadImage()} />
//       <Text>Download Progress: {downloadProgress}%</Text>
//       {fileUri && (
//         <Image
//           source={{ uri: fileUri }}
//           style={{ width: 200, height: 200, marginTop: 20 }}
//         />
//       )}
//     </View>
//   );
// }


