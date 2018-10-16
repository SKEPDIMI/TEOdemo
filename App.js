import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './src/Home';
import Sessions from './src/Sessions';

export default createBottomTabNavigator(
  {
    Home: Home,
    Sessions: Sessions,
  },
  /*{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        
        switch(iconName.toLowerCase()) {
          case "home":
            iconName='home'
          case "sessions":
            iconName='rowing'
          default:
            iconName = ''
        }

        return <Icon name={iconName} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }*/
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
