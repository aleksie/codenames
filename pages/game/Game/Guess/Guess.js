import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import api from '../../../../core/api'
import { connect } from 'react-redux'
import gs from '../../../../styles/styles.css'

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

    if(!this.state.open)
      return (
          <button onClick={this.toggle.bind(this)} className={`${s.widget} mdl-button mdl-button--fab mdl-button--mini-fab`}>
            <i className="material-icons">add</i>
          </button>
      )

    const turn = this.props.session.game.turn.substring(0,this.props.session.game.turn.indexOf('-'))
    const hint = this.props.session.game[`${turn}Hint`]

    if(!hint)
      return (null)

    const str = `${hint.hint} ${hint.count}`
    return (
      <div className={`${s.guessCont} ${s.widget}`}>
        <div className={gs.boxTitle} onClick={this.toggle.bind(this)}>Your Hint</div>
        <h1 className={s.guessHint} onClick={this.toggle.bind(this)}>{str}</h1>
        <button className={gs.boxAction} onClick={this.pass.bind(this)}>Pass</button>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) =>
  ({
    player: state.player,
    session: state.currentSession
  })

Guess = connect(mapStateToProps)(Guess);
export default Guess;
