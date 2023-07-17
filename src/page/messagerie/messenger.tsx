import React, {useEffect, useState} from 'react';
import {
  DimensionValue,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Header from '../../component/common/Header/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {primaryColor} from '../../constant/color';
import SpeechBubble from '../../component/common/SpeechBuble/SpeechBuble';
import speechBuble from '../../component/common/SpeechBuble/SpeechBuble';

function Messenger() {
  const [text, setText] = useState<string>('');
  const [listMessage] = useState<Array<string[]>>([['Hello', 'left']]);

  const handleInputChange = (inputText: string) => {
    setText(inputText);
  };
  useEffect(() => {
    console.log('message');
  }, [listMessage]);

  const sendMessage = () => {
    listMessage?.push([text, 'right']);
    listMessage?.push(['answer', 'left']);
    setText('');
  };

  return (
    <View style={styles.page_container}>
      <Header></Header>
      {listMessage.map(elt => {
        return <SpeechBubble content={elt[0]} position={elt[1]}></SpeechBubble>;
      })}
      <View
        style={{
          width: '90%',
          marginTop: 'auto',
          height: 'auto',
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <Entypo name="camera" size={30} color={primaryColor} />
        <TextInput
          style={{
            width: '75%',
            backgroundColor: '#EDEDED',
            height: 'auto',
            minHeight: 30,
            maxHeight: 100,
            borderRadius: 20,
            marginLeft: 4,
            color: 'black',
            paddingLeft: 10,
            fontFamily: 'HammersmithOne-Regular',
          }}
          onChangeText={handleInputChange}
          multiline
        />
        <MaterialCommunityIcons
          name="send-circle"
          size={31}
          color={primaryColor}
          onPress={sendMessage}
        />
      </View>
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
  },
});
export default Messenger;
