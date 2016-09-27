import React from 'react';
import cx from 'classnames';
import s from './styles.css';

import { connect } from 'react-redux'

class GameStatus extends React.Component {

  findPlayers(players) {
      let redTell = '', blueTell = '', redGuess = '', blueGuess = ''

      players.forEach(player => {
        if(player.slot ==='red-tell')
          redTell = player.name
        if(player.slot ==='blue-tell')
          blueTell = player.name
        if(player.slot ==='red-guess')
          redGuess = player.name
        if(player.slot ==='blue-guess')
          blueGuess = player.name
      })
      return {redTell, blueTell, redGuess, blueGuess}
  }

  findScore(game) {
    let redScore = game.first === 'red' ? 9 : 8
    let blueScore = game.first === 'blue' ? 9 : 8
    game.cards.forEach(card => {
      if(card.revealed && card.type === 'red')
        redScore--
      if(card.revealed && card.type === 'blue')
        blueScore--
    })
    return {redScore, blueScore}
  }

  render() {
    const {redTell, blueTell, redGuess, blueGuess} = this.findPlayers(this.props.session.players)
    const {redScore, blueScore} = this.findScore(this.props.session.game)
    return (
      <div className={s.gameStatus}>
        <div className={s.horizontal}>
          <div className={`${s.player} ${s.red}`}>{redTell}</div>
          <div className={`${s.player} ${s.red}`}>{redGuess}</div>
        </div>
        <div className={s.vertical}>
          <div className={`${s.score} ${s.red}`}>{redScore}</div>
          <div className={s.score}>-</div>
          <div className={`${s.score} ${s.blue}`}>{blueScore}</div>
        </div>
        <div className={s.horizontal}>
          <div className={`${s.player} ${s.blue}`}>{blueTell}</div>
          <div className={`${s.player} ${s.blue}`}>{blueGuess}</div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) =>
  ({
    player: state.player,
    session: state.currentSession
  })

GameStatus = connect(mapStateToProps)(GameStatus);
export default GameStatus;
