import React from 'react';
import cx from 'classnames';
import s from './styles.css';

class PopBox extends React.Component {

  state = {
    open: false
  }

  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      ...this.state,
      open: !this.state.open
    })
    if(this.props.onToggle)
      this.props.onToggle()
  }

  render() {

    if(!this.state.open) {
      return (
      <div className={s.popBox}>
        <div className={s.title} onClick={this.toggle}>{this.props.title}</div>
        <div className={s.hide}>
          {this.props.children}
        </div>
      </div>
      )
    }

    return (
      <div className={s.popBox}>
        <div className={s.title} onClick={this.toggle}>{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }

}

export default PopBox;
