import SockJS from 'sockjs-client'
import store from './store'
import * as actions from '../actions'
import history from './history'

const sock = new SockJS('http://localhost:9999/echo')
// const sock = new SockJS('http://139.59.158.87:9999/echo')

const log = (type, msg) => {
  console.log(`%c [socket][${type}] `, 'font-weight:bold;color:steelblue', msg)
}

const handleMessage = message => {
  log('receive', message)
  switch (message.type) {

    case 'sessions':
      store.dispatch(actions.receiveSessions(message.value))
      break;

    case 'sessionPlayers':
      store.dispatch(actions.receiveSessionPlayers(message.value))
      break;

    case 'gameState':
      store.dispatch(actions.gameState(message.value))
      break;

    default:
      console.log('unknown message');
      break;

  }
}

sock.onopen = function() {
  console.log('open');
  history.push('/name')
};

sock.onmessage = function(e) {
  const data = JSON.parse(e.data)
  handleMessage(data)

};

sock.onclose = function() {
  console.log('close');
};

export default {
  send(type, value) {
    const msg = {
      type,
      value
    }
    log('send', msg)
    return sock.send(JSON.stringify(msg))
  }
}
