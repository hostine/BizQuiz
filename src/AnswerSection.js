import React from 'react';
import { View, Text } from 'react-native';
import AnswerButton from './AnswerButton';

const AnswerSection = ({ answerA, answerB, answerC, answerD, whenClickedA,
  whenClickedB, whenClickedC, whenClickedD, colorA, colorB, colorC, colorD,
  disabledA, disabledB, disabledC, disabledD }) => {
  const { containerStyle, buttonStyle } = styles;

  return (
    <View style={containerStyle}>
      <AnswerButton
        style={buttonStyle}
        whenClicked={whenClickedA}
        color={colorA}
        disabled={disabledA}
      >
        {answerA}
      </AnswerButton>

      <AnswerButton
        style={buttonStyle}
        whenClicked={whenClickedB}
        color={colorB}
        disabled={disabledB}
      >
        {answerB}
      </AnswerButton>

      <AnswerButton
        style={buttonStyle}
        whenClicked={whenClickedC}
        color={colorC}
        disabled={disabledC}
      >
        {answerC}
      </AnswerButton>

      <AnswerButton
        style={buttonStyle}
        whenClicked={whenClickedD}
        color={colorD}
        disabled={disabledD}
      >
        {answerD}
      </AnswerButton>
    </View>
  );
};

const styles = {
  buttonStyle: {
    borderRadius: 10
  },
  containerStyle: {
    padding: 10,
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
