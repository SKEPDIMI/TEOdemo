import React, { Component } from 'react';
import {widthPercentageToDP as vw} from 'react-native-responsive-screen';
import SideSwipe from 'react-native-sideswipe';
import TipCard from './TipCard';

export default class Carousel extends Component {
  render(){
    return(
      <SideSwipe
        {...this.props}
        itemWidth={TipCard.WIDTH}
        style={{ flex: 1, width: vw('100%') }}
        contentOffset={vw('10%')}

        renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
          <TipCard
            {...item}
            animatedValue={animatedValue}
          />
        )}
      />
    );
  }
};