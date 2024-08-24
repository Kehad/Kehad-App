import { Image, Text , View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles';

function Header({title, tintColor}) {
  console.log(tintColor);
  const styles = {
    color: tintColor,
    fontSize: 32,
    fontWeight: "bold",
  };
  return (
    <View>
      {/* <Image source={require('.') } /> */}
      <Text style={styles}>{title}</Text>
    </View>
  )
}

export default Header;
