import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

const AnswerSection = () => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://mobile.twitter.com/')}
      >
        <Image
          source={require('./images/Twitter.png')}
          style={{ height: 45, width: 100 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.instagram.com/')}
      >
        <Image
          source={require('./images/Instagram.png')}
          style={{ height: 45, width: 100 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://m.facebook.com/')}
      >
        <Image
          source={require('./images/Facebook.png')}
          style={{ height: 45, width: 100 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome')}
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
    paddingTop: 10,
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
