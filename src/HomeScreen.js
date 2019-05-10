import React from 'react';
import { View, StatusBar, ImageBackground, TouchableWithoutFeedback,
  Animated, Image } from 'react-native';
import MenuButtons from './MenuButtons';
import styles from './Styles';

//The opening screen with all the options
class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.buttonSize = [];
    for (let i = 0; i < 4; i++) {
      this.buttonSize.push(new Animated.Value(1));
    }
  }

  handlePressIn(buttonNum) {
    Animated.spring(this.buttonSize[buttonNum], {
      toValue: 0.5,
    }).start();
  }
  handlePressOut(buttonNum) {
    Animated.spring(this.buttonSize[buttonNum], {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start();
  }

  render() {
    const { container, titleContainer, containerButtons } = styles;
    const imageAnimatedStyle = { alignSelf: 'center', };
    const labels = ['New Game', 'Licenses', 'Feedback', 'Directions'];
    const destinations = ['Details', 'Credits', 'Feedback', 'Feedback']
    const renderButton = (num) => {
      return (
        <TouchableWithoutFeedback>
          <Animated.View style={{ alignSelf: 'center', width: 270, transform: [{ scale: this.buttonSize[num] }] }}>
            <MenuButtons
              onPressIn={() => this.handlePressIn(num)}
              onPressOut={() => this.handlePressOut(num)}
              whenClicked={() => this.props.navigation.navigate(destinations[num])}
            >
            {labels[num]}
            </MenuButtons>
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    };

    return (
      <View style={container}>
        <StatusBar
          barStyle="light-content"
        />
        <ImageBackground
          style={{
            backgroundColor: '#af9aff',
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
          source={require('./images/background.gif')}
        >
        <View style={titleContainer}>
          <Animated.View style={imageAnimatedStyle}>
            <Image
              source={require('./images/BizQuizz.png')}
              style={{ width: 240, height: 150, flex: 1 }}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
        <View style={[containerButtons]}>
          {renderButton(0)}
          {renderButton(1)}
          {renderButton(2)}
          {renderButton(3)}
        </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
