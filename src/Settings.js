import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import TermsText from './TermsText';
import styles from './Styles';

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

export default Settings;
