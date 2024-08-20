import { StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";



function Title({ children }) {
  return <Text style={styles.headerHead}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  headerHead: {
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    fontSize: 50,
  },
});
