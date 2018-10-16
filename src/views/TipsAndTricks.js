import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Text, Header, Icon } from 'react-native-elements';
import {widthPercentageToDP as vw, heightPercentageToDP as vh} from 'react-native-responsive-screen';
import Carousel from '../components/Carousel';
import myTips from '../data/tips.json';

export default class TipsAndTricks extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      currentTip: myTips[0]
    };
  };
  render() {
    let {
      currentIndex,
      currentTip,
    } = this.state;

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
                this.setState(() => ({ currentIndex: index, currentTip: myTips[index] }))
              }
            />
          </View>
        </View>
        <View
          style={styles.content}
        >
          <Image source={{ uri: currentTip.author.image }} defaultSource={require('../assets/images/tea.png')} style={styles.contentImage}/>
          <Text style={styles.contentHeader}>¿Sabias qué?</Text>
          <Text style={styles.contentText}>{currentTip.author.description}</Text>
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
    paddingBottom: 20,
    width: vw('100%')
  },
  intro: {
    minHeight: vh('63%'),

    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  content: {
    minHeight: vh('90%'),
    backgroundColor: '#f2f2f2',
    padding: 20,
    paddingTop: 30,
  },
  contentImage: {
    position: 'absolute',
    top: -10,
    right: 20,
    height: vh('12%'),
    width: vh('12%'),
    borderRadius: vh('6%'),
    borderColor: '#cdcdcd',
    borderWidth: 1,
    backgroundColor: '#00D0D2'
  },
  contentHeader: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    color: 'black',
    marginBottom: 20
  },
  contentText: {
    color: '#979797',
    fontSize: 24,
    fontFamily: 'Roboto-Light'
  }
})