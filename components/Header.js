import { Image, Text , View, StyleSheet } from 'react-native'

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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
})