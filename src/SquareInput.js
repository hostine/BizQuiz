import React from 'react';
import { TextInput, View, Text } from 'react-native';

const SquareInput = ({ title }) => {
  const { inputStyle1, containerStyle, backgroundColor, titleStyle } = styles;

  return(
    <View style={containerStyle}>
      <Text style={titleStyle}>{title}</Text>
      <View style={backgroundColor}>
        <TextInput
          style={inputStyle1}
          placeholderTextColor="rgba(255,255,255,0.8)"
          selectionColor="#fff"
          placeholder='Enter here'
        />
      </View>
    </View>
  );
};

const styles = {
  inputStyle1: {
    height: 50,
    marginBottom: 5,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18
  },
  containerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    //backgroundColor: 'rgba(255,255,255,0.2)',
  },
  backgroundColor: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: 50,
    marginBottom: 5,
    color: '#FFF',
    paddingHorizontal: 10
  },
  titleStyle: {
    fontSize: 20,
    color: '#fff',
    paddingBottom: 10
  }
};

export default SquareInput;
