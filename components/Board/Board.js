import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';
import Card from '../Card'

class Board extends React.Component {

    constructor() {
        super()
        this.state = {
            cards: [
                {
                    key: 0,
                    text: 'honey',
                    revealed: false,
                    type: 'blue'
                },{
                    key: 1,
                    text: 'honey',
                    revealed: false,
                    type: 'red'
                },{
                    key: 2,
                    text: 'honey',
                    revealed: false,
                    type: 'blue'
                },{
                    key: 3,
                    text: 'honey',
                    revealed: false,
                    type: 'red'
                },{
                    key: 4,
                    text: 'honey',
                    revealed: false,
                    type: 'blue'
                },{
                    key: 5,
                    text: 'honey',
                    revealed: false,
                    type: 'red'
                },{
                    key: 6,
                    text: 'honey',
                    revealed: false,
                    type: 'red'
                },{
                    key: 7,
                    text: 'honey',
                    revealed: false,
                    type: 'blue'
                },{
                    key: 8,
                    text: 'honey',
                    revealed: false,
                    type: 'blue'
                },{
                    key: 9,
                    text: 'honey',
                    revealed: false,
                    type: 'blue'
                },{
                    key: 10,
                    text: 'honey',
                    revealed: false,
                    type: 'blue'
                },{
                    key: 11,
                    text: 'honey',
                    revealed: false,
                    type: 'yellow'
                },{
                    key: 12,
                    text: 'honey',
                    revealed: false,
                    type: 'red'
                },{
                    key: 13,
                    text: 'honey',
                    revealed: false,
                    type: 'yellow'
                },{
                    key: 14,
                    text: 'honey',
                    revealed: false,
                    type: 'yellow'
                },{
                    key: 15,
                    text: 'honey',
                    revealed: false,
                    type: 'yellow'
                },{
                    key: 16,
                    text: 'honey',
                    revealed: false,
                    type: 'yellow'
                },{
                    key: 17,
                    text: 'honey',
                    revealed: false,
                    type: 'red'
                },{
                    key: 18,
                    text: 'honey',
                    revealed: false,
                    type: 'red'
                },{
                    key: 19,
                    text: 'honey',
                    revealed: false,
                    type: 'red'
                },{
                    key: 20,
                    text: 'honey',
                    revealed: false,
                    type: 'yellow'
                },{
                    key: 21,
                    text: 'honey',
                    revealed: false,
                    type: 'yellow'
                },{
                    key: 22,
                    text: 'honey',
                    revealed: false,
                    type: 'yellow'
                },{
                    key: 23,
                    text: 'honey',
                    revealed: false,
                    type: 'black'
                },{
                    key: 24,
                    text: 'honey',
                    revealed: false,
                    type: 'red'
                }
            ]
        }
    }

  static propTypes = {
    // component: PropTypes.oneOf([
    //   PropTypes.string,
    //   PropTypes.element,
    //   PropTypes.func,
    // ]),
    // type: PropTypes.oneOf(['raised', 'fab', 'mini-fab', 'icon']),
    // to: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    // href: PropTypes.string,
    // className: PropTypes.string,
    // colored: PropTypes.bool,
    // primary: PropTypes.bool,
    // accent: PropTypes.bool,
    // ripple: PropTypes.bool,
    // children: PropTypes.node,
  };

  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  // render() {
  //     return <div className="mdl-grid">
  //         <div className="mdl-cell mdl-cell--1-col">1</div>
  //         <div className="mdl-cell mdl-cell--2-col">
  //           <Card text="HONEY"/>
  //         </div>
  //         <div className="mdl-cell mdl-cell--2-col">
  //           <Card text="HONEY"/>
  //         </div>
  //         <div className="mdl-cell mdl-cell--2-col">
  //           <Card text="HONEY"/>
  //         </div>
  //         <div className="mdl-cell mdl-cell--2-col">
  //           <Card text="HONEY"/>
  //         </div>
  //         <div className="mdl-cell mdl-cell--2-col">
  //           <Card text="HONEY"/>
  //         </div>
  //         <div className="mdl-cell mdl-cell--1-col">1</div>
  //       </div>
  // }
  //
  handleClick(id) {
    let updated = this.state.cards.map(card => {
        if(card.key === id)
            card.revealed = true
        return card
    })
    this.setState ({cards: updated})
  }

  render() {
      return <div className={s.root}>
        {this.state.cards.map((card)=> {
            return <Card card={card} onClick={this.handleClick.bind(this)} />
        })}
      </div>
  }


}

export default Board;
