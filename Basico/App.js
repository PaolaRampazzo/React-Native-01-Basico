import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BoasVindas from './components/BoasVindas';

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <BoasVindas saudacao='Bom dia!' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: '#8FD8D2',
  },
});
// PEACH #FEDCD2
// LEMON #DCB239
// WARM #DF744A    destaque
// POWDER #8FD8D2   fundo 
// WHITE #ffffff
// BLACK #000000