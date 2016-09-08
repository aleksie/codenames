import React from 'react';
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
    this.getOpponentUnrevealedIndexes = this.getOpponentUnrevealedIndexes.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.legendClick = this.legendClick.bind(this)
    this.newGameClick = this.newGameClick.bind(this)
    this.checkWinner = this.checkWinner.bind(this)
    this.cardClick = this.cardClick.bind(this)

    this.types = types.types;
    this.words = words.words;
    let cards = this.generateNewGameState();
    console.log("cards", cards);
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
    let wordsIndexes = this.getRandomIndexes(this.words.length - 1, 25);
    let typeIndexes = this.getRandomIndexes(this.types.length - 1, 25);
    console.log(wordsIndexes);
    console.log(typeIndexes);
    for (var i = 0; i < 25; i++) {
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

  getRandomIndexes(max, count) {
    let indexes = [];
    for (var i = 0; i < count; i++) {
      let index = Math.floor(Math.random() * (max + 1));
      if (indexes.indexOf(index) == -1) {
        indexes.push(index);
      } else {
        i--;
      }

    }
    return indexes;

  }

  cardClick(id) {
    let type = ""
    let updated = this.state.cards.map(card => {
      if (card.id === id) {
        card.revealed = true;
        type = card.type;
      }
      return card
    })
    this.setState({
      cards: updated
    })
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

  simulateOpponentTurn() {
      let opponentType = this.isRedFirst ? "BLUE" : "RED";

      let opponentUnrevealedIndexes = this.getOpponentUnrevealedIndexes(opponentType);
      let randomIndexes = [];
      if (opponentUnrevealedIndexes.length > 1) {
          randomIndexes = this.getRandomIndexes(opponentUnrevealedIndexes.length - 1, 2);
      } else {
          randomIndexes = [0];
      }

      console.log(opponentUnrevealedIndexes);
      console.log(randomIndexes);
      let type = "";
      let updated = this.state.cards.map(card => {
          if(card.id === opponentUnrevealedIndexes[randomIndexes[0]] || (randomIndexes.length > 1 && card.id === opponentUnrevealedIndexes[randomIndexes[1]]) ) {
              card.revealed = true;
              type = card.type;
          }
          return card
      })
      this.setState ({cards: updated})
      this.checkWinner(type);
  }

    getOpponentUnrevealedIndexes(opponentType) {
        let cards = this.state.cards.filter(function(card) {
            return (card.type === opponentType && card.revealed === false);
        });
        var indexes = cards.map(function(card) {return card.id;});
        return indexes;
    }

  checkWinner(type) {
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
    let i = 0

    return <div>
              <input type="button" className="buttonLegend" onClick={this.legendClick} value={this.state.isLegendShowing ? "HIDE LEGEND" : "SHOW LEGEND"} />
              <input type="button" className="buttonNewGame" onClick={this.newGameClick} value="NEW GAME"/>
              <input type="button" className="buttonSimulateOpponentTurn" onClick={this.simulateOpponentTurn.bind(this)} value="SIMULATE OPPONENT TURN"/>
              <br/>
              <div className={s.container}>
                <div className={s.row}>
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                </div>
                <div className={s.row}>
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                </div>
                <div className={s.row}>
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                </div>
                <div className={s.row}>
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                </div>
                <div className={s.row}>
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                  <Card card={this.state.cards[i++]} isLegendShowing={this.state.isLegendShowing} onClick={this.cardClick} />
                </div>
              </div>
           </div>
  }

}

export default Board;
