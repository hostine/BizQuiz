import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';


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
      marginHorizontal: 20
    },
    bigContainer: {
      flex: 1,
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
