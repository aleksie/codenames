import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';

class Card extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick(this.props.card.id);
  }

  render() {

    var map = {
      'RED': s.red,
      'BLUE': s.blue,
      'YELLOW': s.yellow,
      'BLACK': s.black
    }

    var cardStyle = cx({
      [s.card]: true,
      [map[this.props.card.type]]: this.props.card.revealed || this.props.isLegendShowing
    });

    return (<div className={cardStyle} onClick={this.handleClick}>
        <div className={s.inner}>
          <div className={s.upper}>
            <div className={s.circle}>
              <svg width="100%" height="20" xmlns="http://www.w3.org/2000/svg"><g><title>background</title><rect fill="#eadaca" id="canvas_background" height="100%" width="100%" y="-1" x="-1"></rect></g><g><title>Layer 1</title><ellipse ry="8" rx="8" id="svg_2" cy="50%" cx="50%" stroke="#b8a48b" fill="#eadaca"></ellipse><ellipse ry="6" rx="6" id="svg_1" cy="50%" cx="50%" stroke="#b8a48b" fill="#fffdfc"></ellipse></g></svg>
            </div>
            <div className={s.grey}><span className={s.text}>{this.props.card.text.toUpperCase()}</span></div>
          </div>
          <div className={s.lower}><span className={s.text}>{this.props.card.text.toUpperCase()}</span></div>
        </div>
      </div>)
  }

}

export default Card;
