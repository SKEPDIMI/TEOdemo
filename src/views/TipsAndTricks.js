import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Header, Icon } from 'react-native-elements';
import {widthPercentageToDP as vw, heightPercentageToDP as vh} from 'react-native-responsive-screen';

export default class TipsAndTricks extends Component {
  render() {
    return (
      <ScrollView style={StyleSheet.mainContainer}>
        <View
          style={styles.intro}
        >
          <View
            style={styles.header}
          >
            <Icon name="chevron-left" color="#222" size={52} onPress={() => this.props.navigation.goBack()}/>
          </View>
          <View
            style={styles.carouselContainer}
          >

          </View>
        </View>
        <View
          style={styles.content}
        >
        
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  carouselContainer: {
    padding: 20,
    flex: 1,
  },
  intro: {
    minHeight: vh('63%'),

    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  content: {
    minHeight: vh('90%'),
    backgroundColor: '#f2f2f2',
  },
})