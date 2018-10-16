import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './src/Home';
import Sessions from './src/Sessions';
import Search from './src/Search';
import Notifications from './src/Notifications';
import Account from './src/Account';

export default createBottomTabNavigator(
  {
    Home: Home,
    Sessions: Sessions,
    Search: Search,
    Notifications: Notifications,
    Account: Account
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName == 'Home') {
          iconName ='home'
        } else if (routeName == 'Sessions') {
          iconName ='chat-bubble'
        } else if (routeName == 'Search') {
          iconName ='search'
        } else if (routeName == 'Notifications') {
          iconName ='notifications'
        } else if (routeName == 'Account') {
          iconName ='account-circle'
        } else if (routeName == 'Sessions') {
          iconName ='chat-bubble'
        } else {
          iconName = ''
        }

        return <Icon name={iconName} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  }
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
