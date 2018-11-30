/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MyContext = React.createContext()
export default class App extends Component {
  state = {
    name: 'yassir',
    age: 20,
    cool: true
  }

  render(){
    return(
      <View style={styles.container}>
        <Family name={this.state.name}/>
      </View>
    )
  }
}


class Person extends Component {
  render(){
    return(
      <View>
        <Text>Hey I'm {this.props.name}</Text>
      </View>
    )
  }
}

// the parenthesis let's us get ride of return  
const Family = (props) => (
  <View>
    <Person name={props.name}/>
  </View>
)
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
