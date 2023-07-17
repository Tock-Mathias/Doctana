import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import Button from '../../component/common/Styled/button';
import DoctaImage from '../../assets/pictures/Doctalogo.png';
import getAuth, {
  firebase,
  FirebaseAuthTypes,
} from '@react-native-firebase/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

const auth = getAuth();

function RegisterForm() {
  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>();
  const [confirmedPassword, setConfirmedPassword] = useState<
    string | undefined
  >();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    if (
      email === undefined ||
      password === undefined ||
      confirmedPassword == undefined
    ) {
      console.log('test');
      return;
    }
    if (password !== confirmedPassword) {
      console.log('Les mots de passe ne sont pas identiques');
      return;
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential: any) => {
          const user = userCredential.user;
          console.log('done');
          handleLogin();
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image source={DoctaImage} resizeMode="contain" style={styles.image} />
        <View style={styles.input_container_row}>
          <TextInput
            style={styles.field_row}
            placeholder="Prénom"
            placeholderTextColor="gray"
            onChangeText={(text: string) => {
              if (text === '') {
                setFirstName(undefined);
              } else {
                setFirstName(text);
              }
            }}
          />
          <TextInput
            style={styles.field_row}
            placeholder="Nom"
            placeholderTextColor="gray"
            onChangeText={(text: string) => {
              if (text === '') {
                setLastName(undefined);
              } else {
                setLastName(text);
              }
            }}
          />
        </View>
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
            secureTextEntry={true}
            placeholder="Mot de passe"
            placeholderTextColor="gray"
            onChangeText={(text: string) => {
              if (text === '') {
                setPassword(undefined);
              } else {
                setPassword(text);
              }
            }}
          />
        </View>
        <View style={styles.input_container}>
          <TextInput
            style={styles.field}
            placeholder="Confirmer le mot de passe"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(text: string) => {
              if (text === '') {
                setConfirmedPassword(undefined);
              } else {
                setConfirmedPassword(text);
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
          handleClick={handleSignUp}
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

export default RegisterForm;
