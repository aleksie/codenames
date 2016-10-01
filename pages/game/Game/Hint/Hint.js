import React from 'react';
import cx from 'classnames';
import s from './styles.css';

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
          <button onClick={this.toggle.bind(this)} className={`${s.bottomRight} mdl-button mdl-button--fab mdl-button--mini-fab`}>
            <i className="material-icons">add</i>
          </button>
      )

    return (
      <div className={`${s.hintCont} ${s.bottomRight}`}>
          <div className={s.title} onClick={this.toggle.bind(this)}>Action</div>
          <span className={s.hintShow}>{`${this.state.hint} ${this.state.count}`}</span>
          <input className={s.hintInput} onChange={this.updateHint} ref="hint"/>
          <NumberPicker onPick={this.updateCount.bind(this)}/>
          {
            this.showSubmit() ?
              <button onClick={this.onHint} className={`${s.full} mdl-button mdl-js-button mdl-button--raised`}>Hint</button>
              : ''
          }
      </div>
    )
  }

}

export default Hint;
