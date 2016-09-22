import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Game from '../../components/Game';
import s from './styles.css';
import { connect } from 'react-redux'
import { dispatch } from 'redux'

const actionCreator = () => ({
  type: 'NAVIGATE',
  value: 'basi'
})

class GamePage extends React.Component {

  render() {
    console.log(this.props.game);
    return (
      <Layout>
        <Game player={this.props.player} game={this.props.game} />
      </Layout>
    );
  }

}

const mapStateToProps = (state, ownProps) =>
  ({
    player: state.player,
    game: state.currentSession.game
  })

GamePage = connect(mapStateToProps)(GamePage);

export default GamePage
