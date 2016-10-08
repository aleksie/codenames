import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import api from '../../../../../core/api'
import gs from '../../../../../styles/styles.css'
import PopBox from '../../../../../components/PopBox'

import { connect } from 'react-redux'

class Guess extends React.Component {

  state = {
    open: true,
  }

  toggle() {
    this.setState(Object.assign(this.state, {
      open: !this.state.open
    }))
  }

  pass() {
    api.send('pass')
  }

  render() {

    const myTurn = this.props.player.slot === this.props.game.turn
    const tell = this.props.player.slot.indexOf('tell') > -1

    if(!myTurn || tell) {
      return null
    }

    const turn = this.props.game.turn.substring(0,this.props.game.turn.indexOf('-'))
    const hint = this.props.game[`${turn}Hint`]

    if(!hint)
      return (null)

    const str = `${hint.hint} ${hint.count}`
    return (

      <PopBox title="guess" >
        <div className={`${s.guessCont}`}>
          <h1 className={s.guessHint} onClick={this.toggle.bind(this)}>{str}</h1>
          <button className={gs.boxAction} onClick={this.pass.bind(this)}>Pass</button>
        </div>
      </PopBox>
    )
  }

}

const mapStateToProps = (state, ownProps) =>
  ({
    player: state.player,
    game: state.currentSession.game
  })

Guess = connect(mapStateToProps)(Guess);
export default Guess;
