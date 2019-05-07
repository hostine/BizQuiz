import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

const AnswerSection = () => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={() => Linking.openURL('http://twitter.com/home?status=This%20an%20example%20of%20a%20pre-written%20tweet%20-%20don%27t%20forget%20it%20needs%20to%20be%20less%20than%20280%20characters….%20Find%20out%20how%20you%20build%20them%20yourself%20here!%20http%3A%2F%2Fbit.ly%2F2SEQId8″ target=”_blank')}
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
