import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


const NextButton = ({ whenClicked, colorButton, children, disabled, color }) => {
  const styles = {
    containerStyle: {
      paddingVertical: 10,
      marginVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: colorButton,
      marginHorizontal: 10,
      flex: 1,
      borderRadius: 5
    },
    buttonStyle: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700',
      fontSize: 28,
      paddingVertical: 2.5,
    },
    container: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingVertical: 10,
      backgroundColor: color,
      marginVertical: 3,
      marginHorizontal: 20,
      //borderWidth: 2,
      borderColor: '#fff',
      borderRadius: 15
    },
    bigContainer: {
      flex: 1,
    }
  };

  return (

    <Text style={{ color: '#fff', fontSize: 18 }}>
      Thanks for playing BizQuiz!~{'\n\n'}
      Special thanks to those who let us use their images:{'\n\n'}
      https://en.instagram-brand.com/assets/glyph-icon{'\n'}
      https://fr.wikipedia.org/wiki/Fichier:Twitter_Bird.svg{'\n'}
      https://en.wikipedia.org/wiki/File:Facebook_logo_(square).png{'\n'}
      https://giphy.com/gifs/giphyworldgifs-gradient-2tNvsKkc0qFdNhJmKk{'\n\n'}
      All images were used with the permission of the owner.
    </Text>
  );
};

export default NextButton;
