import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import gs from '../../../../../styles/styles.css'
import NumberPicker from './NumberPicker'
import PopBox from '../../../../../components/PopBox'

import { connect } from 'react-redux';
import api from '../../../../../core/api'


class Hint extends React.Component {

  state = {
    open: false,
    hint: '',
    count: '',
    showSubmit: false
  }

  constructor() {
    super()
    this.updateHint = this.updateHint.bind(this)
    this.updateCount = this.updateCount.bind(this)
    this.onHint = this.onHint.bind(this)
  }


  onToggle() {
    this.setState({
      ...this.state,
      open: !this.state.open
    })
  }

  onHint() {
    var {hint, count} = this.state
    const color = this.props.player.slot.indexOf('red') > -1 ? 'red' : 'blue'
    api.send(`${color}Tell`, {
      sessionId: this.props.player.currentSessionId,
      value: {hint, count}
    })
  }

  updateHint() {
    this.setState({
      ...this.state,
      hint: this.refs.hint.value
    })
  }

  updateCount(newCount) {
    this.setState({
      ...this.state,
      count: newCount
    })
  }

  showSubmit() {
    const c = this.state.count
    return !!this.state.hint && !!(Number(parseFloat(c)) === c || c.length)
  }

  render() {

    const myTurn = this.props.player.slot === this.props.gameTurn
    const tell = this.props.player.slot.indexOf('tell') > -1

    if(!myTurn || !tell) {
      return null
    }

    return (
      <PopBox title="hint" >
        <div className={s.hintCont}>
          <span className={s.hintShow}>{`${this.state.hint} ${this.state.count}`}</span>
          <input className={gs.boxAction} onChange={this.updateHint} ref="hint"/>
          <NumberPicker onPick={this.updateCount.bind(this)}/>
          {
            this.showSubmit() ?
            <button onClick={this.onHint} className={gs.boxAction}>Hint</button>
            : ''
          }
        </div>
      </PopBox>
    )
  }
}

Hint = connect((state, ownProps)=>
({
  player: state.player,
  gameTurn: state.currentSession.game.turn
}))(Hint);

export default Hint;
