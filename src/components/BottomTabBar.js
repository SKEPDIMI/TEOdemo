import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';

export default class CustomBottomTabBar extends Component {
  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.topCircle}></View>
        <BottomTabBar {...this.props} style={{ borderTopWidth: 0 }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  topCircle: {
    height: 20,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -10 },
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 80,
    marginBottom: -10
  },
})