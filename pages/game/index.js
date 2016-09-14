import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Board from '../../components/Board';
import s from './styles.css';
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import { getWinner } from '../../reducers'

const actionCreator = () => ({
  type: 'NAVIGATE',
  value: 'basi'
})

class GamePage extends React.Component {

  static propTypes = {};

  componentDidMount() {
    // setTimeout(() => {
    //   console.log('firing')
    //   this.props.proba()
    // }, 3000)
  }

  render() {
    return ( < div > { this.props.winner } < Board / > < /div> );
  }

}

GamePage = connect((state, ownProps) => {
  console.log('select')
  console.log(getWinner)
  return { winner: getWinner(state) }
}, {
  proba: actionCreator
})(GamePage);

export default GamePage
