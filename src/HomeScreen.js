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
    this.buttonSize1 = new Animated.Value(1);
    this.buttonSize2 = new Animated.Value(1);
    this.buttonSize3 = new Animated.Value(1);
    this.buttonSize4 = new Animated.Value(1);
  }

//All of these are separate so that each button shrinks individually
  handlePressIn1() {
    Animated.spring(this.buttonSize1, {
      toValue: 0.5,
    }).start();
  }
  handlePressOut1() {
    Animated.spring(this.buttonSize1, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start();
  }

  handlePressIn2() {
    Animated.spring(this.buttonSize2, {
      toValue: 0.5,
    }).start();
  }
  handlePressOut2() {
    Animated.spring(this.buttonSize2, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start();
  }

    handlePressIn3() {
      Animated.spring(this.buttonSize3, {
        toValue: 0.5,
      }).start();
    }
    handlePressOut3() {
      Animated.spring(this.buttonSize3, {
        toValue: 1,
        friction: 3,
        tension: 40
      }).start();
    }
    handlePressIn4() {
      Animated.spring(this.buttonSize4, {
        toValue: 0.5,
      }).start();
    }
    handlePressOut4() {
      Animated.spring(this.buttonSize4, {
        toValue: 1,
        friction: 3,
        tension: 40
      }).start();
    }

  render() {
    const { container, titleContainer, containerButtons } = styles;
    const animatedStyle = { alignSelf: 'center', width: 270 };
    const imageAnimatedStyle = { alignSelf: 'center', };
    const buttonScaleStyle1 = {
      transform: [{ scale: this.buttonSize1 }]
    };
    const buttonScaleStyle2 = {
      transform: [{ scale: this.buttonSize2 }]
    };
    const buttonScaleStyle3 = {
      transform: [{ scale: this.buttonSize3 }]
    };
    const buttonScaleStyle4 = {
      transform: [{ scale: this.buttonSize4 }]
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
          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn1.bind(this)}
            onPressOut={this.handlePressOut1.bind(this)}
          >
            <Animated.View style={[animatedStyle, buttonScaleStyle1]}>
              <MenuButtons
                onPressIn={this.handlePressIn1.bind(this)}
                onPressOut={this.handlePressOut1.bind(this)}
                whenClicked={() => this.props.navigation.navigate('Details')}
              >
              New Game
              </MenuButtons>
            </Animated.View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn2.bind(this)}
            onPressOut={this.handlePressOut2.bind(this)}
          >
            <Animated.View style={[animatedStyle, buttonScaleStyle2]}>
              <MenuButtons
                onPressIn={this.handlePressIn2.bind(this)}
                onPressOut={this.handlePressOut2.bind(this)}
                whenClicked={() => this.props.navigation.navigate('Credits')}
              >
              Licenses
              </MenuButtons>
            </Animated.View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn3.bind(this)}
            onPressOut={this.handlePressOut3.bind(this)}
          >
            <Animated.View style={[animatedStyle, buttonScaleStyle3]}>
              <MenuButtons
                onPressIn={this.handlePressIn3.bind(this)}
                onPressOut={this.handlePressOut3.bind(this)}
                whenClicked={() => this.props.navigation.navigate('Feedback')}
              >
              Feedback
              </MenuButtons>
            </Animated.View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn3.bind(this)}
            onPressOut={this.handlePressOut3.bind(this)}
          >
            <Animated.View style={[animatedStyle, buttonScaleStyle4]}>
              <MenuButtons
                onPressIn={this.handlePressIn4.bind(this)}
                onPressOut={this.handlePressOut4.bind(this)}
                whenClicked={() => this.props.navigation.navigate('Feedback')}
              >
              Directions
              </MenuButtons>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
