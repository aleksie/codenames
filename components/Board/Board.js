import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';
import Card from '../Card';
import words from './words.json';
import types from './types.json';

class Board extends React.Component {

    constructor() {
        super();
        this.generateNewGameState = this.generateNewGameState.bind(this);
        this.types = types.types;
        this.words = words.words;
        let cards = this.generateNewGameState();
        console.log("cards", cards);
        this.state = {
            cards: cards
        };
    }

    generateNewGameState() {
        console.log("generateNewGameState");
        let cards = [];

        let isRedFirst = !!Math.round(Math.random() * 1);
        console.log("isRedFirst", isRedFirst);

        if (isRedFirst) {
            this.types.push("RED");
        } else {
            this.types.push("BLUE");
        }

        let wordsIndexes = this.getRandomIndexes(this.words.length - 1);
        let typeIndexes = this.getRandomIndexes(this.types.length - 1);
        console.log(wordsIndexes);
        console.log(typeIndexes);
        for (var i=0; i < 25; i++) {
            let card = {
                id: i,
                text: this.words[wordsIndexes[i]],
                type: (this.types[typeIndexes[i]]),
                revealed: false
            };
            cards.push(card);

    }
        return cards;
    }

    getRandomIndexes(max) {
        let indexes = [];
        for (var i=0; i < 25; i++) {
            let index = Math.floor(Math.random() * (max + 1));
            if (indexes.indexOf(index) == -1) {
                indexes.push(index);
            } else {
                i--;
            }

        }
        return indexes;

    }

  static propTypes = {
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleClick(id) {
    let updated = this.state.cards.map(card => {
        if(card.id === id)
            card.revealed = true
        return card
    })
    this.setState ({cards: updated})
  }

  render() {
      return <div className={s.root}>
        {this.state.cards.map((card)=> {
            return <Card key={card.id} card={card}  onClick={this.handleClick.bind(this)} />
        })}
      </div>
  }

}

export default Board;
