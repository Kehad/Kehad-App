import { Image, Text , View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../constants/styles';

function Header() {
  return (
    <View>
      {/* <Image source={require('.') } /> */}
      <Text style={styles.headerText}>Kehad</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: GlobalStyles.colors.textBlack
  }
})