import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';


const MenuButtons = ({ whenClicked, children, color, disabled, onPressIn, onPressOut }) => {
  const styles = {
    containerStyle: {
      paddingVertical: 10,
      marginVertical: 10,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      flex: 1,
      borderRadius: 5
    },
    buttonStyle: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700',
      fontSize: 18,
      paddingVertical: 2.5,
    },
    container: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingVertical: 10,
      backgroundColor: color,
      marginVertical: 3,
      marginHorizontal: 20,
      borderRadius: 5
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
          underlayColor='#fff'
          onPress={whenClicked}
          style={styles.container}
          disabled={disabled}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Text
            style={styles.buttonStyle}
          >
            {children}
          </Text>

        </TouchableOpacity>

      </View>
    </View>
  );
};

export default MenuButtons;
