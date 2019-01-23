import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PlayButton from './PlayButton';

class StartScreen extends Component {
  state = {}

  navigateToPlay = () => {
    const { navigation: { navigate, getParam } } = this.props;
    navigate('InitialiseAR', { uid: getParam('uid') });
  }

  render() {
    return (
      <PlayButton buttonText="Play" navigateToPlay={this.navigateToPlay} />
    );
  }
}

StartScreen.propTypes = {

};

export default StartScreen;
