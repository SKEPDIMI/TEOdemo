import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default class Tips extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          fontFamily="Montserrat"
          style={{
            fontSize: 31,
            marginBottom: 10
          }}
        >Welcome to Tips and Tricks!</Text>
        <Button
          title="Example of tips and tricks"
          buttonStyle={{
            backgroundColor: '#00D0D2',
            borderRadius: 10
          }}
          containerViewStyle={{
            marginLeft: 0
          }}
          iconRight={{
            name: 'chevron-right'
          }}
          onPress={() => this.props.navigation.push('TipsAndTricks')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
});