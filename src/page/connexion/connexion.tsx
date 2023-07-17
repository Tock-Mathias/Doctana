import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DoctaImage from '../../assets/pictures/Doctalogo.png';
import Button from '../../component/common/Styled/button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

import auth from '@react-native-firebase/auth';

function Connexion() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const signInAnonymous = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.back}>
      <Text style={styles.welcome}>Bienvenue</Text>
      <Image
        source={DoctaImage}
        resizeMode="contain"
        style={{height: 60, alignItems: 'center'}}
      />
      <Text style={styles.info_text}>
        Avant de profiter pleinement de Docta, prenons un instant pour créer
        votre compte
      </Text>
      <Button
        variant={'primary'}
        text={'Je crée mon compte'}
        width={'75%'}
        height={50}
        IStyleBtn={{marginTop: 100}}
        handleClick={() => {
          navigation.navigate('RegisterForm');
        }}
      />
      <Button
        variant={'secondary'}
        text={"J'ai déjà un compte"}
        width={'75%'}
        height={50}
        IStyleBtn={{marginTop: -30}}
        handleClick={() => {
          navigation.navigate('LoginForm');
        }}
      />
      <Text
        style={{
          color: 'black',
          marginTop: 'auto',
          marginBottom: 10,
          fontWeight: 'bold',
          fontFamily: 'Inter-semibold',
        }}>
        En partenariat avec Doctolib
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    color: '#1D059A',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 50,
    width: 'auto',
    fontFamily: 'HammersmithOne-Regular',
  },
  info_text: {
    color: '#1D059A',
    fontSize: 18,
    width: '80%',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  back: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 45,
  },
});

export default Connexion;
