import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

const AnswerSection = () => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={() => Linking.openURL('Twitter://')}
      >
        <Image
          source={require('./images/Twitter.png')}
          style={{ height: 45, width: 100 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('instagram://')}
      >
        <Image
          source={require('./images/Instagram.png')}
          style={{ height: 45, width: 100 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('FaceBook://')}
      >
        <Image
          source={require('./images/Facebook.png')}
          style={{ height: 45, width: 100 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('Snapchat://')}
      >
        <Image
          source={require('./images/Snapchat.png')}
          style={{ height: 45, width: 100 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonStyle: {
    borderRadius: 10
  },
  containerStyle: {
    padding: 10,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
    //flex: 1,
    //backgroundColor: 'rgba(255,255,255,0.2)',
  },
  backgroundColor: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: 50,
    marginBottom: 5,
    color: '#FFF',
    paddingHorizontal: 10
  }
};

export default AnswerSection;
