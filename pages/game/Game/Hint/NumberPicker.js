import React from 'react';
import cx from 'classnames';
import s from './styles.css';


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
        <button onClick={this.toggle.bind(this)} className={`${s.full}`}>Pick Number</button>
      )

    return (
      <div className={s.numCont}>
        <button onClick={this.count(0)} className={`${s.num}`}>0</button>
        <button onClick={this.count(1)} className={`${s.num}`}>1</button>
        <button onClick={this.count(2)} className={`${s.num}`}>2</button>
        <button onClick={this.count(3)} className={`${s.num}`}>3</button>
        <button onClick={this.count(4)} className={`${s.num}`}>4</button>
        <button onClick={this.count(5)} className={`${s.num}`}>5</button>
        <button onClick={this.count(6)} className={`${s.num}`}>6</button>
        <button onClick={this.count(7)} className={`${s.num}`}>7</button>
        <button onClick={this.count(8)} className={`${s.num}`}>8</button>
        <button onClick={this.count(8)} className={`${s.num}`}>9</button>
        <button onClick={this.count('infinity')} className={`${s.full}`}>Infinity</button>
      </div>
    )
  }

}

export default NumberPicker;
