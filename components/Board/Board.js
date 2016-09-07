import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';
import Button from '../Button';
import Card from '../Card';
import words from './words.json';
import types from './types.json';


class Board extends React.Component {

    constructor() {
        super();
        this.generateNewGameState = this.generateNewGameState.bind(this);
        this.checkWinner = this.checkWinner.bind(this);
        this.types = types.types;
        this.words = words.words;
        let cards = this.generateNewGameState();
        this.state = {
            cards: cards,
            isLegendShowing: false
        };
     }

    generateNewGameState() {
        console.log("generateNewGameState");
        let cards = [];

        this.isRedFirst = !!Math.round(Math.random() * 1);
        let lastWord = this.isRedFirst ? "RED" : "BLUE";

        this.types[24] = lastWord;

        console.log(this.types);
        console.log(types);
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

  cardClick(id) {
      let type = ""
    let updated = this.state.cards.map(card => {
        if(card.id === id) {
            card.revealed = true;
            type = card.type;
        }
        return card
    })
    this.setState ({cards: updated})
    this.checkWinner(type);
  }

  legendClick() {
      let updated = this.state;
      updated.isLegendShowing = !updated.isLegendShowing;
      this.setState(updated);
  }

  newGameClick() {
      let cards = this.generateNewGameState();
      let state = {
          cards: cards,
          isLegendShowing: false
      };

      this.setState(state);
  }

  checkWinner(type){

      if (type === "YELLOW") {
          return;
      }
      if (type === "BLACK") {
          alert("Your opponent wins!");
      } else {
          //this.state.map(card => )
          //todo: proveri dali ke najdes karta so tip toj i revealed false
      }

  }

  render() {
      return <div className={s.root}>
      <input type="button" className="buttonLegend" onClick={this.legendClick.bind(this)} value={this.state.isLegendShowing ? "HIDE LEGEND" : "SHOW LEGEND"} />
      <input type="button" className="buttonNewGame" onClick={this.newGameClick.bind(this)} value="NEW GAME"/>
      <br/>
        {this.state.cards.map((card)=> {
            return <Card key={card.id} card={card} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick.bind(this)} />
        })}
      </div>
  }

}

export default Board;
