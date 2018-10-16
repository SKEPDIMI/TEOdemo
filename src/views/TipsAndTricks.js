import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Header, Icon } from 'react-native-elements';
import {widthPercentageToDP as vw, heightPercentageToDP as vh} from 'react-native-responsive-screen';
import Carousel from '../components/Carousel';
import myTips from '../data/tips.json';

export default class TipsAndTricks extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
    };
  };
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
            <Carousel
              data={myTips}
              index={this.state.currentIndex}
              onIndexChange={index =>
                this.setState(() => ({ currentIndex: index }))
              }
            />
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
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20
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