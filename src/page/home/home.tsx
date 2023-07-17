import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../../component/common/Header/Header';
import Button from '../../component/common/Styled/button';
import {secondaryColor} from '../../constant/color';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

function Home() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.page_container}>
      <Header />
      <View
        style={{
          width: '85%',
          backgroundColor: secondaryColor,
          height: '25%',
          borderRadius: 30,
          borderWidth: 2,
          borderColor: '#1D059A',
          marginTop: -15,
        }}></View>
      <Button
        variant="tertiary"
        text="Accéder a la messagerie"
        handleClick={() => {
          navigation.navigate('Messenger');
        }}></Button>
      <Button variant="tertiary" text="Historique des jours"></Button>
      <View style={styles.bottom_adjust}>
        <Button variant="primary" text="Contacter un intervenant" />
      </View>
      <Text style={styles.summary_takeover}>
        Consulter les bilans des visites
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page_container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  bottom_adjust: {
    width: '100%',
    marginTop: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  summary_takeover: {
    color: 'black',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginTop: -15,
    marginBottom: 30,
    fontFamily: 'HammersmithOne-Regular',
  },
});
export default Home;
