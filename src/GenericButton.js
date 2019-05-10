import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


const MenuButtons = ({ whenClicked, colorButton, children, disabled }) => {
  const styles = {
    containerStyle: {
      paddingVertical: 10,
      marginVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: colorButton,
      marginHorizontal: 10,
      flex: 1,
      borderRadius: 5
    },
    buttonStyle: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700',
      fontSize: 28,
      paddingVertical: 2.5,
    },
    container: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingVertical: 10,
      backgroundColor: '#22a6b3',
      marginVertical: 3,
      marginHorizontal: 20,
      borderRadius: 7,
      borderWidth: 2,
      borderColor: '#fff'
    },
    bigContainer: {
      flex: 1,
    },
    imageStyle: {
      //backgroundColor: '#af9aff',
      position: 'absolute',
      //justifyContent: 'center',
      borderRadius: 15,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: '#fff'
    }
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          disabled={disabled}
          underlayColor='#fff'
          onPress={whenClicked}
          style={styles.container}
        >
          <Text style={styles.buttonStyle}>{children}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuButtons;
