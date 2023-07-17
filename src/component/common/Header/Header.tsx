import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DoctaImage from '../../../assets/pictures/Doctalogo.png';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

function Header() {
  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={40} color="black" />
      <Image source={DoctaImage} resizeMode="contain" style={styles.image} />
      <EvilIcons name="navicon" size={40} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 100,
    width: '40%',
    alignItems: 'center',
  },
});

export default Header;
