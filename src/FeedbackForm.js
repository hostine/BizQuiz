import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import GenericButton from './GenericButton';
import InputName from './InputName';

const FeedbackForm = ({ submitText, whenClicked }) => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{ color: '#fff', fontSize: 18 }}
        >
          Please provide us any questions, concerns, or suggestions below:
        </Text>
      </View>
      <View>
        <InputName
          placeHolder="Feedback here..."
          returnKeyType="next"
          keyboardType="default"
        />
      </View>
      <GenericButton
        onPress={whenClicked}
      >
        Submit Feedback
      </GenericButton>
      <Text>
        {submitText}
      </Text>
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
    //flexDirection: 'row',
    //justifyContent: 'space-around'
    //flex: 1,
    //backgroundColor: 'rgba(255,255,255,0.2)',
  },
  backgroundColor: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: 50,
    marginBottom: 5,
    color: '#FFF',
    paddingHorizontal: 10
  },
  inputStyle1: {
    height: 50,
    marginBottom: 5,
    color: '#fff',
    paddingHorizontal: 10,
    fontSize: 18
  },
};

export default FeedbackForm;
