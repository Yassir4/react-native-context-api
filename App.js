/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    return (
      <View>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <View>
          <ThemedButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
