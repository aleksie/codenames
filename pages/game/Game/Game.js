import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import Board from './Board'
import Hint from './Hint'
import Log from './Log'
import GameStatus from './GameStatus'
import Guess from './Guess'
import api from '../../../core/api'
import beep from '../../../core/beep'

class Game extends React.Component {

  constructor() {
    super()
    this.guess = this.guess.bind(this)
    this.tell = this.tell.bind(this)
  }

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

    return (
      <div>
        <Log log={this.props.game.log} />
        {
          myTurn && tell ? <Hint onHint={this.tell} /> : ''
        }
        {
          myTurn && !tell ? <Guess /> : ''

        }
        <GameStatus />
        <Board cardClick={this.guess} game={this.props.game} />
      </div>
    )
  }

}

export default Game;
