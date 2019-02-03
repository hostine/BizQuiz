import React from 'react';
import { View, Text, Animated } from 'react-native';
import AnswerButton from './AnswerButton';

const AnswerSection = ({ answerA, answerB, answerC, answerD, whenClickedA,
  whenClickedB, whenClickedC, whenClickedD, colorA, colorB, colorC, colorD,
  disabledA, disabledB, disabledC, disabledD, onPressIn1, onPressIn2,
  onPressIn3, onPressIn4, onPressOut1, onPressOut2, onPressOut3, onPressOut4,
  style1, style2, style3, style4 }) => {
  const { containerStyle, buttonStyle } = styles;

  return (
    <View style={containerStyle}>
      <Animated.View
        style={style1}
      >
        <AnswerButton
          style={buttonStyle}
          whenClicked={whenClickedA}
          color={colorA}
          disabled={disabledA}
          onPressIn={onPressIn1}
          onPressOut={onPressOut1}
        >
          {answerA}
        </AnswerButton>
      </Animated.View>

      <Animated.View
        style={style2}
      >
        <AnswerButton
          style={buttonStyle}
          whenClicked={whenClickedB}
          color={colorB}
          disabled={disabledB}
          onPressIn={onPressIn2}
          onPressOut={onPressOut2}
        >
          {answerB}
        </AnswerButton>
      </Animated.View>

      <Animated.View
        style={style3}
      >
        <AnswerButton
          style={buttonStyle}
          whenClicked={whenClickedC}
          color={colorC}
          disabled={disabledC}
          onPressIn={onPressIn3}
          onPressOut={onPressOut3}
        >
          {answerC}
        </AnswerButton>
      </Animated.View>

      <Animated.View
        style={style4}
      >
        <AnswerButton
          style={buttonStyle}
          whenClicked={whenClickedD}
          color={colorD}
          disabled={disabledD}
          onPressIn={onPressIn4}
          onPressOut={onPressOut4}
        >
          {answerD}
        </AnswerButton>
      </Animated.View>
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
