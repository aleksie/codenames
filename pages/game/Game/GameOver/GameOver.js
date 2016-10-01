import React from 'react';
import cx from 'classnames';
import s from './styles.css';

import { connect } from 'react-redux'

class GameOver extends React.Component {

  render() {
    return (
      <h1 className={s.gameOver}>You {this.props.win}!</h1>
    )
  }

}

export default GameOver;
