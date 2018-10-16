import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './src/views/Home';
import Tips from './src/views/Tips';
import Search from './src/views/Search';
import Notifications from './src/views/Notifications';
import Account from './src/views/Account';
import BottomTabBar from './src/components/BottomTabBar';
import TipsAndTricks from './src/views/TipsAndTricks';

const tabNavigation = createBottomTabNavigator(
  {
    Home: Home,
    Tips: Tips,
    Search: { screen: Search, navigationOptions: { title: '' } },
    Notifications: Notifications,
    Account: Account
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarComponent: props => <BottomTabBar {...props} />,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName == 'Home') {
          iconName ='home'
        } else if (routeName == 'Tips') {
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

export default StackNavigator({
  TipsAndTricks: TipsAndTricks,
  tabNavigation: tabNavigation,
}, {
  initialRouteName: 'tabNavigation',
  navigationOptions: { header: null } 
});

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
