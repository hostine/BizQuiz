import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';


const MenuButtons = ({ whenClicked, colorButton, children, onPressIn, onPressOut }) => {
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
      backgroundColor: '#28D3E5',
      marginVertical: 3,
      borderRadius: 10,
      marginHorizontal: 20,
      borderWidth: 2,
      borderColor: '#fff'
    },
    bigContainer: {
      flex: 1,
    }
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          activeOpacity={0.5}
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
