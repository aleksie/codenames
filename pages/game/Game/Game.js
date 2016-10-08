import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import Board from './Board'
import GameStatus from './GameStatus'
import Footer from './Footer'
import api from '../../../core/api'
import beep from '../../../core/beep'

import {connect} from 'react-redux'

class Game extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.game.turn !== this.props.game.turn && this.props.player.slot === this.props.game.turn)
      beep()
  }

  tell(hint) {
    const color = this.props.player.slot.indexOf('red') > -1 ? 'red' : 'blue'
    api.send(`${color}Tell`, {
      sessionId: this.props.player.currentSessionId,
      value: hint
    })
  }

  guess(card) {
    const color = this.props.player.slot.indexOf('red') > -1 ? 'red' : 'blue'
    api.send(`${color}Guess`, {
      sessionId: this.props.player.currentSessionId,
      value: card.pos
    })
  }

  render() {
    const myTurn = this.props.player.slot === this.props.game.turn
    const tell = this.props.player.slot.indexOf('tell') > -1

    const rh = this.props.game.redHint
    const redhint = rh ? `${rh.hint} ${rh.count}` : ''

    const bh = this.props.game.blueHint
    const bluehint = bh ? `${bh.hint} ${bh.count}` : ''

        // {
        //   myTurn && tell ? <Hint onHint={this.tell} /> : ''
        // }
        // {
        //   myTurn && !tell ? <Guess /> : ''
        //
        // }

    return (
      <div>
        <GameStatus />
        <Board cardClick={this.guess.bind(this)} game={this.props.game} />
        <Footer />
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) =>
  ({
    player: state.player,
    game: state.currentSession.game
  })

Game = connect(mapStateToProps)(Game);

export default Game;
