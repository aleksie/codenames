import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import Board from '../../components/Board'
import Hint from '../../components/Hint'
import api from '../../core/api'
import beep from '../../core/beep'

class Game extends React.Component {

  constructor() {
    super()
    this.guess = this.guess.bind(this)
    this.tell = this.tell.bind(this)
    this.pass = this.pass.bind(this)
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

  pass() {
    api.send('pass')
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
        <h1>{this.props.game.turn}</h1>
        <h2>
          Red hint: <span style={{color:'darkred'}}>{redhint} </span>
          Blue hint: <span style={{color:'darkblue'}}>{bluehint} </span>
        </h2>
        {
          myTurn ?
          <div>
            <h1>Your turn!</h1>
            {
              tell ?
              <div>
                <Hint onHint={this.tell} />
              </div>:
              <div>
                <button onClick={this.pass}>Pass</button>
              </div>
            }
          </div>: ''
        }

        <Board cardClick={this.guess} game={this.props.game} />
      </div>
    )
  }

}

export default Game;
