import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";

import { Provider, connect } from "react-redux";

import store from "../config/store";

class Screen1 extends Component {
  handleChangeText = text => {
    this.props.dispatch({
      type: "SET_USERNAME",
      value: text
    });
  };

  tambah = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  kurang = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  render() {
    return (
      <View style={{ flex: 0.5, backgroundColor: "yellow" }}>
        <Text>Screen 1</Text>
        <TextInput
          onChangeText={this.handleChangeText}
          value={this.props.username}
          style={{ backgroundColor: "white" }}
        />
        <Button onPress={this.tambah} title="Increment" />
        <Button onPress={this.kurang} title="Decrement" />
        <Text style={styles.bigText}>Data: {this.props.username} </Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.user.username
  };
};
Screen1 = connect(mapStateToProps)(Screen1);

class Screen2 extends Component {
  render() {
    return (
      <View style={{ flex: 0.5 }}>
        <Text>Screen 2</Text>
        <Text style={styles.bigText}>Data: {this.props.username} </Text>
        <Text style={styles.bigText}>
          Current Number is: {this.props.angka}
        </Text>
        <Text style={styles.bigText}>Sisa char: {this.props.remaining}</Text>
      </View>
    );
  }
}
const mapStateToProps1 = state => {
  return {
    username: state.user.username,
    angka: state.counter.value,
    remaining: state.user.remaining
  };
};
Screen2 = connect(mapStateToProps1)(Screen2);

class ReduxScreen extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Screen1 />
          <Screen2 />
        </View>
      </Provider>
    );
  }
}

const styles = {
  bigText: {
    fontSize: 20
  }
};

export default ReduxScreen;
