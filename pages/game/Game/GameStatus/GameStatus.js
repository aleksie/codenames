import React from 'react';
import cx from 'classnames';
import s from './styles.css';

import { connect } from 'react-redux'

class GameStatus extends React.Component {

  constructor() {
    super()
    this.getClassNames = this.getClassNames.bind(this)
  }

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

  getClassNames(playerSlot, gameTurn) {
    return cx({
      [s.player]: true,
      [s.red]: playerSlot.indexOf('red') > -1,
      [s.blue]: playerSlot.indexOf('blue') > -1,
      [s.active]: playerSlot === this.props.session.game.turn
    })
  }

  componentDidMount() {
    this.setTitle()
  }

  componentDidUpdate() {
    this.setTitle()
  }

  setTitle() {
    const filtered = this.props.session.players.filter(player => player.slot === this.props.session.game.turn)
    if(filtered.length === 1) {
      const player = filtered[0]
      if(player.name === this.props.player.name)
        document.title = `Your Turn!`
      else
        document.title = `${player.name}\`s turn`
    }
  }

  render() {
    const {redTell, blueTell, redGuess, blueGuess} = this.findPlayers(this.props.session.players)
    const {redScore, blueScore} = this.findScore(this.props.session.game)
    const cn = this.getClassNames
    return (
      <div className={s.gameStatus}>
        <div className={s.horizontal}>
          <div className={cn('red-tell')}>{redTell}</div>
          <div className={cn('red-guess')}>{redGuess}</div>
        </div>
        <div className={s.vertical}>
          <div className={`${s.score} ${s.red}`}>{redScore}</div>
          <div className={s.score}>-</div>
          <div className={`${s.score} ${s.blue}`}>{blueScore}</div>
        </div>
        <div className={s.horizontal}>
          <div className={cn('blue-tell')}>{blueTell}</div>
          <div className={cn('blue-guess')}>{blueGuess}</div>
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
