import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';
import PopBox from '../../../../../components/PopBox'

import api from '../../../../../core/api'

import {connect} from 'react-redux';

class Chat extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.session.chat.length !== this.props.session.chat.length
  }

  componentDidUpdate() {
    if(this.refs.ul)
      this.refs.ul.scrollTop = this.refs.ul.scrollHeight;
  }

  onToggle() {
    if(this.refs.ul) {
      setTimeout(()=> this.refs.ul.scrollTop = this.refs.ul.scrollHeight , 0)
    }
  }

  onKeyPress(e) {
    if(e.charCode === 13) {
      api.send('chatMessage', {
        sessionId: this.props.session.id,
        message: this.refs.input.value,
        from: this.props.playerName
      })
      this.refs.input.value = ''
    }
  }

  render() {
    let content;
    if(!this.props.session.chat.length || this.props.session.chat.length === 0)
      content =
          <p style={{margin:'auto'}}>No messages yet.</p>
    else
      content =
          <ul ref="ul" className={s.chat}>
            {
              this.props.session.chat.map((message,i) => {
                const who = cx({
                  // [s.red]: true,
                  [s.name]: true
                })
                    // <small className={s.time}>12 mins ago</small>
                return (
                  <li key={i} className={s.message}>
                    <p className={s.text}><strong className={who}>{message.from}</strong>{message.message}</p>
                  </li>
                )
              })
            }
          </ul>

    const pop = !!this.props.session.chat.length
    return (
      <PopBox title="chat" pop={pop} onToggle={this.onToggle.bind(this)}>
        <div className={s.chatCon}>
          {content}
          <input ref="input" type="text" placeholder="Type a message..." className={s.input} onKeyPress={this.onKeyPress.bind(this)}/>
        </div>
      </PopBox>
    )

  }

}

Chat = connect((state, ownProps)=>
({
  playerName: state.player.name,
  session: state.currentSession
}))(Chat);

export default Chat;
