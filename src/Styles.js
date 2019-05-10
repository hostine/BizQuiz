import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  titleStyle: {
    color: '#fff',
    fontSize: 48,
    fontFamily: 'KohinoorBangla-Semibold'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
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

export default Styles;
