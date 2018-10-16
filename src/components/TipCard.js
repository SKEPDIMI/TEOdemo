import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {widthPercentageToDP as vw, heightPercentageToDP as vh} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export default class TipCard extends Component {
  // The width of each card, used by sideSwiper
  static WIDTH = vw('58%') + 20
  
  render(){
    let {
      iconName,
      title,
      description,
    } = this.props; 

    return(
      <View style={styles.container}>
        <LinearGradient
          style={styles.gradient}
          colors={[
            '#44ccd0',
            '#319c9e',
            '#217070',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Image
            source={require('../assets/images/tea.png')}
            height={vh('10%')}
          />
          <Text
            style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
          >
            {title}
          </Text>
          <Text
            style={{ color: 'white', textAlign: 'left', fontSize: 16 }}
          >
            {description}
          </Text>
        </LinearGradient>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
    width: vw('58%'),
    borderRadius: vh('3%'),
    overflow: 'hidden',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 3 },
    marginRight: 20,
  },
  gradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignItems: 'center',
  },
});
