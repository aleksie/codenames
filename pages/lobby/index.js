import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Lobby from '../../components/Lobby'
import s from './styles.css';
import { connect } from 'react-redux'
import api from '../../core/api'
import * as actions from '../../actions'
import history from '../../core/history'

class LobbyPage extends React.Component {

  constructor() {
    super()
    this.onObserverSeatClick = () => this.slot('')
    this.onBlueTellClick = () => this.slot('blue-tell')
    this.onRedTellClick = () => this.slot('red-tell')
    this.onBlueGuessClick = () => this.slot('blue-guess')
    this.onRedGuessClick = () => this.slot('red-guess')
    this.onStartClick = () => api.send('startGame', this.props.currentSession.id)
  }
  componentDidMount() {
  }


  componentDidUpdate() {
    if(!!this.props.currentSession.game)
      history.push(`/sessions/${this.props.currentSession.id}/game`)
  }

  slot(slot) {
    api.send('getSlot', {
      sessionId: this.props.currentSession.id,
      slot: slot
    })
  }


  render() {
    return (
      <Layout className = { s.content } >
        <h1> current session </h1>
        <Lobby
          onStartClick = {this.onStartClick}
          onObserverSeatClick ={this.onObserverSeatClick}
          onBlueTellClick ={this.onBlueTellClick}
          onRedTellClick ={this.onRedTellClick}
          onBlueGuessClick ={this.onBlueGuessClick}
          onRedGuessClick ={this.onRedGuessClick}
          session={this.props.currentSession}/>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentSession: state.currentSession
  }
}

LobbyPage = connect(mapStateToProps, actions)(LobbyPage);

export default LobbyPage
