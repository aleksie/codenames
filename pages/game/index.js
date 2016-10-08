import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Game from './Game';
import s from './styles.css';

class GamePage extends React.Component {
  render() {
    return (
      <Layout>
        <Game />
      </Layout>
    );
  }

}


export default GamePage
