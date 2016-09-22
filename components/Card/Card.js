import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';

class Card extends React.Component {

  handleClick() {
    this.props.onClick(this.props.card);
  }

  render() {
    const card = this.props.card
    var cardStyle = cx(s.card, {
      [s[card.type]]: true,
      [s.revealed]: card.revealed
    })
    return (
      <div className={cardStyle} onClick={this.handleClick.bind(this)}>{card.text}</div>
    )
  }
  
}

export default Card;
