import { Image, Text , View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles';
import logo from '../../assets/Logo-only.png'
import kehadlogo1 from '../../assets/kehadlogo@4x-8.png'

function Header({title, color}) {
  const logoName = {
    color: color,
    fontSize: 32,
    fontWeight: "bold",
   
  };
  return (
    <View style={styles.box}>
      <Image source={logo} style={styles.logo} />
      <Text style={logoName}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 40, // 120 for kehadlogo1
    height: 30,
    // resizeMode: 'cover',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  }
})

export default Header;
