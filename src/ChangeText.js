import React, { Component } from 'react';
import { Image, TextInput } from 'react-native';

class AllBooks extends Component {

  /*
    All Books displays every single book regardless of if they are available
    or not. From All Books the user can check out, return, and reserve books.
    This list can be filtered by the search bar where you can search by
    book title or author
  */

  static navigationOptions = {
    tabBarLabel: 'Browse Books',
    drawerIcon: () => {
      const uri = 'https://d30y9cdsu7xlg0.cloudfront.net/png/137857-200.png';
      return (
        <Image
          source={{ uri }}
          style={{ height: 35, width: 35 }}
        />
      );
    }
  }

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder ' };
  }

  render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
      />
    );
  }
}


export default AllBooks;
