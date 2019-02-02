import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView,
  Image, TouchableWithoutFeedback, Keyboard, Animated, Easing } from 'react-native';
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
import SocialMediaIcons from './src/SocialMediaIcons';
import { generalQuiz } from './src/data/GeneralQuiz';
import { officerQuiz } from './src/data/OfficerQuiz';
import { skillsQuiz } from './src/data/SkillsQuiz';
import { competitionsQuiz } from './src/data/CompetitionsQuiz';
import { historyQuiz } from './src/data/HistoryQuiz';


class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0.2);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 0.9,
      duration: 1000
    }).start();
  }

  render() {
    const { container, titleContainer, containerButtons } = styles;
    const animatedStyle = { opacity: this.animatedValue };

    return (
      <View style={container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={titleContainer}>
          <Animated.View style={animatedStyle}>
            <Image
              source={require('./src/images/BizQuizz.png')}
              style={{ width: 240, height: 150, flex: 1 }}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
        <View style={[containerButtons]}>
          <Animated.View style={animatedStyle}>
            <MenuButtons
            whenClicked={() => this.props.navigation.navigate('Details')}
            >
            New Game
            </MenuButtons>
          </Animated.View>
          <Animated.View style={animatedStyle}>
            <MenuButtons
            whenClicked={() => this.props.navigation.navigate('Credits')}
            >
            Settings
            </MenuButtons>
          </Animated.View>
          <Animated.View style={animatedStyle}>
            <MenuButtons
            whenClicked={() => this.props.navigation.navigate('Details')}
            >
            Leaderboard
            </MenuButtons>
          </Animated.View>
        </View>
      </View>
    );
  }
}

class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <LottieView source={require('./src/images/hyperloading.json')} progress={this.state.progress} />
    );
  }
}

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
  state = { username: '', boardType: '' };
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
      const errorText = <Text>Please enter your name</Text>;
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
            placeHolder="player name"
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

class BoardCreation extends React.Component {

  static navigationOptions = {
    title: 'Trivia Questions',
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
    const { questionOrder, data } = this.onRanQuestion();
    this.state = this.setupNewBoard(0, 0, questionOrder, data);
  }

  getRanOrder() {
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
    var questionArr = [];

    for (let i = 0; i <= data.length; i++) {
      questionArr.push(i);
    }

    var questionOrder = [];
    var i = data.length;
    var j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      questionOrder.push(questionArr[j]);
      questionArr.splice(j, 1);
    }

    return ({ questionOrder, data });
  }

  setupNewBoard(initialScore, questionNum,
    questionOrder = this.state.questionOrder, data = this.state.data) {
    const ranNums = this.getRanOrder();

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
    return (
      <View style={styles.welcomeScreen}>
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
                fontSize: 36,
                color: '#636e72',
                alignSelf: 'center',
                paddingBottom: 15
              }}
            >
              You got {score}/5 right!
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
            <SocialMediaIcons />
          </View>
        </Modal>
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

    const firstText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

    return (
      <KeyboardAwareScrollView style={styles.welcomeScreen}>
        <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 30 }}>Terms of Use</Text>
        </View>
        <View
        style={{
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 15 }}
        >
          <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{firstText}</Text>
          <GenericButton
            whenClicked={this.onToggleModal}
          >
            Toggle
          </GenericButton>
          <Modal
            isVisible={this.state.showButton}
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
                  fontSize: 36,
                  color: '#636e72',
                  alignSelf: 'center',
                  paddingBottom: 15
                }}
              >
                You got 4/5 right!
              </Text>
              <GenericButton
                whenClicked={this.onToggleModal}
              >
                Play Again
              </GenericButton>
              <GenericButton
                whenClicked={() => this.props.navigation.navigate('Home')}
              >
                Go to Menu
              </GenericButton>
              <SocialMediaIcons />
            </View>
          </Modal>

        </View>
      </KeyboardAwareScrollView>
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
    BasicExample: {
      screen: BasicExample
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22a6b3',
  },
  container: {
    flex: 1,
    //backgroundColor: '#00cec9',
  },
  containerButtons: {
    flex: 1,
    backgroundColor: '#22a6b3',
    alignItems: 'center',
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
