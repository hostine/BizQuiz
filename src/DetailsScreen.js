import React from 'react';
import { Text, StatusBar, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import InputName from './InputName';
import GenericButton from './GenericButton';
import styles from './Styles';

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
        boardType,
        username,
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

//These are the options that the user can choose for their quiz
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
export default DetailsScreen;
