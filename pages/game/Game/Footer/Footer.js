import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import Log from './Log'
import Hint from './Hint'
import Guess from './Guess'
import Chat from './Chat'

class Footer extends React.Component {

  render() {
    return (
      <div className={s.footer}>
        <Hint />
        <Guess />
        <Chat />
        <Log />
      </div>
    )
  }

}

export default Footer;
