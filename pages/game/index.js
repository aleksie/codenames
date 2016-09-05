import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Board from '../../components/Board';
import s from './styles.css';

class GamePage extends React.Component {

  static propTypes = {
  };

  componentDidMount() {
  }

  render() {
    return (
        <Board />
    );
  }

}

export default GamePage;
