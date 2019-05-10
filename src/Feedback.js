import React from 'react';
import { Text, View } from 'react-native';
import GenericButton from './GenericButton';
import InputName from './InputName';
import styles from './Styles';

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

export default Feedback;
