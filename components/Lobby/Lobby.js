import React from 'react';
import s from './Lobby.css'

class Lobby extends React.Component {

  render() {
    const session = this.props.session
    const empty = '[empty]'
    const players = {
      observers: [],
      redTell: empty,
      blueTell: empty,
      redGuess: empty,
      blueGuess: empty,
    }

    session.players.forEach(player => {
      switch (player.slot) {
        case 'red-tell':
          players.redTell = player.name
          break
        case 'blue-tell':
          players.blueTell = player.name
          break
        case 'red-guess':
          players.redGuess = player.name
          break
        case 'blue-guess':
          players.blueGuess = player.name
          break
        default:
          players.observers.push(player)
      }
    })

    return (
      <div>
        <div className={s.lobby}>
          <div className={s.playerList} onClick={this.props.onObserverSeatClick}>
            <h1>players</h1>
            <ul>
              {players.observers.map(player =>
                <li key={player.id}>{player.name}</li>
              )}
            </ul>
          </div>
          <div className={s.slots}>
            <div className={s.row}>
              <div className={s.lobbySlot} onClick={this.props.onBlueTellClick}>
                <h1 className={s.blue}>tell</h1>
                <h1>{players.blueTell}</h1>
              </div>
              <div className={s.lobbySlot} onClick={this.props.onRedTellClick}>
                <h1 className={s.red}>tell</h1>
                <h1>{players.redTell}</h1>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.lobbySlot} onClick={this.props.onBlueGuessClick}>
                <h1 className={s.blue}>guess</h1>
                <h1>{players.blueGuess}</h1>
              </div>
              <div className={s.lobbySlot} onClick={this.props.onRedGuessClick}>
                <h1 className={s.red}>guess</h1>
                <h1>{players.redGuess}</h1>
              </div>
            </div>
          </div>
        </div>
        <button onClick={this.props.onStartClick}>Start</button>
      </div>
    )
  }

}



export default Lobby;
