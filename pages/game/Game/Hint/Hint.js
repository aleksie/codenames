import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import gs from '../../../../styles/styles.css'

import NumberPicker from './NumberPicker'


class Hint extends React.Component {

  state = {
    open: false,
    hint: '',
    count: '',
    showSubmit: false
  }

  toggle() {
    this.setState(Object.assign(this.state, {
      open: !this.state.open
    }))
  }

  constructor() {
    super()
    this.updateHint = this.updateHint.bind(this)
    this.updateCount = this.updateCount.bind(this)
    this.onHint = this.onHint.bind(this)
  }

  onHint() {
    this.props.onHint(this.state)
  }

  updateHint() {
    this.setState(Object.assign({}, this.state, {
      hint: this.refs.hint.value
    }))
  }

  updateCount(newCount) {
    this.setState(Object.assign({}, this.state, {
      count: newCount
    }))
  }

  showSubmit() {
    const c = this.state.count
    return !!this.state.hint && !!(Number(parseFloat(c)) === c || c.length)
  }

  render() {

    if(!this.state.open)
      return (
          <button onClick={this.toggle.bind(this)} className={`${s.widget} mdl-button mdl-button--fab mdl-button--mini-fab`}>
            <i className="material-icons">add</i>
          </button>
      )

    return (
      <div className={`${s.hintCont} ${s.widget}`}>
          <div className={gs.boxTitle} onClick={this.toggle.bind(this)}>Hint</div>
          <span className={s.hintShow}>{`${this.state.hint} ${this.state.count}`}</span>
          <input className={gs.boxAction} onChange={this.updateHint} ref="hint"/>
          <NumberPicker onPick={this.updateCount.bind(this)}/>
          {
            this.showSubmit() ?
              <button onClick={this.onHint} className={gs.boxAction}>Hint</button>
              : ''
          }
      </div>
    )
  }

}

export default Hint;
