import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { connect } from 'react-redux'
import api from '../../core/api'
import * as actions from '../../actions'
import history from '../../core/history'

class Session extends React.Component {
  click() {
    return this.props.onClick(this.props.session)
  }
  render() {
    return(< li onClick = { this.click.bind(this) } > { this.props.session.name } < /li>)
  }
}

class SessionsPage extends React.Component {

  componentDidMount() {
    console.log('Sessions Page')
  }

  createSession() {
    api.send('createSession')
  }

  joinSession(session) {
    this.props.setCurrentSession(session)
    api.send('joinSession', session.id)
    history.push(`${this.props.route.path}/${session.id}/lobby`)
  }


  render() {
    return ( < Layout className = { s.content } >
      < h1 > Sessions < /h1> < button onClick = { this.createSession.bind(this) } > Create < /button> < ul > {
        this.props.sessions.map(session =>
          ( < Session key = { session.id } session={session} onClick={this.joinSession.bind(this)} / > )
        )
      } < /ul> < /Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sessions: state.sessions
  }
}

SessionsPage = connect(mapStateToProps, actions)(SessionsPage);

export default SessionsPage
