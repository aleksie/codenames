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

  componentDidMount() {
    this.updatePop(this.props.pop)
  }

  componentWillReceiveProps(newProps) {
    this.updatePop(newProps.pop)
  }

  updatePop(pop) {
    this.setState({
      ...this.state,
      pop: pop
    })
  }

  toggle() {
    this.setState({
      ...this.state,
      open: !this.state.open,
      pop: false
    })
    if(this.props.onToggle)
      this.props.onToggle()
  }

  render() {
    const titleClass = cx({
      [s.title]: true,
      [s.popping]: this.state.pop && !this.state.open
    })

    if(!this.state.open) {
      return (
      <div className={s.popBox}>
        <div className={titleClass} onClick={this.toggle}>{this.props.title}</div>
        <div className={s.hide}>
          {this.props.children}
        </div>
      </div>
      )
    }

    return (
      <div className={s.popBox}>
        <div className={titleClass} onClick={this.toggle}>{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }

}

export default PopBox;
