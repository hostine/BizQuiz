import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView,
  ImageBackground, TouchableWithoutFeedback, Keyboard, Animated, Easing,
ScrollView, Dimensions, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LottieView from 'lottie-react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal';
import MenuButtons from './src/MenuButtons';
import InputName from './src/InputName';
import GenericButton from './src/GenericButton';
import QuestionSection from './src/QuestionSection';
import AnswerSection from './src/AnswerSection';
import NextButton from './src/NextButton';
import TermsText from './src/TermsText';
import SocialMediaIcons from './src/SocialMediaIcons';
import FeedbackForm from './src/FeedbackForm';
import { generalQuiz } from './src/data/GeneralQuiz';
import { officerQuiz } from './src/data/OfficerQuiz';
import { skillsQuiz } from './src/data/SkillsQuiz';
import { competitionsQuiz } from './src/data/CompetitionsQuiz';
import { historyQuiz } from './src/data/HistoryQuiz';


//The opening screen with all the options
class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      xValue: new Animated.Value(0)
    };
    //this.handlePressIn = this.handlePressIn.bind(this);
    //this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(-100);
    this.animatedValue2 = new Animated.Value(-100);
    this.animatedValue3 = new Animated.Value(-100);
    this.buttonSize1 = new Animated.Value(1);
    this.buttonSize2 = new Animated.Value(1);
    this.buttonSize3 = new Animated.Value(1);
  }

  componentDidMount() {
    const { width, height } = Dimensions.get('window');

    Animated.stagger(300, [
      Animated.timing(this.animatedValue1, {
        toValue: width - 325,
        duration: 400,
        easing: Easing.cubic
      }),
      Animated.timing(this.animatedValue2, {
        toValue: width - 325,
        duration: 400,
        easing: Easing.cubic
      }),
      Animated.timing(this.animatedValue3, {
        toValue: width - 325,
        duration: 400,
        easing: Easing.cubic
      })
    ]).start();

    Animated.timing(this.state.xValue, {
      toValue: width - 310,
      duration: 1300,
      easing: Easing.linear
    }).start();
  }

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

  render() {
    const { container, titleContainer, containerButtons } = styles;
    const animatedStyle1 = { left: this.animatedValue1, width: 270 };
    const animatedStyle2 = { left: this.animatedValue2, width: 270 };
    const animatedStyle3 = { left: this.animatedValue3, width: 270 };
    const imageAnimatedStyle = { left: this.state.xValue };
    const buttonScaleStyle1 = {
      transform: [{ scale: this.buttonSize1 }]
    };
    const buttonScaleStyle2 = {
      transform: [{ scale: this.buttonSize2 }]
    };
    const buttonScaleStyle3 = {
      transform: [{ scale: this.buttonSize3 }]
    };
    const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

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
          source={require('./src/images/background.gif')}
        >
        <View style={titleContainer}>
          <Animated.View style={imageAnimatedStyle}>
            <Image
              source={require('./src/images/BizQuizz.png')}
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
            <Animated.View style={[animatedStyle1, buttonScaleStyle1]}>
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
            <Animated.View style={[animatedStyle2, buttonScaleStyle2]}>
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
            <Animated.View style={[animatedStyle3, buttonScaleStyle3]}>
              <MenuButtons
                onPressIn={this.handlePressIn3.bind(this)}
                onPressOut={this.handlePressOut3.bind(this)}
                whenClicked={() => this.props.navigation.navigate('Feedback')}
              >
              Feedback
              </MenuButtons>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

//The screen where user types in name and the quiz category
class DetailsScreen extends React.Component {

  //Navigation Options
  static navigationOptions = {
    title: 'New Game',
    headerTitleStyle: {
      fontSize: 22,
    },
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#22a6b3',
    }

  };

  //List of states
  state = { username: '', boardType: '', error: '' };
  //All possible functions
  onButtonPress() {
    const { username, boardType } = this.state;
    const user = username;
    if (user.length > 0 && boardType !== '') {
      this.props.navigation.navigate('BoardCreation', {
        boardType: boardType,
        username: username,
      });
    } else {
      this.setState({
        error: 'Please enter your name and the quiz you wish to play'
      });
    }
  }

  //RENDER on screen
  render() {
    const { welcomeScreen, containerStyle, pickerStyle, itemTextStyle, overlayStyle } = styles;

    const data = [{
      value: 'General Knowledge',
    }, {
      value: 'Business Skills',
    }, {
      value: 'FBLA Officers',
    }, {
      value: 'Competitions',
    }, {
      value: 'FBLA History',
    },
  ];

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior="padding"
          style={welcomeScreen}
          keyboardShouldPersistTaps='handled'
        >
          <StatusBar
            barStyle="light-content"
          />
          <InputName
            placeHolder="player name..."
            returnKeyType="next"
            keyboardType="default"
            capitalize="words"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />

            <Dropdown
              label='Which quiz would you like to take?'
              value=''
              itemCount={5}
              data={data}
              baseColor='#b2bec3'
              textColor='#fff'
              itemColor='#b2bec3'
              itemPadding={8}
              fontSize={20}
              labelFontSize={12}
              itemTextStyle={itemTextStyle}
              containerStyle={containerStyle}
              pickerStyle={pickerStyle}
              overlayStyle={overlayStyle}
              onChangeText={boardType => this.setState({ boardType })}
            />

            <Text
              style={{ color: '#ff6b81', textAlign: 'center', fontSize: 20, paddingBottom: 20 }}
            >
              {this.state.error}
            </Text>

          <GenericButton
            whenClicked={this.onButtonPress.bind(this)}
          >
            Start Game
          </GenericButton>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

//The screen with the actual trivia questions
class BoardCreation extends React.Component {

  static navigationOptions = {
    title: 'Trivia Questions',
    headerTitleStyle: {
      fontSize: 22,
    },
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#22a6b3',
      //position: 'absolute',
      //backgroundColor: 'transparent',
      borderBottomWidth: 0,
      //paddingBottom: 15,
      //paddingBottom: 15
    },

  };

  constructor(props) {
    super(props);
    const { questionOrder, data } = this.onRanQuestion();
    this.state = this.setupNewBoard(0, 0, questionOrder, data);
  }

  componentWillMount() {
    this.buttonSize1 = new Animated.Value(1);
    this.buttonSize2 = new Animated.Value(1);
    this.buttonSize3 = new Animated.Value(1);
    this.buttonSize4 = new Animated.Value(1);
  }

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

  onRanOrder() {
    var nums = [0, 1, 2, 3],
    ranNums = [],
    i = nums.length,
    j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }

    return (ranNums);
  }

  onRanQuestion() {
    const { navigation } = this.props;
    const boardType = navigation.getParam('boardType');
    let data;
    if (boardType === 'General Knowledge') {
      data = generalQuiz;
    } else if (boardType === 'FBLA Officers') {
      data = officerQuiz;
    } else if (boardType === 'Business Skills') {
      data = skillsQuiz;
    } else if (boardType === 'Competitions') {
      data = competitionsQuiz;
    } else if (boardType === 'FBLA History') {
      data = historyQuiz;
    }

    //const randomNum = Math.floor((Math.random() * data.length) + 0);
    let questionArr = [];

    for (let i = 0; i <= data.length; i++) {
      questionArr.push(i);
    }

    let questionOrder = [];
    let i = data.length;
    let j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      questionOrder.push(questionArr[j]);
      questionArr.splice(j, 1);
    }

    return ({ questionOrder, data });
  }

  setupNewBoard(initialScore, questionNum,
    questionOrder = this.state.questionOrder, data = this.state.data) {
    const ranNums = this.onRanOrder();

//As of here, questionOrder is now an array of random, non-repeating nums
//[5,3,2,7,1,3,5]
      const dataStuff = data[questionOrder[questionNum]];
      const questions = data[questionOrder[questionNum]].answerChoices;

      let isModalShown;
      if (questionNum > 4) {
        isModalShown = true;
      } else {
        isModalShown = false;
      }

    return ({
      nextPage: false,
      currentA: questions[ranNums[0]],
      currentB: questions[ranNums[1]],
      currentC: questions[ranNums[2]],
      currentD: questions[ranNums[3]],
      correctAnswer: questions[0],
      textValue: dataStuff.question,
      isRight: null,
      nextColor: '#aaa',
      colorA: '#22a6b3',
      colorB: '#22a6b3',
      colorC: '#22a6b3',
      colorD: '#22a6b3',
      disabledA: false,
      disabledB: false,
      disabledC: false,
      disabledD: false,
      score: initialScore,
      questionNumber: questionNum,
      showModal: isModalShown,
      questionOrder: questionOrder,
      data: data
  });
}

  onClickedA() {
    const { currentA, correctAnswer } = this.state;
    this.setState({ nextColor: '#1289A7',
      disabledA: true,
      disabledB: true,
      disabledC: true,
      disabledD: true,
    });
    if (currentA === correctAnswer) {
      this.setState({ nextPage: true, colorA: '#27ae60', score: this.state.score + 1 });
    } else {
      this.setState({ nextPage: true, colorA: '#d63031' });
    }
  }

  onClickedB() {
    const { currentB, correctAnswer } = this.state;
    this.setState({ nextColor: '#1289A7',
      disabledA: true,
      disabledB: true,
      disabledC: true,
      disabledD: true,
    });
    if (currentB === correctAnswer) {
       this.setState({ nextPage: true, colorB: '#27ae60', score: this.state.score + 1 });
     } else {
       this.setState({ nextPage: true, colorB: '#d63031' });
     }
  }

  onClickedC() {
    const { currentC, correctAnswer } = this.state;
    this.setState({ nextColor: '#1289A7',
      disabledA: true,
      disabledB: true,
      disabledC: true,
      disabledD: true,
    });
    if (currentC === correctAnswer) {
      this.setState({ nextPage: true, colorC: '#27ae60', score: this.state.score + 1 });
    } else {
      this.setState({ nextPage: true, colorC: '#d63031' });
    }
  }

  onClickedD() {
    const { currentD, correctAnswer } = this.state;
    this.setState({ nextColor: '#1289A7',
      disabledA: true,
      disabledB: true,
      disabledC: true,
      disabledD: true,
    });
    if (currentD === correctAnswer) {
      this.setState({ nextPage: true, colorD: '#27ae60', score: this.state.score + 1 });
    } else {
      this.setState({ nextPage: true, colorD: '#d63031' });
    }
  }

  onNextButton() {
    if (this.state.nextPage) {
      this.setState(this.setupNewBoard(this.state.score, this.state.questionNumber + 1));
    }
  }

  onToggleModal() {
    const { questionOrder, data } = this.onRanQuestion();
    this.setState(this.setupNewBoard(0, 0, questionOrder, data));
  }

  render() {
    const { navigation } = this.props;
    const { currentA, currentB, currentC, currentD,
      textValue, nextPage, nextColor,
      colorA, colorB, colorC, colorD, disabledA,
      disabledB, disabledC, disabledD, score } = this.state;

    const username = navigation.getParam('username');
    const endText = `Congratulations ${username}! You got ${score}/5 correct`;

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
      <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          backgroundColor: '#af9aff',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        resizeMode='cover'
        source={require('./src/images/questionskeep2.gif')}
      >
        <View style={{ height: 10 }} />
        <View style={styles.questionStyle}>
          <QuestionSection>
            {textValue}
          </QuestionSection>
        </View>
        <View style={styles.answerStyle}>
          <AnswerSection
            answerA={currentA}
            answerB={currentB}
            answerC={currentC}
            answerD={currentD}
            colorA={colorA}
            colorB={colorB}
            colorC={colorC}
            colorD={colorD}
            style1={buttonScaleStyle1}
            style2={buttonScaleStyle2}
            style3={buttonScaleStyle3}
            style4={buttonScaleStyle4}
            onPressIn1={this.handlePressIn1.bind(this)}
            onPressOut1={this.handlePressOut1.bind(this)}
            onPressIn2={this.handlePressIn2.bind(this)}
            onPressOut2={this.handlePressOut2.bind(this)}
            onPressIn3={this.handlePressIn3.bind(this)}
            onPressOut3={this.handlePressOut3.bind(this)}
            onPressIn4={this.handlePressIn4.bind(this)}
            onPressOut4={this.handlePressOut4.bind(this)}
            disabledA={this.state.disabledA}
            disabledB={disabledB}
            disabledC={disabledC}
            disabledD={disabledD}
            whenClickedA={this.onClickedA.bind(this)}
            whenClickedB={this.onClickedB.bind(this)}
            whenClickedC={this.onClickedC.bind(this)}
            whenClickedD={this.onClickedD.bind(this)}
          />
          <NextButton
            whenClicked={this.onNextButton.bind(this)}
            disabled={!nextPage}
            color={nextColor}
          >
            Next Page
          </NextButton>
        </View>
        <Modal
          isVisible={this.state.showModal}
          hideModalContentWhileAnimating
          animationInTiming={600}
        >
          <View
            style={{
            backgroundColor: '#fff',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 12,
            borderRadius: 15,
            //borderWidth: 3,
            //borderColor: '#22a6b3'
           }}
          >
            <Text
              style={{
                fontSize: 26,
                color: '#636e72',
                alignSelf: 'center',
                paddingBottom: 15,
                textAlign: 'center'
              }}
            >
              {endText}
            </Text>
            <GenericButton
              whenClicked={this.onToggleModal.bind(this)}
            >
              Play Again
            </GenericButton>
            <GenericButton
              whenClicked={() => this.props.navigation.navigate('Home')}
            >
              Go to Menu
            </GenericButton>
            <Text style={{ textAlign: 'center', fontSize: 14, color: '#aaa', paddingTop: 10 }}>
              Share your score:
            </Text>
            <SocialMediaIcons />
          </View>
        </Modal>
        </ImageBackground>
      </View>
    );
  }
}

class Settings extends React.Component {

  static navigationOptions = {
    title: 'Credits',
    headerTitleStyle: {
      fontSize: 22,
    },
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#22a6b3',
    }

  };

  //List of states
  state = { showButton: false };

  onToggleModal = () =>
    this.setState({ showButton: !this.state.showButton });

  render() {
    return (
        <ScrollView
          style={styles.welcomeScreen}
          overScrollMode="always"
        >
          <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 30 }}>Terms of Use</Text>
          </View>
          <View
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 15,
            paddingHorizontal: 10
          }}
          >
            <TermsText />

            <View style={{ height: 20 }} />
          </View>
        </ScrollView>
    );
  }
}

class Feedback extends React.Component {

  static navigationOptions = {
    title: 'Feedback',
    headerTitleStyle: {
      fontSize: 22,
    },
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#22a6b3',
    }

  };

  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

  //List of states
  state = { changeText: '' };

  changeText() {
    this.setState({
      changeText: 'You have successfully submitted your feedback!'
    });
  }

  submitButton() {
    this.props.witeText(this.state.text);

    this.setState({
      text: 'heyo'
    });
  }

  render() {
    return (
        <View
          style={styles.welcomeScreen}
        >
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
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
          </View>
          <GenericButton
            onPress={this.submitButton.bind(this)}
          >
            Submit Feedback
          </GenericButton>
          <Text>
            {}
          </Text>
        </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerBackTitle: 'Menu',
  },
    },
    Details: {
      screen: DetailsScreen,
    },
    BoardCreation: {
      screen: BoardCreation
    },
    Credits: {
      screen: Settings
    },
    Feedback: {
      screen: Feedback
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    color: '#fff',
    fontSize: 48,
    fontFamily: 'KohinoorBangla-Semibold'
  },
  titleContainer: {
    flex: 1,
    //flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: '#22a6b3',
  },
  container: {
    flex: 1,
    //backgroundColor: '#00cec9',
  },
  containerButtons: {
    flex: 1,
    //backgroundColor: '#22a6b3',
    //alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  welcomeScreen: {
    backgroundColor: '#535c68',
    flex: 1,
    paddingTop: 15,
  },
  containerStyle: {
    //backgroundColor: '#dfe6e9',
    marginHorizontal: 20,
    marginTop: 5,
    height: 65,
    marginBottom: 30
  },
  pickerStyle: {
    backgroundColor: '#535c68',
    //borderWidth: 2,
    borderColor: '#fff'
  },
  overlayStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  questionStyle: {
    flex: 2,
    marginHorizontal: 10
  },
  answerStyle: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  itemTextStyle: {
    color: '#aaa'
  }
});
