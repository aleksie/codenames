import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import Button from '../Button';
import Card from '../Card';


class Board extends React.Component {

  cardClick(card) {
    this.props.cardClick(card)
  }

  render() {
    return (
      <div className={s.container}>
          {
            this.props.game.cards.map(card =>
              <Card key={card.text} card={card} onClick={this.cardClick.bind(this)}/>
            )
          }
      </div>
    )
  }

}

export default Board;
