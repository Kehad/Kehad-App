import { Image, Text , View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles';

function Header({title, color}) {
  // console.log(color);
  const styles = {
    color: color,
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
