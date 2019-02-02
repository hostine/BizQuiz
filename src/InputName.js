import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

const InputName = ({ label, value, onChangeText, placeHolder, secureTextEntry, returnKeyType, keyboardType, onSubmitEditing, ref, capitalize }) => {
  const { inputStyle1, containerStyle, backgroundColor } = styles;

  return (
    <View style={containerStyle}>
      <View style={backgroundColor}>
        <TextInput
          style={inputStyle1}
          autoCapitalize={capitalize}
          secureTextEntry={secureTextEntry}
          placeholder={placeHolder}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          returnKeyType={returnKeyType}
          placeholderTextColor="#fff"
          keyboardType={keyboardType}
          onSubmitEditing={onSubmitEditing}
          selectionColor="#fff"
          //ref={ref}
        />
      </View>
    </View>
  );
};

const styles = {
  inputStyle1: {
    height: 50,
    marginBottom: 5,
    color: '#fff',
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
    //backgroundColor: '#dfe6e9',
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 5,
    color: '#000',
    paddingHorizontal: 10
  }
};

export default InputName;
