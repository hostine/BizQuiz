import React from 'react';
import { View, Text } from 'react-native';

const QuestionSection = ({ children }) => {
  const { textStyle, containerStyle, titleStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text
        style={textStyle}
        //adjustsFontSizeToFit
      >
        {children}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    color: '#535c68',
    //paddingHorizontal: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '300'
  },
  titleStyle: {

  },
  containerStyle: {
    padding: 50,
    //paddingVertical: 15,
    //marginHorizontal: 10,
    //marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center'
    //backgroundColor: 'rgba(255,255,255,0.2)',
  }
};

export default QuestionSection;
