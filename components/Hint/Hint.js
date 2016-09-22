import React from 'react';
import cx from 'classnames';
import s from './styles.css';


class Hint extends React.Component {

  constructor() {
    super()
    this.updateHint = this.updateHint.bind(this)
    this.updateCount = this.updateCount.bind(this)
    this.onHint = this.onHint.bind(this)

    this.state = {
      hint: '',
      count: ''
    }
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

  count(val) {

    return function(){
      this.updateCount(val)
    }.bind(this)
  }

  render() {
    return (
      <div>
          <input className={s.hintInput} onChange={this.updateHint} ref="hint"/>
          <span className={s.hintShow}>{`${this.state.hint} ${this.state.count}`}</span>
          <br />
          <br />
          <button onClick={this.count(0)} className="mdl-button mdl-js-button mdl-button--raised">0</button>
          <button onClick={this.count(1)} className="mdl-button mdl-js-button mdl-button--raised">1</button>
          <button onClick={this.count(2)} className="mdl-button mdl-js-button mdl-button--raised">2</button>
          <button onClick={this.count(3)} className="mdl-button mdl-js-button mdl-button--raised">3</button>
          <button onClick={this.count(4)} className="mdl-button mdl-js-button mdl-button--raised">4</button>
          <button onClick={this.count(5)} className="mdl-button mdl-js-button mdl-button--raised">5</button>
          <button onClick={this.count(6)} className="mdl-button mdl-js-button mdl-button--raised">6</button>
          <button onClick={this.count(7)} className="mdl-button mdl-js-button mdl-button--raised">7</button>
          <button onClick={this.count(8)} className="mdl-button mdl-js-button mdl-button--raised">8</button>
          <button onClick={this.count('infinity')} className="mdl-button mdl-js-button mdl-button--raised">Infinity</button>
          <br />
          <br />
          <button onClick={this.onHint} className="mdl-button mdl-js-button mdl-button--raised">Hint</button>
      </div>
    )
  }

}

export default Hint;
