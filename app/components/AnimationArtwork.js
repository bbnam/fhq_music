import React, { Component } from "react";

import { Animated, Easing } from "react-native";


// const defaultArtwork = require("../../assets/defaultCover.jpeg");


class AnimationArtWork extends React.PureComponent {
  constructor(props) {
    super(props);
    this.RotateValueHolder = new Animated.Value(0);
  }


  _isMounted = false;

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.startImageRotateFunction();
 

  };


  startImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 50000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start(() => {
        this.startImageRotateFunction();
      }
    );
  }


  render() {
    // console.log((this.props.playing));
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });


    // if(this.props.playing == true){
    //   Animated.timing(
    //     this.RotateValueHolder
    //   ).stop();
      
    // }
    // else{
      return (
        <Animated.Image rounded
                        source={this.props.CurrentPlayImage }
                        style={[this.props.styles, { transform: [{ rotate: RotateData }] }]}
        />
      )
    // }

  }
}


export default AnimationArtWork;