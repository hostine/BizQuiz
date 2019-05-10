import React from 'react';
import Modal from 'react-native-modal';
import { Text, View, ImageBackground, Animated } from 'react-native';
import SocialMediaIcons from './SocialMediaIcons';
import GenericButton from './GenericButton';
import QuestionSection from './QuestionSection';
import AnswerSection from './AnswerSection';
import NextButton from './NextButton';
import styles from './Styles';
import { generalQuiz } from './data/GeneralQuiz';
import { officerQuiz } from './data/OfficerQuiz';
import { skillsQuiz } from './data/SkillsQuiz';
import { competitionsQuiz } from './data/CompetitionsQuiz';
import { historyQuiz } from './data/HistoryQuiz';

//The screen with the actual trivia questions, most complex class

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
    //Pulls information from dropdown on previous next page
    //and determines which quiz was selected
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

    const questionArr = [];

    for (let i = 0; i <= data.length; i++) {
      questionArr.push(i);
    }

    const questionOrder = [];
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
//so that questions are not repeated
      const dataStuff = data[questionOrder[questionNum]];
      const questions = data[questionOrder[questionNum]].answerChoices;

//Checks if user has answered 5 questions, if so game is over
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
      questionOrder,
      data
  });
}

  onClickedA() {
//checks the answer of A
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
//checks the answer of B
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
//checks the answer of C
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
//checks the answer of D
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
    //questionNumber increments every time the user goes to the next question
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
        source={require('./images/questionskeep2.gif')}
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
            Next Question
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

export default BoardCreation;
