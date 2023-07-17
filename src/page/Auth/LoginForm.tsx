import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import DoctaImage from '../../assets/pictures/Doctalogo.png';
import Button from '../../component/common/Styled/button';
import {firebase} from '@react-native-firebase/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

function LoginForm() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    if (email === undefined || password === undefined) {
      console.log('Champs non rempli');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          const user = userCredential.user;
          console.log(user);
          navigation.navigate('Home');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image source={DoctaImage} resizeMode="contain" style={styles.image} />
        <View style={styles.input_container}>
          <TextInput
            style={styles.field}
            placeholder="Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            onChangeText={(text: string) => {
              if (text === '') {
                setEmail(undefined);
              } else {
                setEmail(text);
              }
            }}
          />
        </View>
        <View style={styles.input_container}>
          <TextInput
            style={styles.field}
            placeholder="Mot de passe"
            placeholderTextColor="gray"
            keyboardType="email-address"
            onChangeText={(text: string) => {
              if (text === '') {
                setPassword(undefined);
              } else {
                setPassword(text);
              }
            }}
          />
        </View>
        <Button
          variant="primary"
          text="Etape suivante"
          width="30%"
          height={30}
          IStyleTxt={{fontSize: 10}}
          IStyleBtn={{
            borderRadius: 10,
          }}
          handleClick={handleLogin}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    width: '80%',
    gap: 20,
    alignItems: 'center',
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },

  input_container: {
    width: '100%',
  },

  input_container_row: {
    width: '100%',
    flexDirection: 'row',
    flexGrow: 1,
    gap: 20,
  },

  field: {
    width: 'auto',
    backgroundColor: '#EDEDED',
    color: 'black',
    fontFamily: 'Inter',
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 0.8,
  },

  field_row: {
    width: 'auto',
    flexGrow: 1,
    backgroundColor: '#EDEDED',
    color: 'black',
    fontFamily: 'Inter',
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 0.8,
  },

  image: {
    height: 100,
    width: '40%',
    alignItems: 'center',
    marginBottom: -20,
  },
});

export default LoginForm;
