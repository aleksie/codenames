import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import gs from '../../../../styles/styles.css'


class NumberPicker extends React.Component {

  state = {
    open : false
  }

  toggle() {
    this.setState(Object.assign(this.state, {
      open: !this.state.open
    }))
  }

  count(val) {
    return function(){
      this.toggle()
      this.props.onPick(val)
    }.bind(this)
  }


  render() {

    if(!this.state.open)
      return (
        <button onClick={this.toggle.bind(this)} className={gs.boxAction}>Pick Number</button>
      )

    return (
      <div className={s.numCont}>
        <button onClick={this.count(0)} className={`${s.num} ${gs.rounded}`}>0</button>
        <button onClick={this.count(1)} className={`${s.num} ${gs.rounded}`}>1</button>
        <button onClick={this.count(2)} className={`${s.num} ${gs.rounded}`}>2</button>
        <button onClick={this.count(3)} className={`${s.num} ${gs.rounded}`}>3</button>
        <button onClick={this.count(4)} className={`${s.num} ${gs.rounded}`}>4</button>
        <button onClick={this.count(5)} className={`${s.num} ${gs.rounded}`}>5</button>
        <button onClick={this.count(6)} className={`${s.num} ${gs.rounded}`}>6</button>
        <button onClick={this.count(7)} className={`${s.num} ${gs.rounded}`}>7</button>
        <button onClick={this.count(8)} className={`${s.num} ${gs.rounded}`}>8</button>
        <button onClick={this.count(8)} className={`${s.num} ${gs.rounded}`}>9</button>
        <button onClick={this.count('infinity')} className={`${s.full} ${gs.rounded}`}>Infinity</button>
      </div>
    )
  }

}

export default NumberPicker;
