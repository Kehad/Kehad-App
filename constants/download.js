import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const imageUrl =
  "https://drive.google.com/uc?export=download&id=1_JHSQ7nsJIki8y2eiOBTw3bZayFpJa0q";
const pdfFileUrl =
  "https://drive.google.com/uc?export=download&id=1gwqfikX13tzy5Bcenp_TrLNtX097Y5gH";

export const downloadImage = async (
  oneUrl,
  oneName,
  setDownloadProgress,
  setFileUri
) => {
  const uri = `https://drive.google.com/uc?export=download&id=${oneUrl}`; // Dynamic URL
  const fileUri = FileSystem.documentDirectory + oneName;

  const downloadResumable = FileSystem.createDownloadResumable(
    uri,
    fileUri,
    {},
    (progress) => {
      const progressPercentage =
        (progress.totalBytesWritten / progress.totalBytesExpectedToWrite) * 100;
      setDownloadProgress(progressPercentage.toFixed(2));
    }
  );

  try {
    const { uri } = await downloadResumable.downloadAsync();
    setFileUri(uri);
    console.log("File saved to:", uri);

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri);
    } else {
      console.log("Sharing is not available on this platform");
    }
  } catch (e) {
    console.error("Error downloading file:", e);
  }
};
