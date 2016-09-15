export const setName = name =>
({
  type: 'setName',
  value: name
})

export const receiveSessions = sessions =>
({
  type: 'receiveSessions',
  value: sessions
})

export const setCurrentSession = session =>
({
  type: 'setCurrentSession',
  value: session
})

export const receiveSessionPlayers = players =>
({
  type: 'receiveSessionPlayers',
  value: players
})

export const gameState = state =>
({
  type: 'gameState',
  value: state
})
